import styles from '@styles/chips.module.scss';
import AssetResolver from "@utils/assetResolver";
import { useState } from 'react';

interface ChipsProps {
  className?: string;
  text: string;
  icon?: {
    src: string,
    alignment?: 'left' | 'right',
    onClick?(...args: unknown[]): unknown
  }[];
  onClick?(...args: unknown[]): unknown;
}

export const Chips = ({
  icon,
  text = "",
  onClick,
  className = "",
  ...props
}: ChipsProps) => {
  const [isActive, setIsActive] = useState(false);

  const clicked = () => {
    onClick?.();
    setIsActive(current => !current);
  }

  return (
    <div className={`${className} ${isActive ? styles.chips : styles.chips_inactive}`} {...(onClick ? { onClick: clicked } : {})} {...props}>
      {icon && icon.map((element) => {
        return (
          !element.alignment || element.alignment === "left" ?
            <AssetResolver src={element.src} {...(element.onClick ? { onClick: element.onClick } : {})} className={element.src ? `${styles.chips_icon_right}` : ""} /> : null
        )
      })}

      <p className={`${styles.chips_text}`}  >{text}</p>

      {icon && icon.map((element) => {
        return (
          element.alignment === "right" ?
            <AssetResolver src={element.src} {...(element.onClick ? { onClick: element.onClick } : {})} className={element.src ? `${styles.chips_icon_left}` : ""} /> : null
        )
      })}
    </div>
  );
};