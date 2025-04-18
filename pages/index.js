import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import styles from "@/styles/Homepage.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import copaImage from "../assets/images/copaDisplayImage.jpeg";
import coaaImage from "../assets/images/coaaDisplayImage.jpeg";
import cosaImage from "../assets/images/cosaDisplayImage.jpeg";
import editorialImage from "../assets/images/editorialDisplayImage.png";
import updatesCarouselBg from "../assets/images/updateBackgroundGraphic.png";
import { sortObjectArraysByDate } from "@/utils/sortEvents";
import events from "@/data/events";
import updatesData from "@/data/updates";
import { useEffect, useState } from "react";
import PreloadBackground from "@/components/PreloadBackground";

const pageSeo = {
  description: "The KB Klub is an exclusive socio-philanthropic club of male medical students in the College of Medicine, University of Lagos which carries out philanthropic, academic and social empowerment projects. Contribute to our impactful initiatives and make a difference."
}

const upcomingEvents = sortObjectArraysByDate(events).upcoming;
const headlines = [
  "Transforming Lives through Service",
  "A Brotherhood, United for Impact",
  "55 Years of Excellence and Impact"
]

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
        setIsVisible(true);
      }, 500);

    }, 5000);

    return () => clearInterval(rotationInterval);
  }, [])

  return (
    <>
      <SEO pageDetails={pageSeo} />
      <PreloadBackground imagePath="/images/homeHeaderPictureLarge.webp" width="(min-width: 900px)"/>
      <PreloadBackground imagePath="/images/homeHeaderPictureMobile.webp" width="(max-width: 899px)"/>
      <header className={styles.headerLayout}>
        <NavBar />
        <div className={styles.headerContainer}>
          <h1 className={`${styles.rotatingHeader} ${isVisible ? styles.fadeIn : styles.fadeOut}`}>
            {headlines[currentIndex]}
          </h1>
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
          <div className={styles.eventsContainerHeader}>
            <h2>Upcoming Events</h2>
            <Link href="/events" className={styles.eventLinkLarge}>
              View all Events
              <FaArrowRight />
            </Link>
          </div>
          {!upcomingEvents.length ? (<p className={styles.noEventText}>
            No Upcoming Events for Now. Check back soon for updates!
          </p>) : ""}
          {upcomingEvents.length ? (
            <>
              {upcomingEvents.map((ev, index) => (
                <div className={styles.eventCard} key={index}>
                  <div className={styles.eventCardContainer}>
                    <div className={styles.eventCardImage}>
                      <Image src={ev.image} alt="A graphic poster describing the event" />
                    </div>
                    <div className={styles.eventCardDetails}>
                      <h3>{ev.name}</h3>
                      <p>{ev.description}</p>
                      <div className={styles.eventCardBtnContainer}>
                        <a href={ev.link} aria-label={`Read more about ${ev.name}`}>
                          Read More
                        </a>
                        <a href={ev.registrationLink}>
                          Click here to Register
                          <FaArrowRight />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : ""}
          <Link href="/events"  className={styles.eventLinkMobile}>
            View all Events
          </Link>
        </div>
      </section>
      {updatesData ?
        (<section className={styles.updatesLayout}>
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
              </div>
            </div>
            <div className={styles.updatesCarouselContainer}>
              {updatesData.map((update, index) => (
                <div className={styles.updateCard} key={index}>
                  <div aria-hidden="true" className={styles.updateCardImage}>
                    <Image src={update.image} alt="" />
                  </div>
                  <h3>{update.title}</h3>
                  <p>{update.description}</p>
                  <a href={update.link} aria-label={`Read more about ${update.title}`}>
                    Read more
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>) : ""
      }
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
                The Committee On Philanthropic Activities is the arm tasked with organizing
                the philanthropic events of the KLUB. For 55 years, the KB KLUB has prided
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
              <Image src={coaaImage} alt="" />
            </div>

            <div className={styles.armCardDetails}>
              <h3>Committee on Academic Activities (COAA)</h3>
              <p>
                The Committee on Academic Activities (COAA) is the brainchild of the KB KLUB,
                dedicated to nurturing academic excellence and intellectual growth among
                its members and the community around us. Key COAA Initiatives include KB
                KLUB Stack Reform Conference and KB KLUB Fellowship Program. Through these
                initiatives, we foster innovation, collaboration, and skill development
                for a brighter future.
              </p>
              <Link href="/arms/academic-excellence">
                See more about COAA
                <FaArrowRight />
              </Link>
            </div>
          </article>
          <article className={styles.armCard}>
            <div aria-hidden="true" className={styles.armCardImage}>
              <Image src={cosaImage} alt="" />
            </div>

            <div className={styles.armCardDetails}>
              <h3>Committee on Social Activities (COSA)</h3>
              <p>
                Social Empowerment is one of the tripods which the Klub stands on. Since
                her inception, the KB Klub has achieved social empowerment amongst her
                members and the society at large.
                One of the key projects the KB Klub has empowered the society was through
                the KB Kup: King of the Kourt Tournament which was birthed in 2020 to bring
                individuals from all over to participate in an elite sports tournament in
                various sports. The end goal of this tournament was to put smiles on faces,
                which the KB Klub has done for over 50 years.
              </p>
              <Link href="/arms/social-empowerment">
                See more about COSA
                <FaArrowRight />
              </Link>
            </div>
          </article>
          <article className={styles.armCard}>
            <div aria-hidden="true" className={styles.armCardImage}>
              <Image src={editorialImage} alt="" />
            </div>

            <div className={styles.armCardDetails}>
              <h3>The KB Editorial Board</h3>
              <p>
                The KB Klub&apos;s Editorial Board is the arm of the klub responsible for its
                publications. This committee oversees all publishing endeavors, including the
                klub&apos;s flagship annual magazine, MediPhil. MediPhil showcases
                thought-provoking articles, insightful reports, and engaging interviews
                with prominent figures in medicine and philanthropy - a fitting combination
                reflected in the magazine&apos;s very name. The Editorial Board takes
                pride in producing this piece.
              </p>
              <Link href="/editorial">
                Go to KB Editorial Page
                <FaArrowRight />
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
