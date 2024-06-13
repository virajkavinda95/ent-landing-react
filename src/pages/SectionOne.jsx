import React, { useEffect, useRef } from "react";
import headerImg from "../assets/header_cover.png";
import centerImageOne from "../assets/text_1.png";
import centerImageJug from "../assets/jug_1.png";
import centerImageCup from "../assets/cup_2.png";
import centerImageCoffeeLine from "../assets/cofee_line.png";
import StarImage from "../components/StarImage";
import star from "../assets/start_1.png";
import biscuitOne from "../assets/biscuit_1.png";
import biscuitTwo from "../assets/biscuit_2.png";
import flag from "../assets/flag_1.png";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import audio from "../assets/audio/audio1.mp3";

gsap.registerPlugin(ScrollTrigger);

function SectionOne() {
  const ref = useRef();

  const imageLeftRef = useRef(null);
  const imageRightRef = useRef(null);
  const imageRightRefTwo = useRef(null);
  const centerTextImg = useRef(null);

  // Audio ref
  const audioOne = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-1",
        start: "top",
        end: "bottom",
        scrub: true,
      },
    });

    tl.fromTo(
      imageLeftRef.current,
      {
        x: 0,
      },
      { x: "-40%", duration: 4 }
    )
      .fromTo(
        imageRightRef.current,
        {
          x: 0,
        },
        { x: "40%", duration: 4 }
      )
      .fromTo(imageRightRefTwo.current, { x: 0 }, { x: "40%", duration: 4 }, 0);
    // .fromTo(centerTextImg.current, { x: 0 }, { scale: 2, duration: 4 }, 0);

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
    <section className="section-1" ref={sectionRef}>
      <img src={headerImg} alt="" className="section-1-img-header" />

      {/* <iframe
        ref={audioOne}
        src={audio}
        allow="autoplay"
        style={{ display: "none" }}
        id="iframeAudio"
      ></iframe> */}

      <audio
        ref={audioOne}
        src={audio}
        style={{ display: "none" }}
        controls={false}
        preload="auto"
      />

      <div className="section-1-text-img-center-box">
        <img
          ref={centerTextImg}
          src={centerImageOne}
          alt=""
          className="d-block img-responsive section-1-text-img-one"
          width={300}
        />
      </div>

      <div className="section-1-image-box">
        <img
          ref={imageLeftRef}
          src={centerImageJug}
          alt=""
          className="d-block img-responsive section-1-group-img-two"
          width={350}
        />

        <div className="section-1-group-image-box">
          <img
            ref={imageRightRef}
            src={centerImageCup}
            alt=""
            className="d-block img-responsive section-1-group-img-three"
            width={200}
          />
          <img
            ref={imageRightRefTwo}
            src={centerImageCoffeeLine}
            alt=""
            className="d-block img-responsive section-1-group-img-four"
            width={200}
          />
        </div>
      </div>

      <img
        src={star}
        alt="start"
        width={90}
        className="d-block img-responsive star-image-common-top"
      />

      <div className="section-1-biscuit-image-box">
        <img
          src={biscuitOne}
          alt=""
          className="d-block img-responsive section-1-bottom-biscuit-one"
          width={90}
        />
        <img
          src={biscuitTwo}
          alt=""
          className="d-block img-responsive section-1-bottom-biscuit-two"
          width={100}
        />
      </div>

      {/* <img
        src={flag}
        alt=""
        className="d-block img-responsive section-1-bottom-flag-img"
      /> */}
    </section>
  );
}

export default SectionOne;
