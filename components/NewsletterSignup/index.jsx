import { useState } from "react";
import styles from "./NewsletterSignup.module.css";

const NewsLetterSignup = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("email submitted")
  }


  return (
    <section className={styles.newsletterLayout}>
      <div className={styles.newsletterContainer}>
        <h2>Stay Updated with our Newsletters</h2>
        <p>
          Keep up with the latest news, projects, and events by subscribing to our newsletter.
          Be the first to know about our initiatives and how you can get involved in
          making a positive impact in our community.
        </p>
        <form
          className={styles.newsletterForm} onSubmit={e => handleSubmit(e)}
        >
          <input 
            type="email" required name="mailList"
            id="mailList" placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
 
export default NewsLetterSignup;