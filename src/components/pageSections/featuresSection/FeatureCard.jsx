import styles from "./featuresSection.module.scss";
import PictureImage from "../../global/PictureImage";
import Heading from "../../global/Heading";
import Decoration from "../../../images/patterns/pattern-divide.svg";

const FeatureCard = ({ feature }) => {
  return (
    <article className={styles.featuresCard}>
      <div className={styles.imgWrap}>
        <PictureImage
          className={styles.featurePicture}
          sources={[
            {
              media: "(min-width: 1440px)",
              srcSet: `${feature.imgUrl_Desk} 540w,
                      ${feature.imgUrl_Desk2x} 1080w`,
            },
            {
              media: "(min-width: 768px)",
              srcSet: `${feature.imgUrl_Tab} 573w,
                      ${feature.imgUrl_Tab2x} 1146w`,
            },
            {
              media: "(min-width: 375px)",
              srcSet: `${feature.imgUrl_Mob} 327w,
                      ${feature.imgUrl_Mob2x} 654w`,
            },
          ]}
          img={{
            src: `${feature.imgUrl_Mob}`,
            alt: "Menu item picture.",
            width: 300,
            height: "auto",
          }}
        />
      </div>
      <div className={styles.cardText}>
        <img className={styles.decoration} src={Decoration} alt="Decoration." aria-hidden />
        <Heading
          tag="h3"
          className={`heading_l ${styles.featuresTitle}`}
          textContent={feature.title}
        />
        <p className={`body_1 ${styles.featuresDescriptions}`}>{feature.description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
