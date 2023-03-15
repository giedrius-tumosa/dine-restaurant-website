import styles from "./readySection.module.scss";
import Heading from "../../global/Heading";
import TextContentContext from "../../store/TextContentContext";
import { useContext } from "react";
import ButtonBooking from "../../global/ButtonBooking";

const ReadySection = () => {
  const { textContent } = useContext(TextContentContext);

  return (
    <section className={`${styles.readySection}`}>
      <Heading
        tag="h2"
        className={`${styles.readyTitle} heading_l`}
        textContent={textContent.home.ready.title}
      />
      <div className={`${styles.btn_readyBook} btn-onDark`}>
        <ButtonBooking />
      </div>
    </section>
  );
};

export default ReadySection;
