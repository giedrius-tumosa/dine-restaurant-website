import styles from "./featuresSection.module.scss";
import FeatureCard from "./FeatureCard";
import TextContentContext from "../../store/TextContentContext";
import { useContext } from "react";

const FeaturesSection = () => {
  const { textContent } = useContext(TextContentContext);

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featureListWrapper}>
        {textContent.home.features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
