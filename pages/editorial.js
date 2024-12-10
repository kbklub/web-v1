import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";

const pageSeo = {
  title: "Editorial • Kb Klub",
  description: "Explore the world of the KB Klub through our periodic newsletters which inform you of our activities and our annual magazine, MediPhil, which features leading personalities in Medicine and Philanthropy as well as other enlightening and thought-provoking articles."
}

const Editorial = () => {
  return (
    <>
      <SEO pageDetails={pageSeo}/>
      <NavBar />
      <main style={{ padding: "40vh 0" }}>
        <h1>This is the Editorial section</h1>
      </main>
    </>
  );
}

export default Editorial;