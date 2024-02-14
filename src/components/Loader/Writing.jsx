import { useTypewriter } from "react-simple-typewriter";

const Writing = () => {
  const [useTypeEffect] = useTypewriter({
    words: [
      "Curate Spaces that Speak Your Style.",
      "Design Your World, One Detail at a Time.",
      "Tailor Spaces to Echo Your Personality.",
      "Craft Timeless Designs, Uniquely Aligned to You.",
    ],
    loop: {},
    typeSpeed: 35,
    deleteSpeed: 30,
  });

  return (
    <h1
      id="bottom-welcome"
      className="text-4xl text-gray-50 font-worksans italic opacity-90"
    >
      We {useTypeEffect}
    </h1>
  );
};

export default Writing;
