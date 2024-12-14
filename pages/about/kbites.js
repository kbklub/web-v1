import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import styles from "@/styles/AboutKbites.module.css";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { kbExecutives, kbites } from "@/data/kbites";

const pageSeo = {
  title: "Executives and Kbites • KB Klub",
  description: "The KB Klub is led by a dynamic team of dedicated medical students who are committed to making a positive impact on the world. Meet the seven Executives of the Klub and the roles in which they serve to advance our efforts in philanthropy, academics and social empowerment."
}

const Kbites = () => {

  const [searchName, setSearchName] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    console.log(searchName);
  }

  return (
    <>
      <SEO pageDetails={pageSeo} />
      <NavBar />
      <main className={styles.kbitesLayout}>
        <div className={styles.kbitesContainer}>
          <section className={styles.kbitesHeader}>
            <h1>Meet the Executives and the Kbites</h1>
            <form className={styles.searchContainer} onSubmit={e => handleSearch(e)}>
              <FaSearch />
              <input
                type="search" placeholder="Enter a name to search"
                value={searchName} onChange={e => setSearchName(e.target.value)}
              />
              <button type="submit">
                Search
              </button>
            </form>
          </section>

          <section className={styles.generalLayout}>
            <div className={styles.executiveLayout}>
              <h2>The Executives</h2>
              {kbExecutives.length ? (
                <div className={styles.executiveContainer}>
                  {kbExecutives.map((exec, index) => (
                    <div className={styles.executiveCard} key={index}>
                      <div className={styles.executiveCardImage}>
                        <Image src={exec.image} alt="Headshot of Mustapha Madehin, the KV Klub's President" />
                      </div>
                      <p>{exec.name}</p>
                      <p>{exec.title}</p>
                    </div>
                  ))}
                </div>) : ""}
            </div>
            <div className={styles.membersLayout}>
              <h2>The Kbites</h2>
              {kbites.length ? (
                <div className={styles.membersContainer}>
                  {kbites.map((kbite, index) => (
                    <p key={index}>{kbite}</p>
                  ))}
                </div>) : ""}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Kbites;