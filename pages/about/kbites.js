import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import { FaSearch } from "react-icons/fa";

const pageSeo = {
  title: "Executives and Kbites • KB Klub",
  description: "The KB Klub is led by a dynamic team of dedicated medical students who are committed to making a positive impact on the world. Meet the seven Executives of the Klub and the roles in which they serve to advance our efforts in philanthropy, academics and social empowerment."
}

const Kbites = () => {
  return (
    <>
      <SEO pageDetails={pageSeo}/>
      <NavBar />
      {/* <main>
        <div>
          <h1>Meet the Executives and the Kbites</h1>
          <form>
            <div><FaSearch /></div>
            <input type="text" placeholder="Enter a name to search"/>
            <button type="submit">Search</button>
          </form>
        </div>
        <div>
          <div>
            <h2>The Executives</h2>
            <div>

            </div>
          </div>
          <div>
            <h2>The Kbites</h2>
            <div>
              
            </div>
          </div>
        </div>
      </main> */}
    </>
  );
}

export default Kbites;