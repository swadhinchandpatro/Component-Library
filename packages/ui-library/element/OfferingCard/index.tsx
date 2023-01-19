import styles from '@styles/offeringCard.module.scss';
import AssetResolver from "@utils/assetResolver";

interface OfferingCardProps {
  className?: string;
  heading: string;
  cardStatus: string,
  onClick?: Function;
  anchorLink?: {
    href?: string
  };
  icon?: {
    src?: string
  };
  offeringImage?: {
    src?: string;
  };
  pargraph?: string;
}

export const OfferingCard = ({
  onClick,
  offeringImage,
  icon,
  className,
  anchorLink,
  heading,
  cardStatus = "default",
  pargraph,
  ...props

}: OfferingCardProps) => {
  return (
    <section className={`${styles.card_container} ${className}`} {...props} >
      {!anchorLink?.href ?
        <div className={`${styles.inner_section} ${styles[cardStatus]}`} {...(onClick ? { onClick } : {})}>
          <label className={styles.card_image}>
            <AssetResolver src={offeringImage.src} className={`${styles.button_icon}`} />
          </label>
          <hgroup className={styles.card_body}>
            <h1 className={styles.offering_heading}>{heading}</h1>
            <div className={styles.hover_section}>
              <p>{pargraph}</p>
              <label className={`${styles.aro_icon}`}>
                <AssetResolver src={icon.src} className={`${styles.button_icon}`} />
              </label>
            </div>
          </hgroup>
        </div>
        :
        <a href={anchorLink.href} target="_blank" {...(onClick ? { onClick } : {})}>
          <div className={`${styles.inner_section} ${styles[cardStatus]}`}>
            <label className={styles.card_image}>
              <AssetResolver src={offeringImage.src} className={`${styles.button_icon}`} />
            </label>
            <hgroup className={styles.card_body}>
              <h1 className={styles.offering_heading}>{heading}</h1>
              <div className={styles.hover_section}>
                <p>{pargraph}</p>
                <label className={`${styles.aro_icon}`}>
                  <AssetResolver src={icon.src} className={`${styles.button_icon}`} />
                </label>
              </div>
            </hgroup>
          </div>
        </a>
      }
    </section>
  );
};
