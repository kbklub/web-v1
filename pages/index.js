import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import Head from "next/head";
import Image from "next/image";

const homepageMetadata = {
  title: "The KB Klub",
  description: "",
}


export default function Home() {
  return (
    <>
      <SEO />
      <NavBar />
      <main style={{padding: "40vh 0"}}>
        <h1>This is the HomePage</h1>
      </main>
    </>
  );
}
