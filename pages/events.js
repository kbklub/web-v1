import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import Image from "next/image";
import styles from "@/styles/Events.module.css";
import { FaCheck, FaChevronDown } from "react-icons/fa6";
import { useEffect, useState, useRef } from "react";
import events from "@/data/events";
import { sortAndFilterEvents, sortObjectArraysByDate } from "@/utils/sortEvents";

const pageSeo = {
  title: "Events • KB Klub",
  description: "Learn about the transformative events hosted by KB Klub. Explore the STACK Reform Conference, Even Heroes Need Saving, Your Power to Gift Life, and many more initiatives dedicated to advancing our core values and improving society."
}

const Events = () => {
  const [refinedEvents, setRefinedEvents] = useState(sortObjectArraysByDate(events));
  const [eventsType, setEventsType] = useState("upcoming");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterOption, setFilterOption] = useState("all");

  const filterButtonRef = useRef(null);
  const filterModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isFilterOpen &&
        filterModalRef.current &&
        filterButtonRef.current &&
        !filterModalRef.current.contains(event.target) &&
        !filterButtonRef.current.contains(event.target)
      ) {
        setIsFilterOpen(false);
      }
    };

    if (isFilterOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterOpen]);

  useEffect(() => {
    if (filterOption == "all") {
      setRefinedEvents(sortObjectArraysByDate(events));
      return;
    }
    let key = {
      "academic": "coaa",
      "philanthropic": "copa",
      "social": "cosa",
    }
    setRefinedEvents(sortAndFilterEvents(events, key[filterOption]));
  }, [filterOption])

  return (
    <>
      <SEO pageDetails={pageSeo} />
      <header className={styles.headerLayout}>
        <NavBar />
        <div className={styles.headerContainer}>
          <h1>Events</h1>
          <p>
            Check out our past events and get a glimpse of what&apos;s coming up next.
            Our events focus on philanthropy, social empowerment, leadership development,
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
          <div className={styles.eventsContainerHeader}>
            <h2 className={styles.eventsContainerTitle}>{eventsType} Events</h2>
            {eventsType == "past" ? (
              <button
                ref={filterButtonRef}
                className={styles.eventsFilterBtn}
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <p><span style={{textTransform: "capitalize"}}>{filterOption}</span> Events</p>
                <FaChevronDown />
              </button>
            ) : ""}
            {isFilterOpen && eventsType == "past" ? (
              <div ref={filterModalRef} className={styles.filterContainer}>
                <ul>
                  <li className={styles.filterOption}>
                    <button onClick={() => {
                      setFilterOption("all");
                      setIsFilterOpen(false);
                    }}>
                      All Events
                      {filterOption == "all" ? <FaCheck /> : ""}
                    </button>
                  </li>
                  <li className={styles.filterOption}>
                    <button onClick={() => {
                      setFilterOption("academic");
                      setIsFilterOpen(false);
                    }}>
                      Academic Events
                      {filterOption == "academic" ? <FaCheck /> : ""}
                    </button>
                  </li>
                  <li className={styles.filterOption}>
                    <button onClick={() => {
                      setFilterOption("philanthropic");
                      setIsFilterOpen(false);
                    }}>
                      Philanthropic Events
                      {filterOption == "philanthropic" ? <FaCheck /> : ""}
                    </button>
                  </li>
                  <li className={styles.filterOption}>
                    <button onClick={() => {
                      setFilterOption("social");
                      setIsFilterOpen(false);
                    }}>
                      Social Events
                      {filterOption == "social" ? <FaCheck /> : ""}
                    </button>
                  </li>
                </ul>
              </div>
            ) : ""}
          </div>
          {!events[eventsType].length ? (
            <p className={styles.noEventTag}>
              No <span style={{ textTransform: "capitalize" }}>{eventsType}</span> Events for Now. Check back soon for updates!
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