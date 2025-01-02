//* Import graphic image for events first
import stack23Image from "./images/events/stackReform23Image.jpg";
import yptglImage from "./images/events/powerToGiveLife.png";
import heroesNeedSaving from "./images/events/heroesNeedSaving.jpg";
import kourtRenovationImage from "./images/events/kbMultipurposeCourt.jpg";
import odogboluOutreach from "./images/events/odogboluMedicoDental.png";
import valentineOutreach24 from "./images/events/valentineDayOutreach24.jpg";
import stack24Image from "./images/events/stackReform24Image.jpg";
import dadHeroConference from "./images/events/dadHeroConference.png";
import walk4PH from "./images/events/walkForPulmonaryHypertension.png";
import unwellnessDrive from "./images/events/unwellnessBloodDrive.jpg";
import BLFATraining from "./images/events/firstResponderTrainingBLFA.jpg";
import stack17Image from "./images/events/stackReform17Image.jpg";
import stack18Image from "./images/events/stackReform18Image.jpg";
import stack19Image from "./images/events/stackReform19Image.jpg";
import lsbtcDrive from "./images/events/lsbtsBloodDrive.jpg";
import paniWebinar from "./images/events/paniMentalHealthWebinar.jpg";
import pacelliVisit from "./images/events/pacelliVisit23.jpg";
import nanvisSymposium from "./images/events/nanvisWalk23.jpg";

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
      link: "https://www.instagram.com/p/DC_3I9cMYzF/",
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
    {
      name: "Dad Hero Conference",
      description: "The KB Klub partnered with the Life After Abuse Foundation for the maiden edition of the Dad Hero Conference on Monday, 17th June, 2024 to celebrate Men's Mental Health Awareness Month. The event shed light on vital issues pertaining to men's health and also celebrated the triumphs of fatherhood, reminding us of the significance of acknowledging and appreciating the men who make a positive impact in our lives.",
      link: "https://www.instagram.com/p/C9C7w6go7_F/?igsh=MTNyNWc5YTBxbnhxbQ==",
      arm: "copa",
      image: dadHeroConference,
      date: "17-06-2024",
    },
    {
      name: "Walk For Pulmonary Hypertension (WALK4PH)",
      description: "The KB Klub participated in the WALK4PH campaign on May 25th, 2024 in celebration of World Pulmonary Hypertension Day, to spread awareness on the medical condition.",
      link: "https://www.instagram.com/p/C7bn-kkoG2b/?igsh=ZWVjMXVwcnFqZjRv",
      arm: "copa",
      image: walk4PH,
      date: "25-05-2024",
    },
    {
      name: "AIESEC X KB KLUB BLOOD DONATION DRIVE",
      description: "First Blood Donation Drive Collaboration Project between  AIESEC Nigeria and the KB KLUB. The event featured donor perks like: Exclusive Merch, Refreshments, and a ride discount voucher on BOLT rides to the venue. The event saw a healthy, local community of students willingly donate blood as the student community got educated alongside.",
      link: "https://www.instagram.com/p/DCMTTZ2I0R2/?igsh=MWgyaDF2Nm5xbGVwMw==",
      arm: "copa",
      image: unwellnessDrive,
      date: "13-11-2024",
    },
    {
      name: "First Responders Training at Beyond Limits Football Academy",
      description: "The KB KLUB, in partnership with Emergency Response Africa, trained players and staff at Beyond Limits Football Academy in emergency response skills. Supported by Hon. Kunle Soname, the session featured hands-on practice, empowering attendees to handle emergencies and share life-saving knowledge in their communities.",
      link: "https://www.instagram.com/p/Co2BwTHMO9o/?igsh=eWtzMXVqdWZpdmw2",
      arm: "copa",
      image: BLFATraining,
      date: "18-02-2023",
    },
    {
      name: "Stack Reform 2017",
      description: "Stack Reform 2017 hosted conversations of the future of different fields of knowledge and industry with different frontliners of the economy in discussion pods.",
      link: "https://www.instagram.com/share/BAkmWwhJde",
      arm: "coaa",
      image: stack17Image,
      date: "09-08-2017",
    },
    {
      name: "STACK REFORM 2018",
      description: "The Stack Reform Conference 2018 truly engaged the creators and innovators of the years to come, fostering dialogue on addressing healthcare challenges and inspiring groundbreaking solutions for Nigeria's medical sector.",
      link: "https://www.instagram.com/share/BAJ7YrnWcO",
      arm: "coaa",
      image: stack18Image,
      date: "21-08-2018",
    },
    {
      name: "STACK REFORM 2019",
      description: "The Stack Reform 2019 in conjunction with Entrepreneurship and Skills Development Centre, University of Lagos, emphasized innovation, collaboration, and skill-building as critical drivers for transforming healthcare delivery in Nigeria and beyond.",
      link: "https://www.instagram.com/share/BAIj1GnKDn",
      arm: "coaa",
      image: stack19Image,
      date: "18-08-2019",
    },
    {
      name: "Walk and Blood Drive with LSBTC",
      description: "The KB KLUB proudly joined the Lagos State Blood Transfusion Committee (LSBTC) on June 14th to celebrate World Blood Donor Day 2024 under the theme “20 Years of Celebrating Giving: Thank You Blood Donors.”",
      link: "https://www.instagram.com/p/C8hLj9Lo-_1/?img_index=1",
      arm: "copa",
      image: lsbtcDrive,
      date: "14-06-2024",
    },
    {
      name: "Mental Health Webinar with PANI and UNILAG",
      description: "The KB Klub in collaboration with University of Lagos and PANI hosted a Mental Health Awareness webinar titled \"The Struggle Within\", which featured practical insights on mental health and mental well-being.",
      link: "https://www.youtube.com/watch?v=MTkmRDFzacI",
      arm: "copa",
      image: paniWebinar,
      date: "05-10-2024",
    },
    {
      name: "Pacelli School for the Blind and Partially Sighted Children Philanthropic Visit",
      description: "The visit was intended to reassure and uplift both the children and administrators that they are not alone, and to remind them of the unwavering support and care available to them amidst life's challenges.This impactful visit saw the provision of both tangible assistance in form of donations that meet immediate needs and emotional support through comfort and fostering a sense of belonging.",
      link: "https://x.com/kbklub/status/1626127409324994565?s=46&t=-3c20WJ0d4oyISm_9PxvlQ",
      arm: "copa",
      image: pacelliVisit,
      date: "14-02-2023",
    },
    {
      name: "The Power of the Blind, Beautiful, Black, and Bold 2.0",
      description: "Awareness Walk and Symposium for the Visually impaired in collaboration with The National Association of Nigerian Visually Impaired Students, University of Lagos Chapter (NANVIS, UNILAG) in March, 2023.",
      link: "https://www.instagram.com/share/BAIyaMLjdL",
      arm: "copa",
      image: nanvisSymposium,
      date: "31-03-2023",
    },
  ]
}


export default events;