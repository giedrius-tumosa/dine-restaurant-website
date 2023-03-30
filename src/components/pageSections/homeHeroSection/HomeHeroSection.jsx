import styles from "./homeHeroSection.module.scss";
import PictureImage from "../../global/PictureImage";
import TextContentContext from "../../store/TextContentContext";
import { useContext } from "react";
import Heading from "../../global/Heading";
import CompanyLogo from "../../global/CompanyLogo";
import ButtonBooking from "../../global/ButtonBooking";

const HomeHeroSection = () => {
  const { textContent } = useContext(TextContentContext);

  return (
    <section className={styles.homeHeroSection}>
      <PictureImage
        className={styles.heroImage}
        sources={[
          {
            media: "(min-width: 1440px)",
            srcSet: `${textContent.home.hero.imgUrl_Desk} 1440w, 
          ${textContent.home.hero.imgUrl_Desk2x} 2880w`,
          },
          {
            media: "(min-width: 768px)",
            srcSet: `${textContent.home.hero.imgUrl_Tab} 768w, 
        ${textContent.home.hero.imgUrl_Tab2x} 1536w`,
          },
          {
            media: "(min-width: 375px)",
            srcSet: `${textContent.home.hero.imgUrl_Mob} 375w, 
        ${textContent.home.hero.imgUrl_Mob2x} 750w`,
          },
        ]}
        img={{
          src: `${textContent.home.hero.imgUrl_Mob}`,
          alt: "Hero image.",
          width: 300,
          height: "auto",
        }}
      />
      <div className={styles.homeHeroContent}>
        <CompanyLogo className={styles.logo} size="small" />
        <article className={styles.heroText}>
          <Heading
            className={`heading_xl ${styles.heroTitle}`}
            textContent={textContent.home.hero.title}
          />
          <p className={`body_1 ${styles.heroDescription}`}>{textContent.home.hero.description}</p>
          <ButtonBooking className="btn-onDark" />
        </article>
      </div>
    </section>
  );
};

export default HomeHeroSection;
