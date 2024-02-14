import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <>
      <div
        className="parallax"
        ref={ref}
        style={{
          background:
            type === "services"
              ? "linear-gradient(180deg, #355c7d, #6c5b7b, #c06c84)"
              : "linear-gradient(180deg, #355c7d, #6c5b7b, #c06c84)",
        }}
      >
        <motion.h1 style={{ y: yText }}>
          {type === "services" ? "What Do We Do?" : "What Have We Done?"}
        </motion.h1>
        <motion.div className="interior-pic"></motion.div>
        <motion.div className="stars" style={{ x: yBackground }}></motion.div>
      </div>
    </>
  );
};

export default Parallax;
