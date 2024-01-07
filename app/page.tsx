"use client";
import React, { useState } from "react";
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

export default function Home() {
  const [landingVisible, setlandingVisible] = useState(true);
  const [canvasVisible, setcanvasVisible] = useState(true);
  // const [landingVisible, setlandingVisible] = useState(true);

  const toggleLandingVisibility = () => {
    setlandingVisible((prevVisibility) => !prevVisibility);
  };
  const toggleCanvasVisibility = () => {
    setcanvasVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <PlayProvider>
      {/* <CanvasWrapper /> */}
      {/* <GoogleAnim /> */}
      <AmiesoComponent />
    </PlayProvider>

    // <div className="p-2 w-[800px] h-[800px] bg-red-600">
    //   <div className="h-full w-full overflow-auto">
    //     <GoogleAnim />
    //   </div>
    // </div>
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
