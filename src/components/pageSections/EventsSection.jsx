import ButtonBooking from "../global/ButtonBooking";
import Heading from "../global/Heading";
import FigureImage from "../global/FigureImage";
import { useState, useContext } from "react";
import ListItem from "../global/ListItem";
import TextContentContext from "../store/TextContentContext";

const EventsSection = () => {
  const { textContent } = useContext(TextContentContext);

  const [selectedEvent, setSelectedEvent] = useState(textContent.home.events[0]);
  const [animateClass, setAnimateClass] = useState("");

  const handleEventSelection = (event) => {
    if (event.id === selectedEvent.id) return;
    setAnimateClass("hide_appear");
    setTimeout(() => {
      setSelectedEvent(event);
    }, 100);
    setTimeout(() => {
      setAnimateClass("");
    }, 200);
  };

  return (
    <section className="eventsSection">
      <div className="eventImgWrap">
        <FigureImage
          className={`eventImg ${animateClass}`}
          src={selectedEvent.imgUrl}
          alt="Restaurant event image."
          width={300}
          height="auto"
        />
      </div>
      <div className="eventNavWrap">
        <nav className="eventNav">
          <ul>
            {textContent.home.events.map((event) => (
              <ListItem
                key={event.id}
                textContent={
                  <button
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
      <div className={`eventInfoWrap ${animateClass}`}>
        <Heading tag="h3" textContent={selectedEvent.title} />
        <p>{selectedEvent.description}</p>
      </div>
      <div className="eventButtonWrap">
        <ButtonBooking />
      </div>
    </section>
  );
};

export default EventsSection;
