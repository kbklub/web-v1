import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";

const pageSeo = {
  title: "COPA • Kb Klub",
  description: "Discover the impactful work of the Committee on Philanthropic Activities at KB KLUB. For over 55 years, we've been organizing vital medical interventions and donations to improve lives. From cancer screenings to mental health awareness and blood donation drives, we're committed to making a positive impact."
}

const COPA = () => {
  return (
    <>
      <SEO pageDetails={pageSeo}/>
      <NavBar />
      <main style={{ padding: "40vh 0" }}>
        <h1>This is the COPA Arm section</h1>
      </main>
    </>
  );
}

export default COPA;