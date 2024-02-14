import "./services.scss";
import { motion } from "framer-motion";
import boxContents from "./boxContents";

const hoverAnim = {
  background: "lightgray",
  color: "black",
};

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Your personalized design journey
          <br />
          starts here
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "#CCFF00" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#CCFF00" }}>For Your</motion.b>{" "}
            Spaces
          </h1>
          <button>WHAT WE DO</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        {boxContents.map((box, index) => (
          <motion.div className="box" whileHover={hoverAnim} key={index}>
            <h2>{box.title}</h2>
            <p>{box.description}</p>
            <button>Go</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
