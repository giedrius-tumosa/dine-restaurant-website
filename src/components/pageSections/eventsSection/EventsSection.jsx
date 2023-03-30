import ButtonBooking from "../../global/ButtonBooking";
import Heading from "../../global/Heading";
import { useState, useContext } from "react";
import ListItem from "../../global/ListItem";
import TextContentContext from "../../store/TextContentContext";
import PictureImage from "../../global/PictureImage";
import styles from "./eventsSection.module.scss";

const EventsSection = () => {
  const { textContent } = useContext(TextContentContext);

  const [selectedEvent, setSelectedEvent] = useState(textContent.home.events[0]);

  const handleEventSelection = (event) => {
    if (event.id === selectedEvent.id) return;
    setSelectedEvent(event);
  };

  return (
    <section className={styles.eventsSection}>
      <div className={styles.eventImgWrap}>
        <PictureImage
          className={styles.eventPicture}
          sources={[
            {
              media: "(min-width: 1440px)",
              srcSet: `${selectedEvent.imgUrl_Desk} 540w, 
              ${selectedEvent.imgUrl_Desk2x} 1080w`,
            },
            {
              media: "(min-width: 768px)",
              srcSet: `${selectedEvent.imgUrl_Tab} 573w, 
              ${selectedEvent.imgUrl_Tab2x} 1146w`,
            },
            {
              media: "(min-width: 375px)",
              srcSet: `${selectedEvent.imgUrl_Mob} 326w, 
              ${selectedEvent.imgUrl_Mob2x} 652w`,
            },
          ]}
          img={{
            src: `${selectedEvent.imgUrl_Desk}`,
            alt: "Restaurant event image.",
            width: 300,
            height: "auto",
          }}
        />
      </div>
      <div className={styles.flexwrap}>
        <div className={styles.eventNavWrap}>
          <nav className={styles.eventNav}>
            <ul>
              {textContent.home.events.map((event) => (
                <ListItem
                  key={event.id}
                  textContent={
                    <button
                      className="heading_s"
                      type="button"
                      onClick={() => handleEventSelection(event)}
                      disabled={event.id === selectedEvent.id}
                    >
                      {event.title}
                    </button>
                  }
                />
              ))}
            </ul>
          </nav>
        </div>
        <div className={`${styles.eventInfoWrap}`}>
          <Heading className="heading_l" tag="h3" textContent={selectedEvent.title} />
          <p className="body_1">{selectedEvent.description}</p>
        </div>
        <div className={styles.eventButtonWrap}>
          <ButtonBooking className={`btn-onLight ${styles.revertBtn}`} />
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
