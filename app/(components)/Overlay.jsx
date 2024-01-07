import { useProgress } from "@react-three/drei";
import { usePlay } from "../(contexts)/Play";
const logo = "/images/logo.svg";
import GoogleAnim from "./GoogleAnim";

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
          className={`intro ${play ? "intro--disappear" : ""} ${
            end ? "intro--none" : ""
          }`}
        >
          <div className="bg-green-700">
            <a
              className="hover:arrow-translate-x d-inline-flex align-items-center font-weight-medium text-white font-weight-bold d-inline-flex align-items-center"
              href="#"
              onClick={() => {
                setPlay(true);
              }}
            >
              <span>Explore Me</span>
            </a>
          </div>
          {/*  */}{" "}
          <div className=" p-2 w-[800px] h-[800px] bg-gray-50-600">
            <div className="h-full w-full overflow-auto">
              <GoogleAnim />
            </div>
          </div>
          {/*  */}
          {/* <p className="intro__scroll">Scroll to explore</p> */}
        </div>
      )}
      <div className={` outro ${end ? "outro--appear" : ""}`}>
        {/* <div className="h-full w-full overflow-auto"> */}

        <GoogleAnim />
        {/* </div> */}
      </div>
    </div>
  );
};

function trial() {
  console.log("hsuidhfisdi");
}
