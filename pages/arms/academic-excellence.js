import ArmEvents from "@/components/ArmEvents";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import events from "@/data/events";
import styles from "@/styles/Arms.module.css";
import { filterEventsByArm, sortAndFilterEvents } from "@/utils/sortEvents";

const pageSeo = {
  title: "COAA • KB Klub",
  description: "Discover how the Committee of Academic Activities (COAA) of KB KLUB is driving academic excellence and innovation in Nigeria. Learn about the impactful STACK Reform Conference and the transformative KB KLUB Fellowship Program, designed to equip students with the skills and connections to succeed in healthcare and technology."
}

let coaaEvents = sortAndFilterEvents(events, "coaa");

const COAA = () => {
  return (
    <>
      <SEO pageDetails={pageSeo} />
      <NavBar />
      <main className={styles.armLayout}>
        <div className={styles.armContainer}>
          <h1>Committee On Academic Activities (COAA)</h1>
          <p>
            The Committee of Academic Activities (COAA) is the brainchild of the KB KLUB,
            dedicated to nurturing academic excellence and intellectual growth among
            medical students at the College of Medicine, University of Lagos. Key COAA
            Initiatives include:
          </p>
          <div className={styles.armDetails}>
            <div>
              <ul>
                <li>
                  <p>
                    <b>KB KLUB Stack Reform Conference:</b> Launched in 2017, this event
                    was set up to help young people blossom into the culture of innovation,
                    and hereby enabling a generation of solution-oriented individuals. The
                    conference operates on a vision of reforming health care delivery in
                    Nigeria and Africa by creating accessible, affordable and reliable
                    solutions. We have been able to see through these projects to conclusion
                    through partnerships with establishments like Sterling Bank, Northwest
                    Petroleum and Gas, Advantage Health, Entrepreneurship and Skills
                    Development Centre of the University of Lagos (ESDC), Doctoora, various
                    HMOs and many more.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <p>
                    <b>KB KLUB Fellowship Program:</b> Introduced in 2023, this program
                    connects penultimate and final- year CMUL students with mentors in
                    various fields. The program&apos;s mentorship component offers guidance
                    and insights, while the internship component provides practical
                    experience in esteemed institutions.
                  </p>
                </li>
              </ul>
              <p>
                COAA&apos;s commitment to elevating academic pursuits reflects our dedication
                to enhancing the educational journey for aspiring medical professionals.
                Through these initiatives, we foster innovation, collaboration, and skill
                development for a brighter future.
              </p>
            </div>
          </div>
        </div>
      </main>
      <ArmEvents events={coaaEvents}/>
    </>
  );
}

export default COAA;