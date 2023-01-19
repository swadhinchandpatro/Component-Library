import styles from '@styles/blog.module.scss';
import redirect from '@images/redirect.png';
import AssetResolver from "@utils/assetResolver";

interface BlogProps {
  className?: string;
  description: string;
  fullScreenEnabled?: string;
  heading: string;
  media: {
    src: string,
    type?: string
  };
}

export const Blog = ({
  media,
  heading="",
  fullScreenEnabled="",
  description="",
  className="",
  ...props
}: BlogProps) => {
  return (
    <div
      className={`${className} ${styles.blog}`}
      {...props}
    >
        { media && media.src ? media.type == "video"?
         <AssetResolver src={media.src} className={`${styles.video_tag}`} type="video" frameborder="0" {...(fullScreenEnabled ? {allowFullScreen: "0"} : {} )}/>:
         <AssetResolver src={media.src} className={`${styles.blog_image}`}/>:null}
          <div className={`${styles.blog_text}`}>
              <h4 className= {`${styles.blog_heading}`}>{heading}
              <img className={`${styles.blog_icon}`} src={redirect} />
              </h4>
              <p className={`${styles.blog_para}`}>{description}</p>
          </div>
    </div>
  );
};