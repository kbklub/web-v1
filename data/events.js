//* Import graphic image for events first
import stack23Image from "./images/events/stackReform23Image.png";
import yptglImage from "./images/events/powerToGiveLife.png";
import heroesNeedSaving from "./images/events/heroesNeedSaving.jpg";
import kourtRenovationImage from "./images/events/kbMultipurposeCourt.jpeg";
import odogboluOutreach from "./images/events/odogboluMedicoDental.png";
import valentineOutreach24 from "./images/events/valentineDayOutreach24.jpg";
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
    // {
    //   name: "Stack Reform Conference 2024",
    //   description: "Over the years, the STACK REFORM conference has evolved into a diverse range of events. From exciting speech competitions to intercollegiate elevator pitch contests, it has not relented in nurturing the minds of our inquisitive attendees.",
    //   link: "https://stack.kbklub.org/",
    //   arm: "coaa",
    //   image: stack24Image,
    //   date: "30-11-2024",
    //   registrationLink: "https://stack.kbklub.org/register"
    // },
  ],
  past: [
    {
      name: "Your Power to Gift Life",
      description: "On November 17, 2023, the KB Klub launched Your Power to Gift Life, a groundbreaking blood donation drive aimed at increasing awareness and inspiring participation in voluntary blood donation. The event, hosted at the Indoor Sports Hall of the University of Lagos, welcomed over 1,000 attendees and partnered with reputable organizations such as Lagos University Teaching Hospital (LUTH), Lagos State Blood Transfusion Service (LSBTS), and the Nigerian Red Cross.",
      link: "https://drive.google.com/file/d/18evQ_I9pFK9IxGzS1pytkmEIYs46v7d0/view",
      arm: "copa",
      image: yptglImage,
      date: "17-11-2023",
    },
    {
      name: "Even Heroes Need Saving",
      description: "The 55th Annual Philanthropic Day project of the KB KLUB themed “EVEN HEROES NEED SAVING” was designed as a targeted health intervention to tackle significant health concerns among military personnel. The event, featured Mental Health evaluation & counselling sessions, Prostate cancer screening exercise, and General medical screening for service members and their families, took place on October 12, 2024, at Marda Barracks, Yaba, Lagos.",
      link: "https://drive.google.com/file/d/18PHoKDs_DiX6Ma08vZXDjsRY55toKE1V/view",
      arm: "copa",
      image: heroesNeedSaving,
      date: "12-10-2024",
    },
    {
      name: "KB Klub x Oseni Foundation Odogbolu Community Medico-Dental Outreach",
      description: "The KB Klub partnered with the Oseni Foundation for a medico-dental outreach in the Odogbolu community of Ogun State on Saturday, 2nd November, 2024. The intervention combined awareness talks, education, and free dental services (scaling and polishing) to raise awareness about periodontitis and its connection to other medical conditions.",
      link: "https://www.instagram.com/p/DCR4Nx3oNtS/?img_index=4&igsh=cTRlOHZxbmdlenA4",
      arm: "copa",
      image: odogboluOutreach,
      date: "02-11-2024",
    },
    {
      name: "Valentine's Day Outreach 2024",
      description: "This is the FIRST philanthropic event of the year for the KB KLUB where there is usually donation of items that ranges from bags of detergent, rechargeable lamps, sewing materials to orphanages, hospice care and less privileged communities.",
      link: "https://www.instagram.com/p/C3dPlXKMvru/?img_index=1",
      arm: "copa",
      image: valentineOutreach24,
      date: "14-02-2024",
    },
    {
      name: "STACK Reform 2024; Fast Forward",
      description: "STACK REFORM Conference 2024, themed \"Fast Forward: Nigeria's Giant Leap Into The Future Of Healthcare,\" brought together experts, innovators, and students to explore groundbreaking technologies, foster collaboration, and shape the future of healthcare in Nigeria and beyond.",
      link: "https://www.instagram.com/p/DDCoPI7SblU/",
      arm: "coaa",
      image: stack24Image,
      date: "30-11-2024",
    },
    {
      name: "STACK Reform 2023; Transforming Healthcare through Financial Technology",
      description: "The STACK REFORM Conference 2023, themed \"Transforming Healthcare through Financial Technology,\" brought together over 1,200 attendees, experts, and innovators. It featured impactful keynote speeches, panel discussions, competitions, and exhibitions, fostering innovation, collaboration, and academic excellence in healthcare and FinTech.",
      link: "https://drive.google.com/file/d/1XtQyVPyCC9BdNQc1nU8BoVkunyGed8ow/view",
      arm: "coaa",
      image: stack23Image,
      date: "09-11-2023",
    },
    {
      name: "KB Multipurpose Kourt Launch",
      description: "On 23rd January, 2024, the KB KLUB proudly commissioned the newly renovated multipurpose court at the College of Medicine, University of Lagos. Supported by Webber Hoops and the university management, the court was commissioned amidst applause for the klub's dedication to social empowerment.",
      link: "https://www.instagram.com/p/C2xfpMaMqnk/?igsh=MW9hOTNkdzhqeXFpNw==",
      arm: "cosa",
      image: kourtRenovationImage,
      date: "09-11-2023",
    },
  ]
}


export default events;