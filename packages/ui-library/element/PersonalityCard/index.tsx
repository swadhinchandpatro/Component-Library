import PropTypes from "prop-types";
import variables from "@styles/personalityCard.module.scss";
import AssetResolver from "@utils/assetResolver";

export const PersonalityCard = ({
  variant = "primary",
  className = "",
  isActive = "",
  image = "@images/ENTJ.webp",
  heading = "THE BIRD SQUAD",
  ...props
}) => {
  return (
    <div
      className={` ${variables[variant]} ${variables[className]}`}
      {...props}
    >
      <div
        className={
          isActive == "Yes"
            ? `${variables.cardPersonality} ${variables.active} `
            : `${variables.cardPersonality} ${variables.nonActive} `
        }
      >
        <section className={[variables.header, variables.img].join(" ")}>
          <AssetResolver src={image} className={`${variables.imgType}`} />
        </section>
        <section
          className={
            isActive == "Yes"
              ? variables.content + "" + variables.active
              : variables.content + "" + variables.nonActive
          }
        >
          <div className={variables.cardListPadding}>
            <h3> {heading}</h3>
          </div>
        </section>
      </div>
    </div>
  );
};

PersonalityCard.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  heading: PropTypes.string.isRequired,
  image: PropTypes.object,
  isActive: PropTypes.bool,
  className: PropTypes.string,
};

PersonalityCard.defaultProps = {};
