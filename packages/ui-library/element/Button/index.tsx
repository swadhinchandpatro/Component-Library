import React from 'react';
import styles from '@styles/button.module.scss';
import AssetResolver from "@utils/assetResolver";
import classnames from 'classnames';

interface ButtonProps {
  background?: string;
  buttonSize?: 'default' | 'medium' | 'large';
  buttonStyle?: 'fill' | 'outline';
  className?: any;
  onClick?: Function;
  color?: string;
  disable?: boolean;
  anchorLink?: {
    href?: string
  };
  icon?: {
    alignment?: string,
    src?: string
  };
  label : string;
  variant?: 'primary' | 'secondary' | 'outline_primary' | 'outline_secondary' | 'light' | 'white' | 'custom_btn';
  [key: string]: any;
}

export const Button = ({
  className,
  label,
  background,
  color,
  icon,
  onClick,
  disable,
  buttonSize = "default",
  buttonStyle = "fill",
  variant = "primary",
  anchorLink,
  ...props
}: ButtonProps) => {

  let stylesClass = classnames.bind(styles);
  let customClasses = stylesClass({
    [styles.btn_image_right]: icon && icon.alignment === "right" ? true : "",
    [styles.disable]: disable ? true : "",
    [styles.common_btn]: true,
    [styles[buttonSize]]: true,
    [styles[buttonStyle]]: true,
    [styles[variant]]: true,
  })

  return (
    <div className={`${styles.button_container} ${className}`} {...props}>
      {
        !anchorLink?.href ?
          <button
            {...props}
            {...(onClick ? { onClick } : {})}
            style={(color || background) ? { color, background } : {}}
            className={customClasses}
          >
            {icon ?
              <AssetResolver src={icon.src} className={`${styles.button_icon}`} />
              : null}
            {label}
          </button>
          :
          <a href={anchorLink.href} target="_blank" {...(onClick ? { onClick } : {})} className={customClasses} style={(color || background) && { color, background }}  {...props}>
            {icon ?
              <AssetResolver src={icon.src} className={`${styles.button_icon}`} />
              : null}
            {label}
          </a>
      }
    </div>
  );
};
