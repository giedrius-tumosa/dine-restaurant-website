import FormReservation from "../../forms/FormReservation";
import styles from "./reservationFormSection.module.scss";

const ReservationFormSection = () => {
  return (
    <main className={styles.reservationFormSection}>
      <FormReservation />
    </main>
  );
};

export default ReservationFormSection;
