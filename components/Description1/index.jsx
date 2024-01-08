import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
import { div } from "three/examples/jsm/nodes/Nodes.js";
export default function Index() {
  const phrase =
    "Aeromake Aviation's journey to excellence is underpinned by its rich and extensive experience in the aviation sector. This experience has allowed the company to develop and fine-tune its suite of services, resulting in unmatched support for aircraft inventory and top-tier component services. Their comprehensive offerings are designed to ensure that the wheels of aviation keep turning smoothly.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div>
      <div ref={description} className={styles.description}>
        <div className={styles.body}>
          <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
            Operational Excellence through Experience
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
