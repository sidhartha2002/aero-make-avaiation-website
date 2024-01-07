"use client";
import React, { useState } from "react";
import AmiesoComponent from "../(amieSO)/AmiesoComponent";

export default function SectionHome() {
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
    <div>
      <AmiesoComponent />
    </div>
  );
}
