import Head from "next/head";

const PreloadBackground = ({imagePath, width}) => {
  return (
    <Head>
      <link 
        rel="preload" href={imagePath} as="image" type="image/webp"
        media={width ? width : ""}
      />
    </Head>
  );
}
 
export default PreloadBackground;