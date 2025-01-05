import Image from "next/image";
import styles from "./ArmEvents.module.css";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";


const ArmEvents = ({events}) => {
  return (
    <>
      <section className={styles.upcomingLayout}>
        <div className={styles.eventContainer}>
          <h2>Upcoming Events</h2>
          {!events.upcoming.length ? (<p className={styles.noEventText}>
            No Upcoming Events for Now. Check back soon for updates!
          </p>) : ""}
          {events.upcoming.length ? (
            <div className={styles.eventsGrid}>
              {events.upcoming.map((ev, index) => (
                <div className={styles.eventCard} key={index}>
                  <div aria-hidden="true" className={styles.eventCardImage}>
                    <Image src={ev.image} alt="" />
                  </div>
                  <h3>{ev.name}</h3>
                  <p>{ev.description}</p>
                  <a href={ev.link} aria-label={`Read more about ${ev.name}`}>
                    Read more
                  </a>
                </div>
              ))}
            </div>) : ""}
        </div>
      </section>
      <section className={styles.pastLayout}>
        <div className={styles.eventContainer}>
          <h2>Past Activities &amp; Events</h2>
          {!events.past.length ? (<p className={styles.noEventText}>
            No Past Events for Now. Check back soon for updates!
          </p>) : ""}
          {events.past.length ? (<>
            <div className={styles.eventsGrid}>
              {events.past.slice(0, 3).map((ev, index) => (
                <div className={styles.eventCard} key={index}>
                  <div aria-hidden="true" className={styles.eventCardImage}>
                    <Image src={ev.image} alt="" />
                  </div>
                  <h3>{ev.name}</h3>
                  <p>{ev.description}</p>
                  <a href={ev.link} aria-label={`Read more about ${ev.name}`}>
                    Read more
                  </a>
                </div>
              ))}
            </div>
            <Link href="/events" className={styles.moreEventsBtn}>
              See More Events
              <FaChevronRight />
            </Link>
          </>) : ""}
        </div>
      </section>
    </>
  );
}

export default ArmEvents;