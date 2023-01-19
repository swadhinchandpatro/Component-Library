import styles from '@styles/footer.module.scss';
import AssetResolver from "@utils/assetResolver";

export interface FooterProps {
  aboutUsLink: string;
  className?: string;
  faqsLink: string;
  futureOfWorkLink: string;
  homeLink: string;
  image: string;
  offerings: any[];
  partnersLink: string;
  privacyPolicyLink: string;
  socialData: any[];
  solutions: any[];
  storeData: any[];
  termsLink: string;
  vrLearnLink: string;
  whyLMCLink: string;
}

export const Footer = ({
  image = "logoWithName.png",
  className = "",
  homeLink = "",
  aboutUsLink = "",
  whyLMCLink = "",
  partnersLink = "",
  faqsLink = "",
  vrLearnLink = "",
  futureOfWorkLink = "",
  termsLink = "",
  privacyPolicyLink = "",
  storeData = [],
  socialData = [],
  offerings = [],
  solutions = [],
  ...props
}: FooterProps) => {
  return (
    <>
    <div
      className={`${className} ${styles.footer}`}
      {...props}
    >
      <div className={`${styles.top_section}`}>
          <div className={`${styles.logo_section}`}>
            <a href={homeLink} target={'blank'}>
              <AssetResolver src={image} className={`${styles.img_logo}`} />
            </a>
            <div className={`${styles.social_links} ${styles.mob_View}`}>
            <div className={`${styles.row_social}`}>
              {socialData && socialData.map((element) => {
                  return (
                    <a href={element.link} target={'blank'}>
                      <AssetResolver src={element.image} className={`${styles.img_social}`} />
                    </a>
                  )
              })}
            </div>
        </div>
            <p>Experience LMC App</p>
            <div className={`${styles.app_section}`}>
              {storeData && storeData.map((element) => {
                return (
                  <a href={element.link} target={'blank'}>
                    <AssetResolver src={element.image} className={`${styles.img_app_store}`} />
                  </a>
                )
              })}
            </div>
          </div>
          <hr className={`${styles.mobile_hr}`}/>
          <div className={`${styles.info_section}`}>
            <p>LaunchMyCareer</p>
            <span className={`${styles.link}`}><a href={aboutUsLink} target={'blank'}>About Us</a></span>
            <span className={`${styles.link}`}><a href={whyLMCLink} target={'blank'}>Why LaunchMyCareer?</a></span>
            <span className={`${styles.link}`}><a href={partnersLink} target={'blank'}>Our Partners</a></span>
            <span className={`${styles.link}`}><a href={faqsLink} target={'blank'}>FAQs</a></span>
          </div>

          <div className={`${styles.info_section}`}>
            <p>Offerings</p>
            {offerings && offerings.map((element) => {
                return (
                  <span className={`${styles.link}`}><a href={element.link} target={'blank'}>{element.label}</a></span>
                )
            })}
          </div>
          <div className={`${styles.info_section}`}>
            <p>Future Readiness</p>
            <span className={`${styles.link}`}><a href={vrLearnLink} target={'blank'}>VR Learn</a></span>
            <span className={`${styles.link}`}><a href={futureOfWorkLink} target={'blank'}>Future of Work</a></span>
          </div>
          <div className={`${styles.info_section}`}>
            <p>Solutions</p>
            {solutions && solutions.map((element) => {
                return (
                  <span className={`${styles.link}`}><a href={element.link} target={'blank'}>{element.label}</a></span>
                )
            })}
          </div>
      </div>
      <hr />
      <div className={`${styles.bottom_section}`}>
        <div className={`${styles.static_links}`}>
          <div className={`${styles.row_terms}`}>
            <p>Copyright {new Date().getFullYear()} LaunchMyCareer Pvt. Ltd.</p>
            <span><a href={termsLink} target={'blank'} >Terms of Use</a></span>
            <span className={`${styles.line}`}></span>
            <span><a href={privacyPolicyLink} target={'blank'}>Privacy Policy</a></span>
          </div>
        </div>
        <div className={`${styles.social_links} ${styles.web_view}`}>
          <div className={`${styles.row_social}`}>
            {socialData && socialData.map((element) => {
                return (
                  <a href={element.link} target={'blank'}>
                    <AssetResolver src={element.image} className={`${styles.img_social}`} />
                  </a>
                )
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};