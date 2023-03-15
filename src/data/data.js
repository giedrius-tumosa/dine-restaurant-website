import {
  familyGathering_Desk,
  familyGathering_Desk2x,
  familyGathering_Mob,
  familyGathering_Mob2x,
  familyGathering_Tab,
  familyGathering_Tab2x,
  specialEvents_Desk,
  specialEvents_Desk2x,
  specialEvents_Mob,
  specialEvents_Mob2x,
  specialEvents_Tab,
  specialEvents_Tab2x,
  socialEvents_Desk,
  socialEvents_Desk2x,
  socialEvents_Mob,
  socialEvents_Mob2x,
  socialEvents_Tab,
  socialEvents_Tab2x,
  ready_Desk,
  ready_Desk2x,
  ready_Mob,
  ready_Mob2x,
  ready_Tab,
  ready_Tab2x,
} from "./imageData";


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
    ready:
    {
      title: "Ready to make a reservation?"
    }
    ,
    events: [
      {
        title: "family gathering",
        description:
          "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
        id: "1-56854",
        imgUrl_Desk: familyGathering_Desk,
        imgUrl_Desk2x: familyGathering_Desk2x,
        imgUrl_Mob: familyGathering_Mob,
        imgUrl_Mob2x: familyGathering_Mob2x,
        imgUrl_Tab: familyGathering_Tab,
        imgUrl_Tab2x: familyGathering_Tab2x,
      },
      {
        title: "special events",
        description:
          "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
        id: "2-98569",
        imgUrl_Desk: specialEvents_Desk,
        imgUrl_Desk2x: specialEvents_Desk2x,
        imgUrl_Mob: specialEvents_Mob,
        imgUrl_Mob2x: specialEvents_Mob2x,
        imgUrl_Tab: specialEvents_Tab,
        imgUrl_Tab2x: specialEvents_Tab2x,
      },
      {
        title: "social events",
        description:
          "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
        id: "3-54124",
        imgUrl_Desk: socialEvents_Desk,
        imgUrl_Desk2x: socialEvents_Desk2x,
        imgUrl_Mob: socialEvents_Mob,
        imgUrl_Mob2x: socialEvents_Mob2x,
        imgUrl_Tab: socialEvents_Tab,
        imgUrl_Tab2x: socialEvents_Tab2x,
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