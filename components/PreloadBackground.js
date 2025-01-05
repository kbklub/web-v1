import Head from "next/head";

const PreloadBackground = ({imagePath}) => {
  return (
    <Head>
      <link rel="preload" href={imagePath} as="image" type="image/webp"/>
    </Head>
  );
}
 
export default PreloadBackground;