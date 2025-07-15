import { useState } from "react";
import styles from "./NewsletterSignup.module.css";

const NewsLetterSignup = () => {

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Submission Failed");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
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
            disabled={status === "loading"}
          />
          <button 
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {status === "success" ? (
          <p className={styles.successMessage}>Thank you for subscribing!</p>
        ) : ""}
        {status === "error" ? (
          <p className={styles.errorMessage}>Failed to subscribe. Please try again.</p>
        ) : ""}
      </div>
    </section>
  );
}
 
export default NewsLetterSignup;