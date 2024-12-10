import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";

const pageSeo = {
  title: "COAA • Kb Klub",
  description: "Discover how the Committee of Academic Activities (COAA) of KB KLUB is driving academic excellence and innovation in Nigeria. Learn about the impactful STACK Reform Conference and the transformative KB KLUB Fellowship Program, designed to equip students with the skills and connections to succeed in healthcare and technology."
}

const COAA = () => {
  return (
    <>
      <SEO pageDetails={pageSeo}/>
      <NavBar />
      <main style={{ padding: "40vh 0" }}>
        <h1>This is the COAA Arm section</h1>
      </main>
    </>
  );
}

export default COAA;