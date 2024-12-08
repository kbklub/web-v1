import Link from "next/link";
import kbLogo from "../../assets/images/kb_klub_logo.png";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import styles from "./Footer.module.css";

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerLayout}>
      <div className={styles.footerContainer}>
        <div className={styles.footerIntro}>
          <Link href="/" className={styles.footerIntroLink}>
            <div aria-hidden="true" className={styles.footerIntroLinkImage}><Image src={kbLogo} alt=""/></div>
            <h2>KB Klub</h2>
          </Link>
          <p>
            The exclusive and foremost socio-philanthropic organization of male medical
            students in the College of Medicine University of Lagos.
          </p>
        </div>
        <div className={styles.footerNav}>
          <div className={styles.footerNavColumns}>
            <h3>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about/lifekbites">Life Kbites</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/support-us">Support Us</Link></li>
            </ul>
          </div>
          <div className={styles.footerNavColumns}>
            <h3>Arms</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/arms/philanthropy">Philanthropy</Link></li>
              <li><Link href="/arms/academic-excellence">Academic Excellence</Link></li>
              <li><Link href="/arms/social-empowerment">Social Empowerment</Link></li>
              <li><Link href="/editorial">Editorial</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerSocials}>
          <a href="mailto:kbclubcmul@gmail.com">kbclubcmul@gmail.com</a>
          <div className={styles.footerMediaLinks}>
            <a href="https://twitter.com/KBKLUB"><FaTwitter /></a>
            <a href="https://www.linkedin.com/company/kb-klub/"><FaLinkedin /></a>
            <a href="https://www.instagram.com/kbklub/"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <p className={styles.footerCopyright}>
        Copyright&copy; {currentYear} KB KLUB. All rights reserved.
      </p>
    </footer>
  );
}
 
export default Footer;