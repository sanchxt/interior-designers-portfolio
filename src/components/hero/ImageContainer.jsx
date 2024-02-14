import images from "./images";

const ImageContainer = () => {
  return (
    <>
      {images.map((imgSrc, idx) => {
        return (
          <div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

export default ImageContainer;
