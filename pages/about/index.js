import NavBar from "@/components/NavBar";
import PreloadBackground from "@/components/PreloadBackground";
import SEO from "@/components/SEO";
import styles from "@/styles/AboutKlub.module.css";
import { useRef, useState } from "react";

const pageSeo = {
  title: "About • KB Klub",
  description: "The exclusive and foremost socio-philanthropic group for male medical students at the University of Lagos' College of Medicine is called the KB Klub. Seven medical students founded the KB KLUB in 1969 led by Professor Oladapo Ashiru, OFR who served as the first Keebite and President of the KB Klub. The KB Klub has a rich history of empowering future medical leaders."
}

const AboutUs = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef(null);

  const testimonials = [
    {
      quote: "I can confidently say I am a better man and a unique addition to the society because of the KB Klub.",
      author: "Saliu Sodiq, BDS"
    },
    {
      quote: "Joining the KB Klub has been a massive blessing to me because I've been exposed to an unimaginable extent of brotherly love.",
      author: "Adebanjo Toluwalase, MBBS"
    },
    {
      quote: "Over the years, I have learnt the true meaning of discipline, brotherhood, sacrifice, generosity, love and hard work.",
      author: "Alli Toluwani, MLS"
    },
    {
      quote: "The principles, lessons, network, innovation, social privileges and philanthropy have given me much more values than is required of a regular medical student.",
      author: "Aluko Busayo, MBBS"
    },
    {
      quote: "Without the KB Klub, I wouldn't be the gentleman I am today.",
      author: "Salau Opeyemi, MBBS"
    },
  ]

  const scrollToIndex = (index) => {
    if (testimonialRef.current) {
      const cardWidth = testimonialRef.current.children[0].offsetWidth;
      const gap = cardWidth + 70;
      testimonialRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const getVisibleSlides = () => {
    if (testimonialRef.current) {
      const containerWidth = testimonialRef.current.offsetWidth;
      const cardWidth = testimonialRef.current.children[0].offsetWidth;
      return Math.floor(containerWidth / cardWidth);
    }
    return 3;
  };

  const totalSlides = Math.ceil(testimonials.length / getVisibleSlides());

  return (
    <>
      <SEO pageDetails={pageSeo}/>
      <PreloadBackground imagePath="/images/kbKlubBackgroundGraphicMobile.webp"/>
      <PreloadBackground imagePath="/images/kbKlubBackgroundGraphicLarge.webp"/>
      <NavBar white/>
      <header className={styles.headerLayout}>
        <main className={styles.headerContainer}>
          <h1>KB KLUB; The Exclusive and Philanthropic Medical Students Club</h1>
          <div className={styles.headerDetailsContainer}>
            <div className={styles.headerDetails}>
              <p>
                The KB Klub is the exclusive and foremost socio-philanthropic organization
                of male medical students in the College of Medicine University of Lagos.
                The KB KLUB was founded in the year 1969 by a group of 7 medical students,
                including Dr. Abiodun Osinubi, Dr. Yomi Phillips, Dr. Femi Adegoke,
                Dr. Wole Fajembola, Dr. Timi Alabi and Dr. Akinbo; headed by renowned
                reproductive endocrinologist, Professor Oladapo Ashiru, OFR being the first
                Keebite/President of the KB Klub.
              </p>
              <p>
                The KB Klub stands on a tripod of <b>philanthropy, academic excellence and
                  social empowerment.</b> The Klub was established on the foundations of
                Philanthropy, which we do always, happily and wholeheartedly. Academic
                excellence given that we are medical students who aim to create sustainable
                impact across borders. Social empowerment, because over the 54 years of
                our existence, we have striven towards one goal - to contribute and be a
                part of a wholesome society we would be proud to call ours.
              </p>
            </div>
            <div className={styles.headerDetails}>
              <p>The KB Klub has since grown to become a prestigious organization that
                focuses on academic excellence, leadership development, and community
                service. The Klub has produced several notable alumni who have made
                significant contributions in their respective fields. The KB Klub also
                organizes various events and initiatives aimed at promoting health,
                education, and social welfare within the community.
              </p>
              <p>
                <b>TOGETHERNESS IN BROTHERHOOD</b> with the Latin translation being “<b>Congregato</b>”,
                serves as the watchword and motto of the KB Klub. We promote brotherhood
                amongst our members while extending the same love towards our immediate
                surroundings.
              </p>
            </div>
          </div>
        </main>
      </header>
      <section className={styles.videoLayout}>
        <div className={styles.videoContainer}>
          <iframe width="100%" height="360px" src="https://www.youtube.com/embed/9XEIuhHxC8U?si=qcC2rXxCZR911cYd"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
        </div>
      </section>
      <section className={styles.alumniLayout}>
        <div className={styles.alumniContainer}>
          <h2>Words from our Alumni</h2>
          <div className={styles.testimonialContainer} ref={testimonialRef}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <p>{testimonial.quote}</p>
                <p>{testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className={styles.testimonialControlContainer}>
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`${styles.testimonialControlButton} ${activeIndex === index ? styles.active : ''
                  }`}
                aria-label={`Click to see testimonial set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;