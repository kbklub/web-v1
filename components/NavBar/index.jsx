import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.css";
import kbLogo from "../../assets/images/kb_klub_logo.png";
import { HiArrowSmallRight, HiBars3, HiMiniChevronDown, HiMiniXMark } from "react-icons/hi2";
import { useEffect, useState } from "react";


const NavBar = () => {

  const [isMobileMenu, setMobileMenu] = useState(false);
  const [dropAbout, setDropAbout] = useState(false);
  const [dropArms, setDropArms] = useState(false);

  useEffect(() => {
    if (isMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenu])

  // const handleDropdown = (option) => {

  // }

  return (
    <nav className={styles.navLayout}>
      <div className={styles.navContainer}>
        <Link href="/" aria-label="Back to the homepage" className={styles.imageLink}>
          <Image src={kbLogo} alt="A logo image of the KB Klub" />
          <p>Kb klub</p>
        </Link>

        <button className={styles.hamburgerBtn} onClick={() => setMobileMenu(!isMobileMenu)}>
          {!isMobileMenu ? <HiBars3 /> : ""}
          {isMobileMenu ? <HiMiniXMark /> : ""}
        </button>
      </div>
      {isMobileMenu && (
        <div className={styles.mobileNavLayout}>
          <div className={styles.mobileNavOverflow}>
            <ul className={styles.mobileNavContainer}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <button
                  className={dropAbout ? styles.dropButton : ""}
                  onClick={() => setDropAbout(!dropAbout)}
                >
                  About Us
                  <HiMiniChevronDown />
                </button>
                <div className={!dropAbout ? styles.hiddenDropDown : ""}>
                  <ul className={styles.navSubList}>
                    <li><Link href="/about">About KB KLUB</Link></li>
                    <li><Link href="/about/kbites">Executives &amp; Kbites</Link></li>
                    <li><Link href="/about/lifekbites">Life Kbites</Link></li>
                  </ul>
                </div>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/editorial">Editorial</Link>
              </li>
              <li>
                <button
                  className={dropArms ? styles.dropButton : ""}
                  onClick={() => setDropArms(!dropArms)}
                >
                  Arms
                  <HiMiniChevronDown />
                </button>
                <div className={!dropArms ? styles.hiddenDropDown : ""}>
                  <ul className={styles.navSubList}>
                    <li><Link href="/arms/philanthropy">Philanthropy</Link></li>
                    <li><Link href="/arms/academic-excellence">Academic Excellence</Link></li>
                    <li><Link href="/arms/social-empowerment">Social Empowerment</Link></li>
                  </ul>
                </div>
              </li>
            </ul>

            <Link href="/support-us" className={styles.partnerBtn}>
              <button>
                Partner with Us
                <HiArrowSmallRight />
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;