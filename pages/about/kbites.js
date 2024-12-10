import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";

const pageSeo = {
  title: "Executives and Kbites • Kb Klub",
  description: "The KB Klub is led by a dynamic team of dedicated medical students who are committed to making a positive impact on the world. Meet the seven Executives of the Klub and the roles in which they serve to advance our efforts in philanthropy, academics and social empowerment."
}

const Kbites = () => {
  return (
    <>
      <SEO pageDetails={pageSeo}/>
      <NavBar />
      <main style={{ padding: "40vh 0" }}>
        <h1>This is the Kbites Section</h1>
      </main>
    </>
  );
}

export default Kbites;