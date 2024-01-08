import { useProgress } from "@react-three/drei";
import { usePlay } from "../(contexts)/Play";
const logo = "/images/logo.svg";
import GoogleAnim from "./GoogleAnim";

// import Spline from "@splinetool/react-spline";
import GlowButton from "./GlowButton";

import lottie from "lottie-web";
const animationData = "/lotties/arrowAnim.json"; // /lotties/arrowAnim.json
import { createRef, useEffect } from "react";

import { lazy, Suspense } from "react";
import AmiesoComponent from "../(amieSO)/AmiesoComponent";
import { div } from "three/examples/jsm/nodes/Nodes.js";
const Spline = lazy(() => import("@splinetool/react-spline"));

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={` ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      {progress === 100 && (
        <div
          className={`intro block overflow-hidden ${
            play ? "intro--disappear" : ""
          } ${end ? "intro--none" : ""}`}
        >
          {/* Explore button */}
          {/* <div className="bg-red-400 absolute bottom-10 block"> */}
          <div className="">
            <div className=" absolute top-24 z-50 w-full">
              <div className="flex justify-center text-center text-4xl lg:text-6xl font-bold flex-col gap-5">
                <h1>Unleashing Precise</h1>
                <h1>Aftermarket Solutions</h1>
                <img
                  src={logo} // Replace with the path to your image
                  alt="Description of the image" // Replace with a descriptive alt text
                  width="100" // Specify the width if needed
                  height="100" // Specify the height if needed
                />
                {/* <GlowButton /> */}
              </div>
            </div>
          </div>
          {/*  */}
          <div className="home-glow-button absolute bottom-28 z-50 w-full">
            <div className="flex justify-center text-center text-4xl lg:text-6xl font-bold">
              <div className="arrow-lottie h-24 w-24 lg:h-36 lg:w-36 mb-5 ml-64">
                <ArrowLottie />
              </div>
            </div>
            <div className="flex justify-center text-center text-4xl lg:text-6xl font-bold">
              <a
                href="#"
                onClick={() => {
                  setPlay(true);
                }}
              >
                <button class="glow-button">
                  <span>Explore</span>
                </button>
              </a>
            </div>
          </div>
          {/*  */}
          {/*  */}{" "}
          <div className="bg-blue-400  h-full w-full overflow-auto">
            <SplineAirplane />
          </div>
          {/*  */}
          {/* <p className="intro__scroll">Scroll to explore</p> */}
        </div>
      )}
      <div className={` outro ${end ? "outro--appear" : ""}`}>
        {/* <div className="h-full w-full overflow-auto"> */}

        {/* <GoogleAnim /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

// https://docs.spline.design/67b4c8ec0d2b46dd8588a99a7e94db6e
// <spline-viewer> is much better : https://www.youtube.com/watch?v=c5sJEddepgQ
// https://stackoverflow.com/questions/76239974/accurate-loading-screen-react-spline
function SplineAirplane() {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <Spline scene="https://prod.spline.design/in9tVhVQI0AHAtzQ/scene.splinecode" />
    </Suspense>
  );
}

function ArrowLottie() {
  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      // initialSegment: [2, 125],
      path: animationData,
      // animationData,
    });
    setTimeout(() => {
      anim.play();
    }, 3500);
    return () => anim.destroy();
    // const anim = lottie.loadAnimation({
    //   container: animationContainer.current,
    //   renderer: "svg",
    //   loop: false,
    //   autoplay: true,
    //   // initialSegment: [2, 125],
    //   path: animationData,
    //   // animationData,
    // });

    // return () => anim.destroy();
  }, []);

  return <div ref={animationContainer}></div>;
}

function Loading() {
  return (
    <div className="bg-yellow-400 h-full w-full text-6xl text-red-700">
      <h1>Loading................</h1>
      {/* <h1>Loading................</h1>
      <h1>Loading................</h1>
      <h1>Loading................</h1> */}
    </div>
  );
}
