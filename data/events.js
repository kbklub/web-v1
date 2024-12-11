//* Import graphic image for events first
import stack23Image from "./images/events/stackReform23Image.png";
import yptglImage from "./images/events/yourPowerToGiveLife.jpeg";
import kourtRenovationImage from "./images/events/kbMultipurposeCourt.jpeg";
import stack24Image from "./images/events/stackReform24Image.jpg";

// eventSchema = {
//   name: "Name of the event",
//   description: "A short description of what the event is about. 25 - 40 words",
//   link: "A link to get more information about the event, can be a social media link",
//   arm: "either one of 'coaa', 'cosa', 'copa'.",
//   image: theImportedImageFile,
//   date: "DD-MM-YYYY. strictly that format",
//   registrationLink: "(only for upcoming events) a link directing to where users can register for the event",
// }

let events = {
  upcoming: [
    {
      name: "Stack Reform Conference 2024",
      description: "Over the years, the STACK REFORM conference has evolved into a diverse range of events. From exciting speech competitions to intercollegiate elevator pitch contests, it has not relented in nurturing the minds of our inquisitive attendees.",
      link: "https://stack.kbklub.org/",
      arm: "coaa",
      image: stack24Image,
      date: "30-11-2024",
      registrationLink: "https://stack.kbklub.org/register"
    },
  ],
  past: [
    {
      name: "Stack Reform 2023",
      description: "Over the years, the STACK REFORM conference has evolved into a diverse range of events. From exciting speech competitions to intercollegiate elevator pitch contests, it has not relented in nurturing the minds of our inquisitive attendees.",
      link: "https://stack.kbklub.org/",
      arm: "coaa",
      image: stack23Image,
      date: "09-11-2023",
    },
    {
      name: "Your Power To Give Life",
      description: "YOUR POWER TO GIFT LIFE Blood Donation Drive is set to improve attitude towards Voluntary Blood Donation and raise a record breaking 1000 PINTS OF BLOOD IN A DAY.",
      link: "https://www.instagram.com/p/Czv3HIIsnGY/",
      arm: "copa",
      image: yptglImage,
      date: "17-11-2023",
    },
    {
      name: "KB Klub Multipurpose Court",
      description: "The KB KLUB is glad to announce the successful completion of the KB multipurpose Court. This facility is set to provide the best sporting experience at the College of Medicine, University of Lagos.",
      link: "https://www.instagram.com/p/C2SiePbMp_1/",
      arm: "cosa",
      image: kourtRenovationImage,
      date: "23-01-2024",
    },
  ]
}


export default events;