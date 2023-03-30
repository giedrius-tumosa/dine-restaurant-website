import styles from "./highlightsSection.module.scss";
import PictureImage from "../../global/PictureImage";
import Heading from "../../global/Heading";

const MenuItemCard = ({ menuItem }) => {
  return (
    <article className={styles.menuItemCard}>
      <PictureImage
        className={styles.menuItemPicture}
        sources={[
          {
            media: "(min-width: 1440px)",
            srcSet: `${menuItem.imgUrl_DeskTab} 128w, 
              ${menuItem.imgUrl_DeskTab2x} 256w`,
          },
          {
            media: "(min-width: 375px)",
            srcSet: `${menuItem.imgUrl_Mob} 327w, 
              ${menuItem.imgUrl_Mob2x} 654w`,
          },
        ]}
        img={{
          src: `${menuItem.imgUrl_Mob}`,
          alt: "Menu item picture.",
          width: 300,
          height: "auto",
        }}
      />
      <div className={styles.menuItemText}>
        <Heading
          className={`${styles.menuItemTitle} heading_m`}
          tag="h3"
          textContent={menuItem.itemTitle}
        />
        <p className={`${styles.menuItemDescription} body_2`}>{menuItem.itemDescription}</p>
      </div>
    </article>
  );
};

export default MenuItemCard;
