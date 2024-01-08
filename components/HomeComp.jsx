"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import Landing from "../components/Landing";
import MovingHeadingAbout from "../components/MovingHeadingAbout";
import Projects from "../components/Projects";
import Description from "../components/Description";
import DescriptionCopy from "../components/DescriptionCopy";
import Description1 from "../components/Description1";
import Description2 from "../components/Description2";
import Description3 from "../components/Description3";
import Description4 from "../components/Description4";
// import Description5 from "../components/Description5";
import SlidingImages from "../components/SlidingImages";
import Contact from "../components/Contact";
import styles from "./page.module.scss";

export default function HomeComp() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {/* <div className="overflow-auto"> */}
      <MovingHeadingAbout />
      {/* </div> */}
      {/* <Landing /> */}

      <Description />
      <DescriptionCopy />
      <Description1 />
      <Description2 />
      <Description3 />
      <Description4 />

      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  );
}
