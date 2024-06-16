import React, { useEffect, useRef } from "react";
import cup from "../assets/cup1.png";
import star from "../assets/start_1.png";
import kite from "../assets/kite_1.png";
import Button from "../components/Button";
import audio from "../assets/audio/audio2.mp3";

import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { selectTranslation } from "../slices/languageSlice";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

function SectionTwo({ lang, sound }) {
  const kiteRef = useRef(null);

  const language = useSelector(
    (state) => state.language.translations.sectionTwo
  ); //state.language.translations.sectionTwo

  // Audio ref
  const audioOne = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2",
        start: "top",
        end: "bottom",
        scrub: true,
      },
    });

    tl2.fromTo(kiteRef.current, { y: 0 }, { y: "-40%", duration: 2 }, 0);

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          audioOne.current.play();
        } else {
          audioOne.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="section-2" ref={sectionRef}>
      <audio
        ref={audioOne}
        src={audio}
        style={{ display: "none" }}
        controls={false}
        preload="auto"
        muted={sound ? true : false}
      />
      <div className="section-2-left-box">
        <img src={cup} alt="" className="d-block section-2-cup-image" />
      </div>

      <div className="section-2-center-box">
        {lang === "English" ? (
          <p className="section-2-center-text">{language.en}</p>
        ) : (
          <p className="section-2-center-text">{language.ar}</p>
        )}

        <Button text={lang === "English" ? "Eid Identity" : "هوية العيد"} />
      </div>

      <div className="section-2-right-box">
        <img src={star} alt="" className="d-block section-2-star-image" />
        <img
          ref={kiteRef}
          src={kite}
          alt=""
          className="d-block section-2-kite-image"
        />
      </div>
    </section>
  );
}

export default SectionTwo;
