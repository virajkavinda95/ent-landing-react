import React, { useEffect, useRef } from "react";
import waveImage from "../assets/wave_1.png";
import balloonOne from "../assets/balloon_1.png";
import balloonTwo from "../assets/balloon_2.png";
import waveImageRight from "../assets/wave_2_right.png";
import textImage from "../assets/letters_bottom.png";
import Button from "../components/Button";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SectionThree() {
  const waveOne = useRef(null);
  const textImg = useRef(null);
  const waveTwo = useRef(null);

  useEffect(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2",
        toggleActions: "restart pause reverse none",
        start: "top",
        end: "bottom",
        scrub: true,
      },
    });

    tl2
      .fromTo(waveOne.current, { x: "-40%" }, { x: "20%", duration: 4 })
      .fromTo(waveTwo.current, { x: "20%" }, { x: "-20%", duration: 4 })
      .fromTo(textImg.current, { x: 0 }, { x: "40%", duration: 4 }, 0);
  }, []);

  return (
    <section className="section-3">
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
        <p className="section-3-center-text-para">
          Now that we’re ready in our new Eid outfits, it’s time for Takbeer or
          Eid prayers. Let’s revel in this beautiful moment. Later, let’s join
          the family gathering and exchange warm greetings with loved ones.
        </p>
      </div>

      <div className="section-3-btn-group-bottom">
        <Button text="Eid Events Booklet" />
        <Button text="Greeting Cards" />
        <Button text="House Decorations" />
        <Button text="Companies Decorations" />
      </div>

      <div className="section-3-right-image-box">
        <img
          ref={textImg}
          src={textImage}
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
