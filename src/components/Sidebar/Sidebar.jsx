import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [isDoneAnimating, setIsDoneAnimating] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDoneAnimating(true);
      console.log("rendered");
    }, 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      {isDoneAnimating && (
        <>
          <motion.div className="bg" variants={variants}>
            <Links />
          </motion.div>
          <ToggleButton open={open} setOpen={setOpen} />
        </>
      )}
    </motion.div>
  );
};

export default SideBar;
