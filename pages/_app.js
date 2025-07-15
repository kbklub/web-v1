import BottomLayout from "@/layout/BottomLayout";
import "@/styles/globals.css";
import { Yeseva_One, Lato } from "next/font/google";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

const yeseva_one = Yeseva_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${lato.style.fontFamily};
        }
        h1, h2 {
          font-family: ${yeseva_one.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content='Sodiq "Ade" Sanusi' />
        <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
      <BottomLayout />
      <GoogleAnalytics gaId="G-ER788RGMW3"/>
    </>
  );
}
