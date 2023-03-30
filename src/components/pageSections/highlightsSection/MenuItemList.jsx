import TextContentContext from "../../store/TextContentContext";
import { useContext } from "react";
import styles from "./highlightsSection.module.scss";
import MenuItemCard from "./MenuItemCard";

const MenuItemList = () => {
  const { textContent } = useContext(TextContentContext);

  return (
    <ul className={styles.menuItemList}>
      {textContent.home.highlights.menuItems.map((item) => (
        <li key={item.id}>
          <MenuItemCard menuItem={item} />
        </li>
      ))}
    </ul>
  );
};

export default MenuItemList;
