import styles from '@styles/inputText.module.scss'
import AssetResolver from "@utils/assetResolver";

interface InputTextProps {
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  icon?: {
    src: string,
    onClick?(...args: unknown[]): unknown
  }[];
  label?: string;
  passwordShow?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  size?: number;
  type?: string;
  [key:string]: any;
}

export const InputText = ({
  type = "text",
  label = "Name",
  placeholder = "Enter your name",
  size = 50,
  autoFocus = false,
  readOnly = false,
  disabled = false,
  passwordShow = false,
  icon,
  className = "",
  ...props
}: InputTextProps) => {

  return (
    <>
    <div
      className={`${className} ${styles.input_text}`}
      {...props}
    >
      <div>
          <label className={`${styles.input_label}`}>{label}</label>
            <div className={`${styles.input_base}`}>
              <input type={passwordShow === false ? type : 'password'} name={label} placeholder={type == "text" ? placeholder : "Enter Number"} size={size} autoFocus={autoFocus} disabled={disabled} className={`${styles.input_field}`} />
              {icon && icon.map((element) => {
                  return (
                      <AssetResolver src={element.src} {...(element.onClick ? { onClick: element.onClick } : {})} className={element.src ? `${styles.input_image}` : ""} />
                  )
              })}
            </div>
      </div>
    </div>
    </>
  );
};
