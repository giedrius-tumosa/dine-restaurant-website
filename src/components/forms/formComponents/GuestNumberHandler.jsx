import PlusIcon from "../../../images/icons/icon-plus.svg";
import MinusIcon from "../../../images/icons/icon-minus.svg";
import styles from "../../pageSections/reservationFormSection/reservationFormSection.module.scss";

const GuestNumberHandler = ({ numOfGuests, setNumOfGuests }) => {
  const handleMinus = () => {
    if (numOfGuests <= 1) {
      return;
    }
    setNumOfGuests(--numOfGuests);
  };

  const handlePlus = () => {
    if (numOfGuests >= 10) {
      return;
    }
    setNumOfGuests(++numOfGuests);
  };

  return (
    <>
      <div className={styles.guestNumberHandler}>
        <div className={styles.minusBtn}>
          <button type="button" onClick={handleMinus} disabled={numOfGuests <= 1}>
            <img src={MinusIcon} alt="Minus icon." />
          </button>
        </div>
        <p className={styles.numOfGuestsDisplay}>{`${numOfGuests} people`}</p>
        <div className={styles.plusBtn}>
          <button type="button" onClick={handlePlus} disabled={numOfGuests >= 10}>
            <img src={PlusIcon} alt="Plus icon." />
          </button>
        </div>
      </div>
    </>
  );
};

export default GuestNumberHandler;
