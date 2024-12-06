import BottomLayout from "@/layout/BottomLayout";
import "@/styles/globals.css";
import { Yeseva_One, Lato } from "next/font/google";

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
      <Component {...pageProps} />
      <BottomLayout />
    </>
  );
}
