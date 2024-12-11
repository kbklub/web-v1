import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";

const pageSeo = {
  title: "Life Kbites • KB Klub",
  description: "The KB Klub offers a lifelong membership, the Klub boasts itself of a rich alumni making strides in all cadres of society. Our alumni, addressed as the Life Kbites, are distinguished leaders shaping society. Over the years, the KB Klub has moulded some of the most distinguished men in society, Find their names on this page."
}

const LifeKbites = () => {
  return (
    <>
      <SEO pageDetails={pageSeo}/>
      <NavBar />
      <main style={{ padding: "40vh 0" }}>
        <h1>This is the LifeKbites section</h1>
      </main>
    </>
  );
}

export default LifeKbites;