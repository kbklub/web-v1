import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import stackImage from "../assets/images/stackReformImage.png";
import Image from "next/image";
import styles from "@/styles/Events.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

const mockData = {
  upcoming: [
  ],
  past: [
    {
      name: "Stack Reform 2024",
      description: "Over the years, the STACK REFORM conference has evolved into a diverse range of events. From exciting speech competitions to intercollegiate elevator pitch contests, it has not relented in nurturing the minds of our inquisitive attendees.",
      link: "https://stack.kbklub.org/",
    },
    {
      name: "Stack Reform 2024",
      description: "Over the years, the STACK REFORM conference has evolved into a diverse range of events. From exciting speech competitions to intercollegiate elevator pitch contests, it has not relented in nurturing the minds of our inquisitive attendees.",
      link: "https://stack.kbklub.org/",
    },
  ]
}

const pageSeo = {
  title: "Events • Kb Klub",
  description: "Learn about the transformative events hosted by KB Klub. Explore the STACK Reform Conference, Even Heroes Need Saving, Your Power to Gift Life, and many more initiatives dedicated to advancing our core values and improving society."
}

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
          {!mockData[eventsType].length ? (
            <p className={styles.noEventTag}>No Upcoming Events for Now. Check back soon for updates!</p>
          ) : ""}
          {mockData[eventsType].map((ev, index) => (
            <div className={styles.eventCard} key={index}>
              <div className={styles.eventCardContainer}>
                <div className={styles.eventCardImage}>
                  <Image src={stackImage} alt="A graphic poster describing the Stack Reform conference 2024" />
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