import ArmEvents from "@/components/ArmEvents";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import events from "@/data/events";
import styles from "@/styles/Arms.module.css";
import { sortAndFilterEvents } from "@/utils/sortEvents";

const pageSeo = {
  title: "COSA • KB Klub",
  description: "KB KLUB has been empowering individuals and communities for over 55 years. Learn about the events of our Committee on Social Activities, including the exciting KB Kup: King of the Kourt Tournament. Join us in our mission to inspire and uplift through sports and community engagement."
}

let cosaEvents = sortAndFilterEvents(events, "cosa");

const COSA = () => {
  return (
    <>
      <SEO pageDetails={pageSeo} />
      <NavBar white/>
      <main className={styles.armLayout}>
        <div className={styles.armContainer}>
          <h1>Committee On Social Activities (COSA)</h1>
          <p>
            Social Empowerment is one of the tripods which the Klub stands on. Since her
            inception, the KB Klub has achieved social empowerment amongst her members and
            the society at large. 
            <br />
            <br />
            One of the ways projects the KB Klub has empowered the society was through the
            KB Kup: King of the Kourt Tournament which was birthed in 2020 to bring
            individuals from all over to participate in an elite sports tournament in various
            sports. The end goal of this tournament was to put smiles on faces, which the
            KB Klub has done for over 50 years.
          </p>
        </div>
      </main>
      <ArmEvents events={cosaEvents}/>
    </>
  );
}

export default COSA;