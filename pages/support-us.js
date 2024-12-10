import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";

const pageSeo = {
  title: "Support Us • Kb Klub",
  description: "Join us in making a difference! Donate to KB KLUB today to support our philanthropic, academic, and social initiatives. Your contribution will help us continue to empower communities and create a positive impact. Partner with us on our projects to leave a lasting legacy."
}

const SupportUs = () => {
  return (
    <>
      <SEO pageDetails={pageSeo}/>
      <NavBar />
      <main style={{ padding: "40vh 0" }}>
        <h1>This is the Support section</h1>
      </main>
    </>
  );
}

export default SupportUs;