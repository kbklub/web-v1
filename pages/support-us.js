import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import styles from "@/styles/SupportUs.module.css";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const pageSeo = {
  title: "Support Us • KB Klub",
  description: "Join us in making a difference! Donate to KB KLUB today to support our philanthropic, academic, and social initiatives. Your contribution will help us continue to empower communities and create a positive impact. Partner with us on our projects to leave a lasting legacy."
}

const SupportUs = () => {

  const [supportName, setSupportName] = useState("");
  const [supportEmail, setSupportEmail] = useState("");
  const [supportMessage, setSupportMessage] = useState("");

  return (
    <>
      <SEO pageDetails={pageSeo}/>
      <div className={styles.bgWrapper}>
        <header className={styles.headerLayout}>
          <NavBar />
          <div className={styles.headerContainer}>
            <h1>Join Us in Making a Difference</h1>
            <div className={styles.headerDetails}>
              <p>
                Our impactful philanthropy, social excellence, and academic excellence
                projects thrive with the generous support and partnership from individuals,
                companies, and organizations. Whether you&apos;re an individual, organization,
                or company looking to support our mission or partner with us for impactful
                events, we&apos;re here to collaborate. 
              </p>
              <p>
                You can choose to support us by directly donating to our account or reach out
                by filling the form on this page to know more about our partnership and event
                proposals.
              </p>
            </div>
          </div>
        </header>
        <main className={styles.supportLayout}>
          <div className={styles.supportContainer}>
            <div className={styles.accountContainer}>
              <h2>Our Account Details:</h2>
              <div className={styles.accountDetails}>
                <p><b>Account Name:</b> KB Klub</p>
                <p><b>Account Number:</b> 0014324124</p>
                <p><b>Bank Name:</b> Guaranty Trust Bank (GTB)</p>
              </div>
            </div>

            <form 
              className={styles.supportFormLayout}
              method="POST" action="https://formsubmit.co/2e4936a9576cc1f6b8f408e29ab94702"
            >
              <div className={styles.supportFormContainer}>
                <div className={styles.supportInput}>
                  <label htmlFor="supportName">Name:</label>
                  <input
                    type="text" id="supportName" name="name" required
                    placeholder="Name of Organization, Company, Brand etc"
                    value={supportName} onChange={(e) => setSupportName(e.target.value)}
                  />
                </div>
                <div className={styles.supportInput}>
                  <label htmlFor="supportEmail">Email Address:</label>
                  <input
                    type="email" id="supportEmail" name="email" required
                    placeholder="Email address of Organization, Company, Brand etc"
                    value={supportEmail} onChange={(e) => setSupportEmail(e.target.value)}
                  />
                </div>
                <div className={styles.supportTextArea}>
                  <label htmlFor="supportMessage">Message/Description:</label>
                  <textarea
                    id="supportMessage" name="message" required
                    placeholder="E.g We will like to partner with the Klub on abcd event and we will like to receive the proposal for the event."
                    value={supportMessage} onChange={(e) => setSupportMessage(e.target.value)}
                  >
                  </textarea>
                </div>
                <div aria-hidden="true">
                  <input type="hidden" name="_subject" value="Message from Contact Form on KB Website" />
                  <input type="hidden" name="_autoresponse"
                    value="Your message has been delivered to the KB Klub team. We will get back to you as soon as possible. Thank you for reaching out to us." 
                  />
                  <input type="hidden" name="_next" value="https://kbklub.org/support-us/" />
                  <input type="hidden" name="_template" value="box" />
                </div>
                <button type="submit">
                  Submit
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default SupportUs;