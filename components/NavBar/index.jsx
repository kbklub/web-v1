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
  const [dropLargeAbout, setDropLargeAbout] = useState(false);
  const [dropLargeArms, setDropLargeArms] = useState(false);

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

  return (
    <nav className={styles.navLayout}>
      <div className={styles.navContainer}>
        <Link href="/" aria-label="Back to the homepage" className={styles.imageLink}>
          <div className={styles.navHomeIcon}><Image src={kbLogo} alt="A logo image of the KB Klub" /></div>
          <h1>Kb klub</h1>
        </Link>

        <div className={styles.largeNavListContainer}>
          <ul className={styles.largeNavList}>
            <li>
              <button
                className={dropLargeAbout ? styles.dropLargeButton : ""}
                onClick={() => setDropLargeAbout(!dropLargeAbout)}
              >
                About Us
                <HiMiniChevronDown />
              </button>
              <div className={!dropLargeAbout ? styles.hiddenLargeDropDown : ""}>
                <ul className={styles.largeNavSubList}>
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
                className={dropLargeArms ? styles.dropLargeButton : ""}
                onClick={() => setDropLargeArms(!dropLargeArms)}
              >
                Arms
                <HiMiniChevronDown />
              </button>
              <div className={!dropLargeArms ? styles.hiddenLargeDropDown : ""}>
                <ul className={styles.largeNavSubList}>
                  <li><Link href="/arms/philanthropy">Philanthropy</Link></li>
                  <li><Link href="/arms/academic-excellence">Academic Excellence</Link></li>
                  <li><Link href="/arms/social-empowerment">Social Empowerment</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <Link href="/support-us">Partner with us</Link>
            </li>
          </ul>
        </div>

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