import variables from "@styles/storiesCard.module.scss";
import AssetResolver from "@utils/assetResolver";

interface StoriesCardProps {
  className?: string;
  image?: {
    src: string
  };
  instituteName: string;
  review: string;
  title: string;
  width?: string;
}

export const StoriesCard = ({
  className = "",
  image = { src: ""},
  title = "Suvansh Arora",
  instituteName = "Lotus Valley International School, Noida",
  review = "The animal personality quiz proved to be really insightful; the questions asked during the quiz helped me to explore myself along with definite career path. The careers highlighted matched my interests and personality, and knowing myself through personality animal was really fun to learn.",
  width = "50",
  ...props
}: StoriesCardProps) => {
  return (
    <div
      className={`${className} ${variables.card}`}
      style={{width: `${width}%`}}
      {...props}
    >
      <div>
        <section className={variables.image_container}>
          <AssetResolver src={image.src} className={variables.img} />
          <div className={variables.title_section}>
            <h3 className={variables.h3}>{title}</h3>
            <h4 className={variables.h4}>{instituteName}</h4>
          </div>
        </section>
        <hr className={variables.hr} />
        <section className={variables.review_container}>
            <h5 className={variables.h5}>{review}</h5>
        </section>
      </div>
    </div>
  );
};