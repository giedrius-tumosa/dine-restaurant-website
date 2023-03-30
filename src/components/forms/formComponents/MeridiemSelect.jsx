import { useState } from "react";
import IconArrow from "../../../images/icons/icon-arrow.svg";
import IconCheck from "../../../images/icons/icon-check.svg";
import styles from "../../pageSections/reservationFormSection/reservFormSection.module.scss";

const MeridiemSelect = ({ meridiem, setMeridiem }) => {
  const [arrowClicked, setArrowClicked] = useState(false);

  const tickImg = <img src={IconCheck} width={11} height={8} />;

  const handleAM = () => {
    if (meridiem === "AM") return;
    setMeridiem("AM");
  };
  const handlePM = () => {
    if (meridiem === "PM") return;
    setMeridiem("PM");
  };

  const handleArrowClick = () => {
    setArrowClicked(!arrowClicked);
  };

  return (
    <div className={styles.meridiemSelect}>
      <div onClick={handleArrowClick} className={styles.meridiemDisplay}>
        <span>{meridiem}</span>
        <span>
          <img
            src={IconArrow}
            alt="Arrow icon."
            width={16}
            height={8}
            className={arrowClicked ? styles.flipped : ""}
          />
        </span>
        <div className={`${styles.meridiemOptions} ${arrowClicked ? styles.unhide : styles.hide}`}>
          <div className={styles.contentWrap}>
            <p className={styles.option} onClick={handleAM}>
              <span className={styles.tick}>{meridiem === "AM" && tickImg}</span>
              AM
            </p>
            <p className={styles.option} onClick={handlePM}>
              <span className={styles.tick}>{meridiem === "PM" && tickImg}</span>
              PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeridiemSelect;
