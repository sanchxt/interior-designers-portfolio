import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Writing from "./Writing";
import TitleTexts from "./TitleTexts";
import "./loader.scss";

const PreLoader = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.5,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.8,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.9,
        })
        .from("#bottom-welcome", {
          opacity: 0,
          delay: 0.3,
          duration: 1.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative loader" ref={comp}>
      <TitleTexts />

      <div className="h-screen flex flex-col justify-center place-items-center">
        <h1
          id="welcome"
          className="text-9xl font-bold text-gray-100 font-worksans"
        >
          Personalized Interiors
        </h1>
        <br />
        <Writing />
        <br /> <br />
      </div>
    </div>
  );
};

export default PreLoader;
