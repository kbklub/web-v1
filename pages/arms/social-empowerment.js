import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";

const pageSeo = {
  title: "COSA • Kb Klub",
  description: "KB KLUB has been empowering individuals and communities for over 55 years. Learn about the events of our Committee on Social Activities, including the exciting KB Kup: King of the Kourt Tournament. Join us in our mission to inspire and uplift through sports and community engagement."
}

const COSA = () => {
  return (
    <>
      <SEO pageDetails={pageSeo}/>
      <NavBar />
      <main style={{ padding: "40vh 0" }}>
        <h1>This is the COSA Arm section</h1>
      </main>
    </>
  );
}

export default COSA;