import variables from "@styles/countCard.module.scss";
import AssetResolver from "@utils/assetResolver";

interface CountCardProps {
  className?: any;
  count?: number;
  description?: string;
  icon: string;
}

export const CountCard = ({
  className,
  icon = "@images/CountCard/c1.png",
  count = 500,
  description = "Live Counselling Sessions",
  ...props
}: CountCardProps) => {
  return (
    <div
      className={` ${variables[className]} ${variables.countCard}`}
      {...props}
    >
      <div className={variables.dataDisplay}>
        <div className={variables.dataDisplayInner}>
          {icon && icon ? (
            <AssetResolver
            src={icon}
            className={icon ? `${variables.image}` : ""}
            />
          ) : null}
          <h1 className={variables.count}> {`${count}+`}</h1>
          <p className={variables.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

