import { usePlay } from "../(contexts)/Play.jsx";
import { Canvas } from "@react-three/fiber";
import Triangle from "./Triangle.jsx";
import { ScrollControls } from "@react-three/drei";
import { Experience } from "./Experience.jsx";
import { Overlay } from "./Overlay.jsx";
import { useMemo } from "react";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import GoogleAnim from "./GoogleAnim";

import { useRouter } from "next/navigation";

export const CanvasWrapper = () => {
  const router = useRouter();
  const { play, end } = usePlay();

  const effects = useMemo(
    () => (
      <EffectComposer>
        <Noise opacity={0.0} />
      </EffectComposer>
    ),
    []
  );
  if (end) {
    console.log("ENDED");
    console.log("ENDED");
    console.log("ENDED");
    router.push("/sections");
  }

  return (
    // <div className="canvasWrapper">
    <div className="relative h-screen w-screen bg-[#141516]">
      <Canvas
        className={` absolute h-full w-full z-2 overflow-hidden ${
          end ? "canvas-disappear" : ""
        }`}
      >
        {!play && <Triangle />}

        <color attach="background" args={["#ececec"]} />
        <ScrollControls
          pages={play && !end ? 20 : 0}
          damping={0.5}
          style={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
            opacity: 0,
          }}
        >
          <Experience />
        </ScrollControls>
        {effects}
      </Canvas>
      <Overlay />
    </div>
  );
};
