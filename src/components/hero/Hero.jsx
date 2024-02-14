import "./hero.scss";
import ImageSlider from "./ImageSlider";
import slides from "./slides";
import { motion } from "framer-motion";

const textVariants = {
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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.h2 variants={textVariants}>
            ELEVATE YOUR SURROUNDINGS
          </motion.h2>
          <motion.h1 variants={textVariants}>
            Bringing Artistry to Homes & Offices
          </motion.h1>

          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Us</motion.button>
          </motion.div>

          <motion.img
            src="/scroll.png"
            alt="Scroll Icon"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer not-selectable"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Designer Decorator Stylist
      </motion.div>

      <div className="imgContainer">
        <div className="slide-container">
          <ImageSlider slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
