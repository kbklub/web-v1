import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import editorialPieces from "@/data/editorial";
import events from "@/data/events";
import styles from "@/styles/Editorial.module.css";
import Image from "next/image";
import { useState } from "react";

const pageSeo = {
  title: "Editorial • KB Klub",
  description: "Explore the world of the KB Klub through our periodic newsletters which inform you of our activities and our annual magazine, MediPhil, which features leading personalities in Medicine and Philanthropy as well as other enlightening and thought-provoking articles."
}

const Editorial = () => {

  const [editorialType, setEditorialType] = useState("blog");

  return (
    <>
      <SEO pageDetails={pageSeo}/>
      <header className={styles.headerLayout}>
        <NavBar />
        <div className={styles.headerContainer}>
          <h1>Welcome to KB Editorial</h1>
          <div className={styles.headerDetails}>
            <p>
              The KB Klub&apos;s Editorial Board is the arm of the klub responsible for its
              publications. This committee oversees all publishing endeavors, including the
              klub&apos;s flagship annual magazine, <b>MEDIPHIL</b>. MediPhil showcases
              thought-provoking articles, insightful reports, and engaging interviews with
              prominent figures in medicine and philanthropy - a fitting combination reflected
              in the magazine&apos;s very name. 
            </p>
            <p>
              Beyond Mediphil, the Board keeps the public informed by publishing quarterly
              newsletters titled <b>KBinet</b>. These newsletters chronicle the activities
              of all KB Klub committees, ensuring everyone stays informed.
            </p>
          </div>
          <div className={styles.headerBtnContainer}>
            <button 
              className={editorialType == "blog" ? styles.active : ""}
              onClick={() => setEditorialType("blog")}
            >
              Blog
            </button>
            <button
              className={editorialType == "newsletters" ? styles.active : ""}
              onClick={() => setEditorialType("newsletters")}
            >
              Newsletters
            </button>
            <button
              className={editorialType == "mediphil" ? styles.active : ""}
              onClick={() => setEditorialType("mediphil")}
            >
              MediPhil
            </button>
          </div>
        </div>
      </header>
      <main className={styles.eventsLayout}>
        <div className={styles.eventsContainer}>
          <h2>{editorialType}</h2>
          {!editorialPieces[editorialType].length ? (
            <p className={styles.noEventTag}>
              No <span style={{textTransform: "capitalize"}}>{editorialType}</span> piece for Now. Check back soon for updates!
            </p>
          ) : ""}
          {editorialPieces[editorialType].map((ev, index) => (
            <div className={styles.eventCard} key={index}>
              <div className={styles.eventCardContainer}>
                <div className={styles.eventCardImage}>
                  <Image src={ev.image} alt={`A ${editorialType} poster for ${ev.name}`} />
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

export default Editorial;