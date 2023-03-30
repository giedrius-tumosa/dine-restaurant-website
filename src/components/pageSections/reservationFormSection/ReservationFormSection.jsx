import FormReservation from "../../forms/FormReservation";
import styles from "./reservFormSection.module.scss";

const ReservationFormSection = () => {
  return (
    <main className={styles.reservationFormSection}>
      <FormReservation />
    </main>
  );
};

export default ReservationFormSection;
