import ButtonBooking from "../global/ButtonBooking";
import Heading from "../global/Heading";
import FigureImage from "../global/FigureImage";
import { useState } from "react";
import ListItem from "../global/ListItem";
import FamilyGatheringImg from "../../images/homepage/family-gathering-mobile.jpg";
import SpecialEventsImg from "../../images/homepage/special-events-mobile.jpg";
import SocialEvents from "../../images/homepage/social-events-mobile.jpg";

const EventsSection = () => {
  const [events, setEvents] = useState([
    {
      title: "family gathering",
      descripttion:
        "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
      id: "1-56854",
      imgUrl: FamilyGatheringImg,
    },
    {
      title: "special events",
      descripttion:
        "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
      id: "2-98569",
      imgUrl: SpecialEventsImg,
    },
    {
      title: "social events",
      descripttion:
        "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
      id: "3-54124",
      imgUrl: SocialEvents,
    },
  ]);
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
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
            {events.map((event) => (
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
        <p>{selectedEvent.descripttion}</p>
      </div>
      <div className="eventButtonWrap">
        <ButtonBooking />
      </div>
    </section>
  );
};

export default EventsSection;
