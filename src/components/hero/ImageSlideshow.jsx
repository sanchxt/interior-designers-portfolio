import { motion, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ImageContainer from "./ImageContainer";
import images from "./images";

const DRAG_BUFFER = 50;

const ImageSlideshow = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [dragging, setDragging] = useState(false);

  const dragX = useMotionValue(0);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className="flex items-center cursor-grab active:cursor-grabbing"
      >
        <ImageContainer />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return <div className="mt-4 flex w-full justify-center gap-2">hello</div>;
};

export default ImageSlideshow;
