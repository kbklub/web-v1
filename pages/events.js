import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import Image from "next/image";
import styles from "@/styles/Events.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import events from "@/data/events";
import { sortObjectArraysByDate } from "@/utils/sortEvents";

const pageSeo = {
  title: "Events • KB Klub",
  description: "Learn about the transformative events hosted by KB Klub. Explore the STACK Reform Conference, Even Heroes Need Saving, Your Power to Gift Life, and many more initiatives dedicated to advancing our core values and improving society."
}

const refinedEvents = sortObjectArraysByDate(events);

const Events = () => {

  const [eventsType, setEventsType] = useState("upcoming");

  return (
    <>
      <SEO pageDetails={pageSeo}/>
      <header className={styles.headerLayout}>
        <NavBar />
        <div className={styles.headerContainer}>
          <h1>Events</h1>
          <p>
            Check out our past events and get a glimpse of what&apos;s coming up next.
            Our events focus  on philanthropy, social empowerment, leadership development,
            and academic excellence.
          </p>
          <div className={styles.headerBtnContainer}>
            <button 
              className={eventsType == "upcoming" ? styles.active : ""}
              onClick={() => setEventsType("upcoming")}
            >
              Upcoming Events
            </button>
            <button
              className={eventsType == "past" ? styles.active : ""}
              onClick={() => setEventsType("past")}
            >
              Past Events
            </button>
          </div>
        </div>
      </header>
      <main className={styles.eventsLayout}>
        <div className={styles.eventsContainer}>
          <h2>{eventsType} Events</h2>
          {!events[eventsType].length ? (
            <p className={styles.noEventTag}>
              No <span style={{textTransform: "capitalize"}}>{eventsType}</span> Events for Now. Check back soon for updates!
            </p>
          ) : ""}
          {refinedEvents[eventsType].map((ev, index) => (
            <div className={styles.eventCard} key={index}>
              <div className={styles.eventCardContainer}>
                <div className={styles.eventCardImage}>
                  <Image src={ev.image} alt="A graphic poster describing the Stack Reform conference 2024" />
                </div>
                <div className={styles.eventCardDetails}>
                  <h3>{ev.name}</h3>
                  <p>{ev.description}</p>
                  <div className={styles.eventCardBtnContainer}>
                    <a href={ev.link}>
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </main>
    </>
  );
}

export default Events;