"use client";
import React, { useEffect, useState } from "react";
import { PlayProvider } from "./(contexts)/Play";
import { CanvasWrapper } from "./(components)/CanvasWrapper";
import { Header } from "./(components)/Header";
import { Pages } from "./(components)/Pages";
import { Contact } from "./(components)/Pages/Contact";
import { Preview } from "./(components)/Preview";
import GoogleAnim from "./(components)/GoogleAnim";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import "./firstStyle.css";
import AmiesoComponent from "./(amieSO)/AmiesoComponent";
import { AnimatePresence } from "framer-motion";
import TopPreloader from "@/components/TopPreloader";

export default function Home() {
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
    <PlayProvider>
      <AnimatePresence mode="wait">
        {isLoading && <TopPreloader />}
      </AnimatePresence>
      <CanvasWrapper />
      {/* <GoogleAnim /> */}
      {/* <AmiesoComponent /> */}
    </PlayProvider>
  );
}

{
}

// <PlayProvider>
// {/* <Header /> */}
// {/* <Pages /> */}
// {/* <Contact /> */}
// {/* <Preview /> */}
// <CanvasWrapper />
// </PlayProvider>

/* --- */
