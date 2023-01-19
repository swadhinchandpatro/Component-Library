import styles from '@styles/modal.module.scss';
import AssetResolver from "@utils/assetResolver";
import { ReactNode, useState } from "react";

export interface ModalProps {
  backdropClose?: string;
  backdropCloseColor?: string;
  className?: string;
  fullScreen? :boolean,
  dimension?: "small" | "large" | "medium";
  children: ReactNode;
  footer?: ReactNode;
  footerOption?: {
    text?: string
  };
  header?: ReactNode;
  headerOption?: {
    icon?: {
      onClick?(...args: unknown[]): unknown,
      alignment?: 'left' | 'right',
      src?: string
    },
    text?: string,
    isFixed? :'true' | 'false',
  };
  onClose?(...args: unknown[]): unknown;
  [key: string]: any
}

export const Modal = ({
  headerOption,
  header = null,
  footer = null,
  footerOption,
  backdropClose = "",
  backdropCloseColor = "",
  children = <></>,
  className = "",
  fullScreen =false,
  dimension = "small",
  onClose,
  ...props
}: ModalProps) => {
  return (
    <>

      <div className={`${styles.overlayWrapper}`} style={{ backgroundColor: backdropCloseColor }} {...(backdropClose ? { onClick: onClose } : {})}></div>
      <div className={`${className} ${fullScreen? styles.modalFullScreen : styles.modal} ${styles[dimension]}`}>
        <div className={`${styles.modal_header}`}>
          {headerOption?.text && !header ?
            <h2 className={headerOption?.icon?.alignment=== 'right'? `${styles.header_heading}` : `${styles.header_heading_adjust}`}>{headerOption.text}</h2> : <div>{header}</div>}
          {headerOption?.icon?.src && !header ?
            <AssetResolver src={headerOption?.icon?.src} className={headerOption?.icon?.alignment=== 'right'? `${styles.header_icon}` : `${styles.header_icon_left}`} {...(headerOption?.icon?.onClick ? { onClick: headerOption.icon.onClick } : {})} /> :
            !headerOption?.icon?.src && !header ?
              <AssetResolver src="@images/cross.png" className={`${styles.header_icon}`} onClick={onClose} /> : null}
        </div>
        <div className={headerOption?.isFixed === 'true' ? `${styles.modal_body}` : `${styles.modal_body_set}`}>
          {children}
        </div>
        <div className={footerOption ? `${styles.modal_footer}` : ""}>
          {footerOption?.text && !footer ?
            <h2 className={`${styles.footer_text}`}>{footerOption.text}</h2> : <div>{footer}</div>}
        </div>
      </div>
    </>
  );
};