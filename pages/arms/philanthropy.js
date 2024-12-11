import ArmEvents from "@/components/ArmEvents";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import events from "@/data/events";
import styles from "@/styles/Arms.module.css";
import { sortAndFilterEvents } from "@/utils/sortEvents";

const pageSeo = {
  title: "COPA • KB Klub",
  description: "Discover the impactful work of the Committee on Philanthropic Activities at KB KLUB. For over 55 years, we've been organizing vital medical interventions and donations to improve lives. From cancer screenings to mental health awareness and blood donation drives, we're committed to making a positive impact."
}

let copaEvents = sortAndFilterEvents(events, "copa");

const COPA = () => {
  return (
    <>
      <SEO pageDetails={pageSeo} />
      <NavBar />
      <main className={styles.armLayout}>
        <div className={styles.armContainer}>
          <h1>Committee On Philanthropic Activities (COPA)</h1>
          <p>
            The Committee On Philanthropic Activities is that arm tasked with organizing
            the philanthropic events of the KLUB. For 54 years, the KB KLUB has prided
            herself in being a part of groundbreaking efforts towards putting smiles on
            thousands of faces. Examples of such events include:
          </p>
          <div className={styles.armDetails}>
            <div>
              <ul>
                <li>
                  <p>
                    Medical outreaches focused on several aspects of healthcare in a bid
                    to educate and screen the populace on risk factors (General medical
                    and Dental outreaches; Breast and Cervical cancer screening; Eye test
                    screenings; etc)
                  </p>
                </li>
                <li>
                  <p>
                    Donations of items to orphanages and care facilities for the vulnerable.
                  </p>
                </li>
                <li>
                  <p>
                    Financial Donations to indigent individuals.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <p>
                In the past, this committee has helped the KLUB to work towards achieving
                the United Nations Sustainable Development Goals 1 (No Poverty), 2 (No Hunger),
                3 (Good Health and Well-being), 4 (Education for All), 13 (Climate Action)
                and 17 (Partnership to achieve the Goals). This committee has been intentional
                about achieving the SDGs and directs all of its activities towards it.
              </p>
            </div>
          </div>
        </div>
      </main>
      <ArmEvents events={copaEvents}/>
    </>
  );
}

export default COPA;