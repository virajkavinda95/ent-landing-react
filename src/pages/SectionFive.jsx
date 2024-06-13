import React, { useEffect, useRef } from "react";
import biscuit from "../assets/biscuit_2.png";
import pupBalloon from "../assets/pup_balloon.png";
import Card from "../components/Card";
import innerBackOne from "../assets/white-card-back.png";
import innerBackTwo from "../assets/puple-card-back.png";
import Button from "../components/Button";
import kite from "../assets/kite_1.png";
import rounder from "../assets/left_rounder.png";
import pinkBalloon from "../assets/balloon_2.png";
import rightBuild from "../assets/right_build.png";
import waveOrange from "../assets/wave_2_right.png";
import wavePurple from "../assets/wave_1.png";

import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SectionFive() {
  const roundRef = useRef(null);
  const kiteRef = useRef(null);
  const buildRef = useRef(null);
  const rightWaveOne = useRef(null);
  const rightWaveTwo = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-5",
        toggleActions: "none pause reverse none",
        start: "top top",
        end: "bottom",
        scrub: true,
      },
    });

    tl.fromTo(
      roundRef.current,
      { left: "-20%", top: "60%" },
      { left: "20%", top: "-50%", duration: 4 },
      0
    )
      .fromTo(
        kiteRef.current,
        { left: "10%", top: "40%" },
        { left: "10%", top: "-50%", duration: 4 },
        0
      )
      .fromTo(
        buildRef.current,
        { right: "-10%", top: "40%" },
        { right: "10%", top: "30%", duration: 4 },
        0
      )
      .fromTo(
        rightWaveOne.current,
        { right: "-10%", right: "-80%" },
        { right: "-80%", right: "10%", duration: 4 },
        0
      )
      .fromTo(
        rightWaveTwo.current,
        { right: "-10%", right: "-40%" },
        { right: "-40%", right: "10%", duration: 4 },
        0
      );
  }, []);

  return (
    <section className="section-5">
      <img
        src={biscuit}
        alt="biscuit"
        className="d-block img-responsive section-5-left-biscuit-img"
      />
      <img
        src={pupBalloon}
        alt="pupBalloon"
        className="d-block img-responsive section-5-left-pup-balloon-img"
      />

      <div className="section-5-center-card-box">
        <Card image={innerBackOne} type={"one"} />
        <Card image={innerBackTwo} type={"sec"} />
        {/* <Card image={innerBackTwo} /> */}
      </div>

      <div className="section-5-bottom-box">
        <h5 className="section-5-bottom-inner-top-text">Greeting Cards</h5>
        <h5 className="section-5-bottom-inner-center-text">
          To share with your loved ones!
        </h5>

        <Button text="Your Greeting" />
        <Button text="Create your own" />
      </div>

      <img
        ref={kiteRef}
        src={kite}
        alt=""
        className="d-block img-responsive section-5-left-kite-img"
      />

      <div className="section-5-bottom-two-box">
        <p className="section-5-bottom-two-inner-text">
          Next up, a treat for the eyes and a feast for the belly, it’s ‘Eid
          lunch’ with family. Although we might be missing a few due to food
          coma, there’s plenty of room for laughter and fun.
        </p>
      </div>

      <img
        ref={roundRef}
        src={rounder}
        alt="rounder"
        className="d-bloc img-responsive section-5-left-rounder-img"
      />

      <img
        src={pinkBalloon}
        alt="pinkBalloon"
        className="d-block img-responsive section-5-left-pink-balloon-img"
      />

      <img
        ref={buildRef}
        src={rightBuild}
        alt="rightBuild"
        className="d-block img-responsive section-5-left-right-build-img"
      />

      <img
        ref={rightWaveOne}
        src={waveOrange}
        alt="waveOrange"
        className="d-block img-responsive section-5-wave-orange-img"
      />

      <img
        ref={rightWaveTwo}
        src={wavePurple}
        alt="wavePurple"
        className="d-block img-responsive section-5-wave-puple-img"
      />

      <div className="section-5-margin-bottom-two-box">
        <p className="section-5-margin-bottom-two-inner-text">
          Next up, a treat for the eyes and a feast for the belly, it’s ‘Eid
          lunch’ with family. Although we might be missing a few due to food
          coma, there’s plenty of room for laughter and fun.
        </p>

        <Button text="Discover our Eid Events" />
      </div>
    </section>
  );
}

export default SectionFive;
