import { OtpPopup, OtpPopupProps } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { getDirection } from '../../config';

export default {
  title: "OTP/OTP_Popup",
  component: OtpPopup,
  argTypes: {
    icon: {
      description:
        "icon can be none, left , right. For images : Use @images/ in case you are using your own document folder ",
    },
    onClick: {
      description: "When event fired on click on icon",
    },
    className: {
      description: "If we want to create new variant",
    },
    verifyOTP: {
      description:
        "This function is called when verify OTP is clicked",
    },
    resendOTP: {
     description: "This function is called when resend OTP is clicked"
    },
    value: {
      description: "represents OTP Value",
    },
    mobileNumber: {
      control: "text",
      description: "mobile number where OTP will be received",
    },
    timerMaxLimit: {
      control: "number",
      description:
        "it represents countdown time limit for sending OTP again in secs",
    },
    otpLength: {
      control: "number",
      description: "it describes the length of OTP",
    },
    messages: {
      otpMessage: {
        control: "text",
        description: "it describes the message after submitting otp"
      },
      success: {
        control: "boolean",
        description: "boolean flag for showing otpMessage"
      }
    },
    loading: {
      control: "boolean",
      description: "boolean flag for showing loading text on button"
    }
  },
} as ComponentMeta<typeof OtpPopup>;

const Template: ComponentStory<typeof OtpPopup> = ({ ...args }:OtpPopupProps,{globals: {textDirection }}) => (
  <OtpPopup {...args} dir={getDirection(textDirection)}/>
);

export const Otp_Popup = Template.bind({});

Otp_Popup.args = {
  icon: {
    src: "",
    alignment: "right",
    onClick: () => {
      console.log("Edit Button Clicked");
    },
  },
  verifyOTP: () => {
    console.log("verify otp clicked sent from storybook");
  },
  resendOTP: () => {
    console.log("resend OTP clicked from storybook");
  },
  value:"",
  mobileNumber: "6371460915",
  className: "",
  timerMaxLimit: 10,
  otpLength: 6,
  messages: {
  otpMessage: "OTP has been sent successfully",
  success: true },
  loading: false,
};
