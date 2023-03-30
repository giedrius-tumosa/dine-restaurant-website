import styles from "./highlightsSection.module.scss";
import Heading from "../../global/Heading";
import { useContext } from "react";
import TextContentContext from "../../store/TextContentContext";
import MenuItemList from "./MenuItemList";

const HighlightsSection = () => {
  const { textContent } = useContext(TextContentContext);

  return (
    <section className={styles.highlightsSection}>
      <div className={styles.contentWrapper}>
        <article className={styles.sectionTextInfo}>
          <Heading
            tag="h2"
            className={`heading_l ${styles.hightlightsTitle}`}
            textContent={textContent.home.highlights.title}
          />
          <p className={`${styles.highlightsDescription} body_1`}>
            {textContent.home.highlights.description}
          </p>
        </article>
        <MenuItemList />
      </div>
    </section>
  );
};

export default HighlightsSection;
