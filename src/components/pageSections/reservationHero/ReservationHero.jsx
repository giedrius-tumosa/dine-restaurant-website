import styles from "./reservationHero.module.scss";
import CompanyLogo from "../../global/CompanyLogo";
import Heading from "../../global/Heading";
import TextContentContext from "../../store/TextContentContext";
import { useContext } from "react";

const ReservationHero = () => {
  const { textContent } = useContext(TextContentContext);

  const handleReservePlace = () => {
    const element = document.querySelector("#formReservation");

    element && element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={styles.reservationHero}>
      <div className={styles.contentWrapper}>
        <CompanyLogo size="small" className={styles.companyLogo} />
        <div className={styles.textWrap}>
          <Heading
            className={`heading_xl ${styles.margin_bottom}`}
            tag="h1"
            textContent={textContent.booking.reservations.title}
          />
          <p className="body_1">{textContent.booking.reservations.description}</p>
        </div>
        <div className={styles.btnBookTable}>
          <button className="btn-onDark" type="button" onClick={handleReservePlace}>
            reserve place
          </button>
        </div>
      </div>
    </header>
  );
};

export default ReservationHero;
