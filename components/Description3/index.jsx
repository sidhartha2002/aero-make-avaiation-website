import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
import { div } from "three/examples/jsm/nodes/Nodes.js";
export default function Index() {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description);
  const phraseArray = [
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.",
    "Hello Nexr PArrt",
  ];

  return (
    <div>
      <div ref={description} className={styles.description}>
        <div className="flex justify-center text-2xl sm:text-2xl">
          <motion.p
            className=""
            variants={opacity}
            animate={isInView ? "open" : "closed"}
          >
            Aeromake Aviation, a stalwart in the aviation industry with decades
            of experience, has established itself as a distinguished provider of
            comprehensive aircraft materials support services. With a relentless
            commitment to excellence, Aeromake Aviation has navigated the
            dynamic and demanding aviation landscape, emerging as a trusted
            partner for a global clientele.
          </motion.p>
        </div>
        <div className={styles.body}>
          <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
            A Broad and Esteemed Client Base
          </motion.p>
          <p>
            {phrase.split(" ").map((word, index) => {
              return (
                <span key={index} className={styles.mask}>
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

{
  /* <div data-scroll data-scroll-speed={0.1}>
  <Rounded className={styles.button}>
    <p>About me</p>
  </Rounded>
</div> */
}
