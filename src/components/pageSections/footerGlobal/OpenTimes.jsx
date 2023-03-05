import { useContext } from "react";
import TextContentContext from "../../store/TextContentContext";
import { nanoid } from "nanoid";
import styles from "./footerGlobal.module.scss";

const OpenTimes = () => {
  const { textContent } = useContext(TextContentContext);

  return (
    <div className={`${styles.openTimes} body_3`}>
      <span>Open Times</span>
      {textContent.general.openTimes.map((el) => (
        <span key={nanoid()}>{el}</span>
      ))}
    </div>
  );
};

export default OpenTimes;
