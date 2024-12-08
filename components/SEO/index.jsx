import Head from "next/head";
import { useRouter } from "next/router";

const defaultDetails = {
  title: "The KB Klub",
  description: "The exclusive and foremost socio-philanthropic organization of male medical students in the College of Medicine University of Lagos",
}

const SEO = ({ pageDetails }) => {

  let router = useRouter();

  let url = `https://kbklub.org${router.asPath}`;

  let seoDetails = {
    ...defaultDetails,
    ...pageDetails,
    url: url,
  }


  return (
    <>
      <Head>
        <title>{seoDetails.title}</title>
        <meta name="description" content={seoDetails.description} />

        <meta property="og:title" content={seoDetails.title} />
        <meta property="og:description" content={seoDetails.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoDetails.url} />
        <meta property="og:image" content="https://kbklub.org/images/seoImage.jpeg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="The KB Klub" />
        <meta property="og:image:width" content="680" />
        <meta property="og:image:height" content="674" />

        <meta name="twitter:title" content={seoDetails.title} />
        <meta name="twitter:description" content={seoDetails.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={seoDetails.url} />
        <meta name="twitter:image" content="https://kbklub.org/images/seoImage.jpeg" />
        <meta name="twitter:image:type" content="image/jpeg" />
        <meta name="twitter:image:alt" content="The KB Klub" />
        <meta name="twitter:image:width" content="680" />
        <meta name="twitter:image:height" content="674" />
        <meta name="twitter:site" content="@KBKLUB" />  
      </Head>
    </>
  );
}

export default SEO;