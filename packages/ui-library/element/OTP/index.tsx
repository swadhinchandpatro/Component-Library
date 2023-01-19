import { useEffect, useState, useRef, useMemo } from "react";
import AssetResolver from "@utils/assetResolver";
import variables from "@styles/otpPopup.module.scss";
import { Button } from "../Button";
import classnames from "classnames";

export interface OtpPopupProps {
  className?: string;
  icon: {
    alignment?: 'left' | 'right',
    onClick?(...args: unknown[]): unknown,
    src: string
  };
  mobileNumber: string;
  otpLength?: number;
  timerMaxLimit?: number;
  value?: string;
  messages?: {
    otpMessage?: string;
    success?: boolean;
  },
  loading?: boolean;
  verifyOTP(...args: unknown[]): unknown;
  resendOTP(...args: unknown[]): unknown;
}

export const OtpPopup = ({
  icon = {
    src: "",
    alignment: "right",
  },
  verifyOTP ,
  resendOTP,
  value = "",
  className = "",
  mobileNumber = "6371460914",
  timerMaxLimit = 10,
  otpLength = 6,
  messages,
  loading,
  ...props
}: OtpPopupProps) => {

  const RE_DIGIT = new RegExp(/^\d+$/);
  const [otp, setOtpValue] = useState(value);
  const enableVerifyOTP = () => {
    const trimmedValue = otp.replace(/ /g, '');
    return trimmedValue.length < otpLength;
  };
  const valueItems = useMemo(() => {
    const valueArray = otp.split("");
    const items: Array<string> = [];

    for (let i = 0; i < otpLength; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
  }, [otp, otpLength]);

  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target;
    let targetValue = target.value;
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : " ";

    if (!isTargetValueDigit) {
      return;
    }

    if (!RE_DIGIT.test(targetValue)) {
      return;
    }

    const newValue =
      otp.substring(0, idx) + targetValue + otp.substring(idx + 1);

    setOtpValue(newValue);

    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    const target = e.target as HTMLInputElement;
    const targetValue = target.value;
    // keep the selection range position
    // if the same digit was typed
    target.setSelectionRange(0, targetValue.length);
    if (e.key !== "Backspace") {
      return;
    }

    const newValue = otp.substring(0, idx) + " " + otp.substring(idx + 1);
    setOtpValue(newValue);

    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;
    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    target.setSelectionRange(0, target.value.length);
  };

  const [verifyOtpClicked, setVerifyOtpClicked] = useState(false);
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(timerMaxLimit);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  return (
    <>
      <div
          className={`${className} ${variables.otpCard}`}
        {...props}
      >
        <div className={variables.otpDialog}>
          <div className={variables.otpDialogContent}>
            <div className={variables.otpSentText}>OTP sent to <b className={variables.mobileNo}>{`${mobileNumber}`}</b></div>
              {icon && icon?.src !== "" ? (
              <AssetResolver
                src={icon.src}
                onClick={icon.onClick}
                className={icon.src ? `${variables.icon}` : ""}
              />
              ) : null}
          </div>
          <div 
          className={classnames({
            [variables.otpInputBox]: true,
            [variables.otp_input_error] : !messages?.success
          })}
          >
            {valueItems.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="\d{1}"
                maxLength={otpLength}
                className={variables.otpInput}
                value={digit}
                onChange={(e) => inputOnChange(e, idx)}
                onKeyDown={(e) => inputOnKeyDown(e, idx)}
                onFocus={inputOnFocus}
              />
            ))}
          </div>
          <div className={variables.otpMessage}>
            {messages?.success ? (
              <span className={variables.otpSuccess}>
                {messages?.otpMessage?.trim()?.length !== 0
                  ? messages?.otpMessage
                  : ""}
              </span>
            ) : (
              <span className={variables.otpError}>
                {messages?.otpMessage?.trim()?.length !== 0
                  ? messages?.otpMessage
                  : ""}
              </span>
            )}
          </div>
          <Button
            buttonSize="large"
            variant="primary"
            label={!loading ? "Verify OTP" : "Loading..."}
            className={variables.otpSubmitButton}
            onClick={() => {
              verifyOTP(otp), setVerifyOtpClicked(true);
            }}
            disable={enableVerifyOTP()}
          />
          <div className={variables.messageDiv}>
            <p className={variables.otpNotRecievedText}>
              {" "}
              Didn’t receive the OTP? <br />
            </p>
          </div>
          <div className={variables.retryMessageResend}>
            {timeLeft !== 0 && (
              <>
                <p className={variables.retryInText}>
                  {" "}
                  <br />
                  Retry in{" "}
                  <b className={variables.timerCountDown}>{`00:${
                    timeLeft > 9 ? timeLeft : "0" + timeLeft
                  }`}</b>
                </p>
              </>
            )}
            {timeLeft === 0 && (
              <Button
                variant="white"
                label="Resend Now"
                className={variables.resendButton}
                onClick={() => {
                  resendOTP(),
                    setTimeLeft(timerMaxLimit),
                    setVerifyOtpClicked(true),
                    setOtpValue("");
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};