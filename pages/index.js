import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import styles from "@/styles/Homepage.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import stackImage from "../assets/images/stackReformImage.png";
import kbinetImage from "../assets/images/kbinetArticleImage.png";
import copaImage from "../assets/images/copaDisplayImage.jpeg";
import updatesCarouselBg from "../assets/images/updateBackgroundGraphic.png";


export default function Home() {
  return (
    <>
      <SEO />
      <header className={styles.headerLayout}>
        <NavBar />
        <div className={styles.headerContainer}>
          <h1>Transforming Lives through Service</h1>
          <p>
            At KB Klub, we champion academic excellence, embrace philanthropy, and lead
            transformative social initiatives to make a lasting difference
          </p>
          <div className={styles.headerBtnContainer}>
            <Link href="/about">
              Read more about us
              <FaArrowRight />
            </Link>
            <Link href="/support-us">
              Partner with us
            </Link>
          </div>
        </div>
      </header>
      <section className={styles.eventsLayout}>
        <div className={styles.eventsContainer}>
          <h2>Upcoming Events</h2>
          <div className={styles.eventCard}>
            <div className={styles.eventCardContainer}>
              <div className={styles.eventCardImage}>
                <Image src={stackImage} alt="A graphic poster describing the Stack Reform conference 2024" />
              </div>
              <div className={styles.eventCardDetails}>
                <h3>Stack Reform Conference 2024</h3>
                <p>
                  Over the years, the STACK REFORM conference has evolved into a diverse range of
                  events. From exciting speech competitions to intercollegiate elevator pitch
                  contests, it has not relented in nurturing the minds of our inquisitive attendees.
                </p>
                <div className={styles.eventCardBtnContainer}>
                  <a href="https://stack.kbklub.org/">
                    Read More
                  </a>
                  <a href="https://stack.kbklub.org/register">
                    Click here to Register
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Link href="/events">
            View all Events
          </Link>
        </div>
      </section>
      <section className={styles.updatesLayout}>
        <div aria-hidden="true" className={styles.updatesCarouselBg}>
          <Image src={updatesCarouselBg} alt="" />
        </div>
        <div aria-hidden="true" className={styles.updatesCarouselBg}>
          <Image src={updatesCarouselBg} alt="" />
        </div>
        <div className={styles.updatesContainer}>
          <div className={styles.updatesHeading}>
            <h2>Latest Updates from the KB KLUB</h2>
            <div className={styles.updatesCarouselControlContainer}>
              ajjsjs
            </div>
          </div>
          <div className={styles.updatesCarouselContainer}>
            <div className={styles.updateCard}>
              <div aria-hidden="true" className={styles.updateCardImage}>
                <Image src={kbinetImage} alt="" />
              </div>
              <h3>THE KBINET RELEASE</h3>
              <p>
                The KB KLUB is pleased to announce the release of our newsletter for the
                first quarter of the year. This issue of the KBINET features articles on
                the launch of the KB Multipurpose Kourt.
              </p>
              <a href="https://twitter.com/KBKLUB/status/1781678522039153130/">
                Read more
              </a>
            </div>
            <div className={styles.updateCard}>
              <div aria-hidden="true" className={styles.updateCardImage}>
                <Image src={kbinetImage} alt=""/>
              </div>
              <h3>THE KBINET RELEASE</h3>
              <p>
                The KB KLUB is pleased to announce the release of our newsletter for the
                first quarter of the year. This issue of the KBINET features articles on
                the launch of the KB Multipurpose Kourt.
              </p>
              <a href="https://twitter.com/KBKLUB/status/1781678522039153130">
                Read more
              </a>
            </div>
            <div className={styles.updateCard}>
              <div aria-hidden="true" className={styles.updateCardImage}>
                <Image src={kbinetImage} alt=""/>
              </div>
              <h3>THE KBINET RELEASE</h3>
              <p>
                The KB KLUB is pleased to announce the release of our newsletter for the
                first quarter of the year. This issue of the KBINET features articles on
                the launch of the KB Multipurpose Kourt.
              </p>
              <a href="https://twitter.com/KBKLUB/status/1781678522039153130">
                Read more
              </a>
            </div>
            <div className={styles.updateCard}>
              <div aria-hidden="true" className={styles.updateCardImage}>
                <Image src={kbinetImage} alt=""/>
              </div>
              <h3>THE KBINET RELEASE</h3>
              <p>
                The KB KLUB is pleased to announce the release of our newsletter for the
                first quarter of the year. This issue of the KBINET features articles on
                the launch of the KB Multipurpose Kourt.
              </p>
              <a href="https://twitter.com/KBKLUB/status/1781678522039153130">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
      <main className={styles.armsLayout}>
        <div className={styles.armsContainer}>
          <h2>Arms of the Klub</h2>

          <article className={styles.armCard}>
            <div aria-hidden="true" className={styles.armCardImage}>
              <Image src={copaImage} alt="" />
            </div>

            <div className={styles.armCardDetails}>
              <h3>Committee on Philanthropic Activities (COPA)</h3>
              <p>
                The Committee On Philanthropic Activities is that arm tasked with organizing
                the philanthropic events of the KLUB. For 54 years, the KB KLUB has prided
                herself in being a part of groundbreaking efforts towards putting smiles on
                thousands of faces. Examples of such events include: Medical outreaches
                focused on several aspects of healthcare in a bid to educate and screen
                the populace on risk factors (General medical and Dental outreaches;
                Breast and Cervical cancer screening; Eye test screenings; etc),
                donations of items to orphanages and care facilities for the vulnerable
                and lots more.
              </p>
              <Link href="/arms/philanthropy">
                See more about COPA
                <FaArrowRight />
              </Link>
            </div>
          </article>
          <article className={styles.armCard}>
            <div aria-hidden="true" className={styles.armCardImage}>
              <Image src={copaImage} alt="" />
            </div>

            <div className={styles.armCardDetails}>
              <h3>Committee on Philanthropic Activities (COPA)</h3>
              <p>
                The Committee On Philanthropic Activities is that arm tasked with organizing
                the philanthropic events of the KLUB. For 54 years, the KB KLUB has prided
                herself in being a part of groundbreaking efforts towards putting smiles on
                thousands of faces. Examples of such events include: Medical outreaches
                focused on several aspects of healthcare in a bid to educate and screen
                the populace on risk factors (General medical and Dental outreaches;
                Breast and Cervical cancer screening; Eye test screenings; etc),
                donations of items to orphanages and care facilities for the vulnerable
                and lots more.
              </p>
              <Link href="/arms/philanthropy">
                See more about COPA
                <FaArrowRight />
              </Link>
            </div>
          </article>
          <article className={styles.armCard}>
            <div aria-hidden="true" className={styles.armCardImage}>
              <Image src={copaImage} alt="" />
            </div>

            <div className={styles.armCardDetails}>
              <h3>Committee on Philanthropic Activities (COPA)</h3>
              <p>
                The Committee On Philanthropic Activities is that arm tasked with organizing
                the philanthropic events of the KLUB. For 54 years, the KB KLUB has prided
                herself in being a part of groundbreaking efforts towards putting smiles on
                thousands of faces. Examples of such events include: Medical outreaches
                focused on several aspects of healthcare in a bid to educate and screen
                the populace on risk factors (General medical and Dental outreaches;
                Breast and Cervical cancer screening; Eye test screenings; etc),
                donations of items to orphanages and care facilities for the vulnerable
                and lots more.
              </p>
              <Link href="/arms/philanthropy">
                See more about COPA
                <FaArrowRight />
              </Link>
            </div>
          </article>
          <article className={styles.armCard}>
            <div aria-hidden="true" className={styles.armCardImage}>
              <Image src={copaImage} alt="" />
            </div>

            <div className={styles.armCardDetails}>
              <h3>Committee on Philanthropic Activities (COPA)</h3>
              <p>
                The Committee On Philanthropic Activities is that arm tasked with organizing
                the philanthropic events of the KLUB. For 54 years, the KB KLUB has prided
                herself in being a part of groundbreaking efforts towards putting smiles on
                thousands of faces. Examples of such events include: Medical outreaches
                focused on several aspects of healthcare in a bid to educate and screen
                the populace on risk factors (General medical and Dental outreaches;
                Breast and Cervical cancer screening; Eye test screenings; etc),
                donations of items to orphanages and care facilities for the vulnerable
                and lots more.
              </p>
              <Link href="/arms/philanthropy">
                See more about COPA
                <FaArrowRight />
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
