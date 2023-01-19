import styles from '@styles/progressBar.module.scss'

interface ProgressBarProps {
  className?: string;
  filledbackgroundColor?: string;
  label?: string;
  maxValue: number;
  showValue?: number;
  size?: "small" | "medium" | "large";
  type?: "default" | "inline";
  unFilledbackgroundColor?: string;
  value: number;
}

export const ProgressBar = ({
  type,
  size,
  value,
  showValue,
  maxValue,
  label,
  filledbackgroundColor,
  unFilledbackgroundColor,
  className,
  ...props
}: ProgressBarProps) => {
  return (
    <>
    <div
      className={`${styles.progress_Linear} ${className}`}
      {...props}
    >
      <div className={`${styles[size]} ${styles[type]}`} >
          <label className={`${styles.progress_Label}`}>{label}</label>
          <div className={`${styles.progress}`} style={{backgroundColor:unFilledbackgroundColor}}>
            <div className={`${styles.progress_Done}`} style={{width : value <= maxValue ? (value/maxValue) *100 + "%"  : "0" , backgroundColor:filledbackgroundColor}} id="progressBar" data-done={value > 100 ?  "100" : value} max-value={maxValue}>
            </div>
          </div>
          {showValue ?
          <p className={`${styles.show_Value}`}>{value}</p>:null}
      </div>
    </div>
    {value > maxValue ?
    <p className={`${styles.error}`}>Invalid Value</p>:null}
    </>
  );
};