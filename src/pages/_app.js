import "@/styles/globals.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { DM_Sans, Source_Sans_Pro } from "next/font/google";
import { useEffect } from "react";

const dm_Sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-DM_Sans",
});

const source_Sans_Pro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-Source_Sans_Pro",
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <main
      className={`${source_Sans_Pro.variable} font-sans ${dm_Sans.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
