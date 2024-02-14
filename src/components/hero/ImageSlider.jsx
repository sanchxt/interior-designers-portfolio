import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <div
        style={{ left: "32px" }}
        onClick={goToPrevious}
        className="not-selectable arrow"
      >
        🢔
      </div>
      <div
        style={{ right: "32px" }}
        onClick={goToNext}
        className="not-selectable arrow"
      >
        🢖
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="slides"
      ></div>
    </div>
  );
};

export default ImageSlider;
