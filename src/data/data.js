import FamilyGatheringImg from "../images/homepage/family-gathering-mobile.jpg";
import SpecialEventsImg from "../images/homepage/special-events-mobile.jpg";
import SocialEvents from "../images/homepage/social-events-mobile.jpg";


export const siteTextContent = {
  general: {
    contacts: {
      address1: "Marthwaite, Sedbergh",
      address2: "Cumbria",
      tel: "+00 44 123 4567"
    },
    openTimes: [
      "Mon - Fri: 09:00 AM - 10:00 PM",
      "Sat - Sun: 09:00 AM - 11:30 PM"
    ]

  },
  home: {
    events: [
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
    ]
  },
  booking: {
    reservations: {
      title: "Reservations",
      description: "  We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you."
    }
  }
};