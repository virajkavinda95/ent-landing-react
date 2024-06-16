import React, { useEffect, useRef } from "react";
import waveImage from "../assets/wave_1.png";
import balloonOne from "../assets/balloon_1.png";
import balloonTwo from "../assets/balloon_2.png";
import waveImageRight from "../assets/wave_2_right.png";
import textImage from "../assets/letters_bottom.png";
import textImageAr from "../assets/text_right_ar.png";
import Button from "../components/Button";
import audio from "../assets/audio/audio3.mp3";

import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

function SectionThree({ lang, sound }) {
  const language = useSelector(
    (state) => state.language.translations.sectionThree
  ); //state.language.translations.sectionTwo

  const waveOne = useRef(null);
  const textImg = useRef(null);
  const waveTwo = useRef(null);

  // Audio ref
  const audioOne = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2",
        toggleActions: "none pause reverse none",
        start: "top",
        end: "bottom",
        scrub: true,
      },
    });

    tl2
      .fromTo(
        waveOne.current,
        { left: "-40%", x: "10%" },
        { left: "10%", x: "-60%", duration: 10 },
        0
      )
      .fromTo(waveTwo.current, { x: "-30%" }, { x: "20%", duration: 10 }, 0)
      .fromTo(textImg.current, { x: 0 }, { x: "50%", duration: 10 }, 0);

    // ###########################
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
    <section className="section-3" ref={sectionRef}>
      <audio
        ref={audioOne}
        src={audio}
        style={{ display: "none" }}
        controls={false}
        preload="auto"
        muted={sound ? false : true}
      />
      <div className="section-3-left-image-box">
        <img
          ref={waveOne}
          src={waveImage}
          alt=""
          className="d-block img-responsive section-3-left-wave-image"
        />
        <img
          src={balloonOne}
          alt=""
          className="d-block img-responsive section-3-left-balloonOne-image"
        />
        <img
          src={balloonTwo}
          alt=""
          className="d-block img-responsive section-3-left-balloonTwo-image"
        />
      </div>

      <div className="section-3-center-box">
        {lang === "English" ? (
          <p className="section-3-center-text-para">{language.en}</p>
        ) : (
          <p className="section-3-center-text-para">{language.ar}</p>
        )}
      </div>

      <div className="section-3-btn-group-bottom">
        <Button
          text={
            lang === "English" ? "Eid Events Booklet" : "كتيب فعاليات العيد"
          }
        />
        <Button
          text={lang === "English" ? "Greeting Cards" : "بطاقات ترحيبية"}
        />
        <Button
          text={lang === "English" ? "House Decorations" : "ديكور المنزل"}
        />
        <Button
          text={
            lang === "English" ? "Companies Decorations" : "ديكورات الشركات"
          }
        />
      </div>

      <div className="section-3-right-image-box">
        <img
          ref={textImg}
          src={lang === "English" ? textImage : textImageAr}
          alt=""
          className="d-block img-responsive section-3-left-text-image"
        />
        <img
          ref={waveTwo}
          src={waveImageRight}
          alt=""
          className="d-block img-responsive section-3-left-wave-image-tight"
        />
      </div>
    </section>
  );
}

export default SectionThree;
