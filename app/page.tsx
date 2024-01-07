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
      <CanvasWrapper />
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

{
  /* <PlayProvider>
<div className="LastOne relative z-40 bg-yellow-500 text-[30px] text-red-700 pointerRR">
  dfd sdfoisjo ifjsdoif jdsoifjodsjoidjosdfjd iosjgo dfgj ofgjdofgjoj
  sadsd sadsd sadsd sadsd sadsd dfd sdfoisjo ifjsdoif
  jdsoifjodsjoidjosdfjd iosjgo dfgj ofgjdofgjoj sadsd sadsd sadsd sadsd
  sadsd dfd sdfoisjo ifjsdoif jdsoifjodsjoidjosdfjd iosjgo dfgj
  ofgjdofgjoj sadsd sadsd sadsd sadsd sadsd dfd sdfoisjo ifjsdoif
  jdsoifjodsjoidjosdfjd iosjgo dfgj ofgjdofgjoj sadsd sadsd sadsd sadsd
  sadsd dfd sdfoisjo ifjsdoif jdsoifjodsjoidjosdfjd iosjgo dfgj
  ofgjdofgjoj sadsd sadsd sadsd sadsd sadsd dfd sdfoisjo ifjsdoif
  jdsoifjodsjoidjosdfjd iosjgo dfgj ofgjdofgjoj sadsd sadsd sadsd sadsd
  sadsd dfd sdfoisjo ifjsdoif jdsoifjodsjoidjosdfjd iosjgo dfgj
  ofgjdofgjoj sadsd sadsd sadsd sadsd sadsd
  <button onClick={trial}>canvas page</button>
  <div className="Top fixed inset-0 text-green-800">
    <div
      className={`overflow-auto bg-gray-500 h-full w-full ${
        canvasVisible ? "block" : "hidden"
      }`}
    >
      asdasdiofjsoafjkosd opkpsadkf{" "}
      <button
        onClick={toggleCanvasVisibility}
        className="bg-black text-whi"
      >
        canvas page
      </button>
    </div>
  </div>
</div>
</PlayProvider> */
}
