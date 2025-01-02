//* Import needed image first
import { sortObjectArraysByDate } from "@/utils/sortEvents";
import joinSubstack from "./images/editorial/blogSubstack.jpg";
import mediphil2023 from "./images/editorial/mediphil2023.jpg";
import mediphil2022 from "./images/editorial/mediphil2022.jpg";
import mediphil2021 from "./images/editorial/mediphil2021.png";
import mediphil2018 from "./images/editorial/mediphil2018.jpg";
import mediphil2015 from "./images/editorial/mediphil2015.jpg";
import kbinetQ22023 from "./images/editorial/kbinetQ22023.jpg";
import kbinetQ32023 from "./images/editorial/kbinetQ32023.jpg";
import kbinetQ42022 from "./images/editorial/kbinetQ42022.jpg";
import kbinetQ12024 from "./images/editorial/kbinetQ42024.png";

// blogSchema = {
//   name: "Name of the blog piece",
//   description: "A short description of what the piece discusses. 25 - 40 words",
//   link: "A link to the blog post, or magazine",
//   image: theImportedImageFile,
//   date: "DD-MM-YYYY. strictly that format",
// }

let editorialPieces = {
  blog: [
    {
      name: "Access our blog on Substack",
      description: "Be the first to know about our activities through our blog on Substack!",
      link: "https://kbklub.substack.com/",
      image: joinSubstack,
      date: "18-11-2024",
    },
  ],
  newsletters: [
    {
      name: "KBINET 2024 #1",
      description: "KB Klub's Newsletter for the first quarter of 2024, it featured the KB Multipurpose Kourt Launch, Valentine's Day outreach, and the collaboration with PANI.",
      link: "https://www.scribd.com/document/724810500/KBINET-Q1-2024",
      image: kbinetQ12024,
      date: "20-04-2024",
    },
    {
      name: "Kbinet 2023 #2",
      description: "The official newsletter of the KB KLUB",
      link: "https://www.scribd.com/document/660703674/KBINET-2023-2",
      image: kbinetQ32023,
      date: "22-06-2023",
    },
    {
      name: "Kbinet 2023 #1",
      description: "The official newsletter of the KB KLUB",
      link: "https://www.scribd.com/document/641277616/KBINET-2023-1",
      image: kbinetQ22023,
      date: "26-04-2023",
    },
    {
      name: "KBINET SPECIAL EDITION (DECEMBER 2022)",
      description: "A special edition of the official newsletter of the KB Klub.",
      link: "https://www.scribd.com/document/674187605/Kbinet-Special-Edition-December-2022",
      image: kbinetQ42022,
      date: "31-12-2023",
    },
  ],
  mediphil: [
    {
      name: "MediPhil 2023 (AVANCE)",
      description: "The 2023 edition of KB KLUB's Annual Magazine publication was themed Avance: Breaking Barriers. It featured Hon. Kunle Soname, CEO Bet9ja & Value Jet and Dr. Oyebanji Filani as the faces of the PHILanthropy and MEDIcine sides respectitvely.",
      link: "https://drive.google.com/file/d/1QjrqYP3Zq4sl49uUdvHQpci8h2e_4GzK/view?usp=sharing",
      image: mediphil2023,
      date: "17-07-2023",
    },
    {
      name: "MediPhil 2022 (Enchórios)",
      description: "The 2022 edition of KB KLUB's Annual Magazine publication was themed Enchórios. It featured Professor Abiodun Akinwutan, Dean, School of Health Professionals and Dr. Ifeanyi O. Oshiga, Principal Dentist, Beechcroft Dental Clinic as the faces of the PHILanthropy and MEDIcine sides respectitvely.",
      link: "https://www.scribd.com/document/655331281/MEDIPHIL-2022-ENCHORIOS",
      image: mediphil2022,
      date: "31-12-2022",
    },
    {
      name: "MediPhil 2021",
      description: "The 2021 edition of the official magazine of the KB KLUB. Featuring Dr. Kunle F. Ajayi, MD Clearview Hospital as the face of the magazine.",
      link: "https://www.scribd.com/document/672588844/MediPhil-2021",
      image: mediphil2021,
      date: "30-12-2021",
    },
    {
      name: "El Invicto - MediPhil 2018",
      description: "The 2018 edition of the official magazine of the KB KLUB. MediPhil 2018 adopted the theme El-Invicto, meaning 'The Invincibility Status', to reflect the klub's resilience over its 49-year journey, despite facing numerous challenges. El-Invicto showcases Life KBite, Dr. Kunle Hassan, CMD of Eye Foundation Hospital, and Patron Mrs. Winifred Akpani, MD/CEO of Northwest Petroleum, as its faces.",
      link: "https://www.scribd.com/document/720444322/El-Invicto-Mediphil-2018",
      image: mediphil2018,
      date: "28-12-2018",
    },
    {
      name: "Portmanteau - MediPhil 2015",
      description: "Mediphil 2015 was themed Mot-Valise on the philanthropy side and Portmanteau on the medical side. It features Grand Patron Life KBite Professor Oladapo Ashiru and Life KBite Dr. Akintunji as its faces.",
      link: "https://www.scribd.com/document/720443303/Mediphil-2015",
      image: mediphil2015,
      date: "28-12-2015",
    },
  ],
}

editorialPieces = sortObjectArraysByDate(editorialPieces);

export default editorialPieces;