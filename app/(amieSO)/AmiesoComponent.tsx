import { stagger, useAnimate } from "framer-motion";
import {
  Availability,
  Colors,
  // Music,
  SchedulingLinks,
  Team,
  Todo,
  New,
} from "./components/features/card";
import { FeatureTitle } from "./components/features/title";
import { OtherVisual } from "./components/features/visual";
import { Hero } from "./components/hero";
import { useFeatureStore } from "./components/features/store";
import { useEffect } from "react";
import { useHidePageOverflow } from "./utils/toggle-page-overflow";
import { useEscapePress } from "./utils/use-escape-press";

const features = [
  {
    title: "Elevating Aviation Excellence",
    id: "0",
    card: Todo,
    visual: OtherVisual,
  },
  {
    title: "Your Time, Our Priority",
    id: "1",
    card: Colors,
    visual: OtherVisual,
  },
  {
    title: "Crafting Quality, Delivering Value",
    id: "2",
    card: Availability,
    visual: OtherVisual,
  },
  // {
  //   title: "Time Priority",
  //   id: "4",
  //   card: Music,
  //   visual: MusicVisual,
  // },
  {
    title: "Rotables",
    id: "3",
    card: SchedulingLinks,
    visual: OtherVisual,
  },
  {
    title: "Tools & Equipment",
    id: "4",
    card: Team,
    visual: OtherVisual,
  },
  {
    title: "Consumables & Expendables",
    id: "5",
    card: New,
    visual: OtherVisual,
  },
];

function AmiesoComponent() {
  const [scope, animate] = useAnimate();
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
  const lastFullscreenFeature = useFeatureStore(
    (state) => state.lastFullscreenFeature
  );
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  const onEscapePress = () => {
    if (fullscreenFeature) setFullscreenFeature(null);
  };

  useEscapePress(onEscapePress);
  useHidePageOverflow(!!fullscreenFeature);

  useEffect(() => {
    if (fullscreenFeature) {
      animate([
        [
          ".feature-title",
          { opacity: 0, x: "-200px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 1, scale: 1, pointerEvents: "auto" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 0, scale: 0 }, { at: "<" }],
        [".active-card .show-me-btn", { opacity: 0 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 1, y: "0px" },
          { at: "<", duration: 0.3 },
        ],
      ]);
    } else {
      animate([
        [
          ".feature-title",
          { opacity: 1, x: "0px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 0, scale: 0.75, pointerEvents: "none" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 1, scale: 1 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 0, y: "300px" },
          { at: "<", duration: 0.3 },
        ],
        [".active-card .show-me-btn", { opacity: 1 }],
      ]);
    }
  }, [animate, fullscreenFeature, lastFullscreenFeature]);

  return (
    /*max-w-6xl*/
    <div className="mx-auto px-4 md:px-14">
      <Hero />
      <div ref={scope}>
        {features.map((feature) => (
          <feature.visual id={feature.id} key={feature.id} />
        ))}
        <button
          onClick={() => setFullscreenFeature(null)}
          className="back-to-site-btn fixed bottom-6 left-1/2 z-10 -translate-x-1/2 translate-y-[300%] rounded-full bg-black px-4 py-2 text-white opacity-0 shadow-lg"
        >
          Back to site
        </button>
        <div className="flex w-full flex-col items-start gap-20 sm:flex-row">
          <div className="sticky top-0 z-10 flex w-full items-center">
            <div className="relative h-[50vh] w-full rounded-2xl bg-gray-100 [&:has(>_.active-card)]:bg-transparent">
              {/* This is for the Blank Gray Box before & after the feature Cards
               */}
              {features.map((feature) => (
                <feature.card id={feature.id} key={feature.id} />
              ))}
            </div>
          </div>
          <div className="w-full py-[50vh]">
            <ul>
              {features.map((feature) => (
                <li key={feature.id}>
                  <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="h-[60px]">Next Page Scroll</div> */}
    </div>
  );
}

export default AmiesoComponent;
