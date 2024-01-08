import classNames from "classnames";
import { useFeatureStore } from "./store";
import { motion } from "framer-motion";
import Image from "next/image";

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
} & CardProps;

type CardProps = {
  id: string;
};

const FeatureCard = ({ gradient, children, id }: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  return (
    <div
      className={classNames(
        "absolute inset-0 h-[50vh] w-full rounded-2xl transition-opacity",
        inViewFeature === id
          ? "active-card opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <div
        className={classNames(
          "gradient absolute inset-0 origin-bottom-left rounded-2xl bg-gradient-to-br",
          gradient
        )}
      />
      {/* <h1 className="absolute"> xfdfd </h1> */}
      {children}
      <button
        onClick={() => setFullscreenFeature(id)}
        className="show-me-btn absolute bottom-6 right-6 rounded-xl bg-black px-4 py-2 text-white shadow-lg"
      >
        Show me
      </button>
    </div>
  );
};

export const Todo = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;

  return (
    <FeatureCard id={id} gradient="gradient-0">
      <Image
        className={classNames(
          "w-full h-[50vh] rounded-xl shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        // src="/images/01TrustedGlobalPartner.jpg"
        src={imageArray[parseInt(id)]}
        width={0}
        height={0}
        sizes="100vw"
        // style={{ width: "100%", height: "auto" }} // optional
        alt="Picture from the author"
      />
    </FeatureCard>
  );
};

export const Colors = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="gradient-1">
      <Image
        className={classNames(
          "w-full h-[50vh] rounded-xl shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        // src="/images/01TrustedGlobalPartner.jpg"
        src={imageArray[parseInt(id)]}
        width={0}
        height={0}
        sizes="100vw"
        // style={{ width: "100%", height: "auto" }} // optional
        alt="Picture from the author"
      />
    </FeatureCard>
  );
};

export const Availability = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="gradient-2">
      <Image
        className={classNames(
          "w-full h-[50vh] rounded-xl shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        // src="/images/01TrustedGlobalPartner.jpg"
        src={imageArray[parseInt(id)]}
        width={0}
        height={0}
        sizes="100vw"
        // style={{ width: "100%", height: "auto" }} // optional
        alt="Picture from the author"
      />
    </FeatureCard>
  );
};

export const SchedulingLinks = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="gradient-3">
      <Image
        className={classNames(
          "w-full h-[50vh] rounded-xl shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        // src="/images/01TrustedGlobalPartner.jpg"
        src={imageArray[parseInt(id)]}
        width={0}
        height={0}
        sizes="100vw"
        // style={{ width: "100%", height: "auto" }} // optional
        alt="Picture from the author"
      />
    </FeatureCard>
  );
};

export const Team = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="gradient-4">
      <Image
        className={classNames(
          "w-full h-[50vh] rounded-xl shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        // src="/images/01TrustedGlobalPartner.jpg"
        src={imageArray[parseInt(id)]}
        width={0}
        height={0}
        sizes="100vw"
        // style={{ width: "100%", height: "auto" }} // optional
        alt="Picture from the author"
      />
    </FeatureCard>
  );
};

export const New = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="gradient-5">
      <Image
        className={classNames(
          "w-full h-[50vh] rounded-xl shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        // src="/images/01TrustedGlobalPartner.jpg"
        src={imageArray[parseInt(id)]}
        width={0}
        height={0}
        sizes="100vw"
        // style={{ width: "100%", height: "auto" }} // optional
        alt="Picture from the author"
      />
    </FeatureCard>
  );
};

const imageArray = [
  "/images/05CustomerExperience.jpg",
  "/images/04TailoredPrecisionService.jpg",
  "/images/01TrustedGlobalPartner.jpg",
  "/images/02OperationalExcellence.jpg",
  "/images/03InnovativeSolutions.jpg",
  "/images/04TailoredPrecisionService.jpg",
];
