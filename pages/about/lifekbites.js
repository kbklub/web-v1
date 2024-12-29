import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import { FaSearch } from "react-icons/fa";
import styles from "@/styles/AboutLifeKbites.module.css";
import { useState } from "react";
import { lifeKbites } from "@/data/kbites";
import { chunkArray, searchAlumni } from "@/utils/sortEvents";

const pageSeo = {
  title: "Life Kbites • KB Klub",
  description: "The KB Klub offers a lifelong membership, the Klub boasts itself of a rich alumni making strides in all cadres of society. Our alumni, addressed as the Life Kbites, are distinguished leaders shaping society. Over the years, the KB Klub has moulded some of the most distinguished men in society, Find their names on this page."
}

const separatedData = chunkArray(lifeKbites, 44);

const LifeKbites = () => {

  const [searchName, setSearchName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = e => {
    let input = e.target.value
    setSearchName(input);

    if (input.trim()) {
      const results = searchAlumni(lifeKbites, input);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }

  return (
    <>
      <SEO pageDetails={pageSeo} />
      <NavBar />
      <main className={styles.kbitesLayout}>
        <div className={styles.kbitesContainer}>
          <section className={styles.kbitesHeader}>
            <h1>Meet the Life Kbites</h1>
            <div className={styles.kbitesHeaderDetails}>
              <p>
                Over the years, the KB Klub has moulded some of the most distinguished men
                in society. The Klub boasts itself of a rich alumni making strides in all
                cadres of society. KB Klub serves as a breeding ground for the perfect gentleman.
                It inculcates values such as decorum in its members.
              </p>
              <p>
                The experience gained from being a member of the prestigious Klub is evident
                in the accomplishments of its alumni. Membership of the KB Klub does not end
                when you leave university, it is a lifelong fraternity that takes you from the
                status of a <b>Kbite</b> to that of a <b>&quot;Life Kbite&quot;</b>.
              </p>
            </div>
            <form className={styles.searchContainer} onSubmit={e => handleSearch(e)}>
              <FaSearch />
              <input
                type="search" placeholder="Enter a name to search"
                value={searchName} onChange={e => handleSearch(e)}
              />
              <button type="submit" disabled>
                Search
              </button>
            </form>
          </section>
          {searchName.trim() ? (
            <div className={styles.lifeKbitesLayout} style={{ paddingBottom: "2em" }}>
              {!searchResults.length ?
                (<h2>No results found for &quot;{searchName}&quot;</h2>) :
                (<h2>Showing all results for &quot;{searchName}&quot;</h2>)
              }
              {searchResults.length ? (
                <div className={styles.kbiteGrid}>
                  {chunkArray(searchResults, 44).map((arr, index) => (
                    <div className={styles.kbiteGridColumn} key={index}>
                      {arr.map((name, index) => (
                        <p key={index}>{name}</p>
                      ))}
                    </div>
                  ))}
                </div>) : ""
              }
            </div>) : ""
          }
          <section className={styles.generalLayout}>
            <div className={styles.lifeKbitesLayout}>
              <h2>The Life Kbites</h2>
              {separatedData.length ? (
                <div className={styles.kbiteGrid}>
                  {separatedData.map((arr, index) => (
                    <div className={styles.kbiteGridColumn} key={index}>
                      {arr.map((name, index) => (
                        <p key={index}>{name}</p>
                      ))}
                    </div>
                  ))}
                </div>) : ""
              }
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default LifeKbites;