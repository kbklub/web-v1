import styles from "./SupportInitiative.module.css";

import Image from "next/image";
import carouselImage1 from "../../assets/images/blood_donation.jpeg";
import carouselImage2 from "../../assets/images/dental_outreach.png";
import carouselImage3 from "../../assets/images/food_drive_1.png";
import carouselImage4 from "../../assets/images/kb_avance_launch.jpeg";
import carouselImage5 from "../../assets/images/school_group_picture.png";
import carouselImage6 from "../../assets/images/school_special_children.png";
import carouselImage7 from "../../assets/images/stack_panelist.jpeg";
import Link from "next/link";

const topCarouselImages = [carouselImage1, carouselImage2, carouselImage3];
const bottomCarouselImage = [carouselImage4, carouselImage6, carouselImage7];

const SupportInitiative = () => {
  return (
    <section className={styles.supportLayout}>
      <div className={styles.carouselContainer}>
        {topCarouselImages.map((image, index) => (
          <div aria-hidden="true" className={styles.carouselImage} key={index}><Image src={image} alt=""/></div>
        ))}
      </div>
      <div className={styles.supportDetails}>
        <h2>Support Our Initiatives</h2>
        <p>
          Our impactful philanthropy, social excellence, and academic excellence projects
          thrive with the generous support and partnership from individuals, companies,
          and organizations. Join hands with us to make a difference.
        </p>
        <Link href="/support-us"><button>Partner with us</button></Link>
      </div>
      <div className={styles.carouselContainer}>
        {bottomCarouselImage.map((image, index) => (
          <div aria-hidden="true" className={styles.carouselImage} key={index}><Image src={image} alt=""/></div>
        ))}
      </div>
    </section>
  );
}
 
export default SupportInitiative;