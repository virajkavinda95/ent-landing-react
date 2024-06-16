import React, { useEffect, useRef } from "react";
import gitar from "../assets/gitar.png";
// import gitar from "../assets/gitar.png";
import m1 from "../assets/ms_1.png";
import m2 from "../assets/ms_2.png";
import m3 from "../assets/ms_3.png";
import kitePink from "../assets/kite_pink.png";
import gBalloon from "../assets/balloon_1.png";
import centerText from "../assets/letter_bottom.png";
import centerTextAr from "../assets/letter_bottom_ar.png";

// image-grid images
import backDrop from "../assets/bottom-backdrop.png";
import sun from "../assets/sun.png";
import rBalloon from "../assets/balloon_2.png";
import pBalloon from "../assets/pup_balloon.png";
import Tree from "../assets/tree.png";
import wave_1 from "../assets/wave_1.png";
import wave_3 from "../assets/wave_3.png";
import wave_4 from "../assets/blue-wave.png";
import orangeWave from "../assets/orange-wave.png";
import pinkWave from "../assets/wave_2_right.png";
import roseWqave from "../assets/long-pink.png";
import jug from "../assets/jug_1.png";
import yellowWave from "../assets/right-yellow-wave.png";
import pGiftBox from "../assets/pur_gift_box.png";
import pupGiftBox from "../assets/pup-gift-box.png";
import rightBuild from "../assets/right_build.png";
import buildOne from "../assets/build-1.png";
import buildTwo from "../assets/build-2.png";
import dadDaughter from "../assets/dad_daughter.png";
import mom from "../assets/mother.png";
import daughter from "../assets/daughter_1.png";
import angle_rounder from "../assets/angle_rounder.png";
import cup from "../assets/cup1.png";
import bulbs from "../assets/bulbs.png";

import Button from "../components/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SectionSix({ lang, sound }) {
  const letterRef = useRef(null);

  useEffect(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-6",
        toggleActions: "start pause reverse none",
        start: "top",
        end: "bottom",
        scrub: true,
      },
    });

    tl2.fromTo(
      letterRef.current,
      { y: 0, x: 0 },
      { y: "260%", x: "110%", scale: "0.1", rotate: "50%", duration: 2 },
      0
    );
  }, []);

  return (
    <section className="section-6">
      <div className="section-6-inner-box">
        <img
          src={m1}
          alt=""
          className="d-block img-responsive section-6-music-one-img"
        />
        <img
          src={m2}
          alt=""
          className="d-block img-responsive section-6-music-two-img"
        />
        <img
          src={m3}
          alt=""
          className="d-block img-responsive section-6-music-three-img"
        />
        <img
          src={gitar}
          alt=""
          className="d-block img-responsive section-6-gitar-one-img"
        />

        <img
          src={kitePink}
          alt=""
          className="d-block img-responsive section-6-kite-pink-img"
        />

        <img
          src={gBalloon}
          alt=""
          className="d-block img-responsive section-6-green-balloon-img"
        />
      </div>
      <img
        ref={letterRef}
        src={lang === "English" ? centerText : centerTextAr}
        alt=""
        className="d-block img-responsive section-6-letter-bottom-img"
      />

      {/* ############## */}
      <div className="section-6-bottom-img-grid">
        <div className="division-1">
          <img
            src={backDrop}
            alt="backDrop"
            className="d-block img-responsive section-6-main-back-img"
          />
        </div>
        <div className="division-2">
          <img
            src={orangeWave}
            alt="backDrop"
            className="d-block img-responsive section-6-main-orange-wave"
          />
        </div>
        <div className="division-3">
          <img
            src={wave_1}
            alt="backDrop"
            className="d-block img-responsive section-6-main-wave-one"
          />
        </div>
        <div className="division-4">
          <img
            src={wave_3}
            alt="backDrop"
            className="d-block img-responsive section-6-main-wave-two"
          />
        </div>
        <div className="division-5">
          <img
            src={wave_4}
            alt="backDrop"
            className="d-block img-responsive section-6-main-wave-three"
          />
        </div>
        <div className="division-6">
          <img
            src={pinkWave}
            alt="backDrop"
            className="d-block img-responsive section-6-main-wave-four"
          />
        </div>
        <div className="division-7">
          <img
            src={roseWqave}
            alt="backDrop"
            className="d-block img-responsive section-6-main-wave-five"
          />
        </div>

        <div className="division-8">
          <img
            src={dadDaughter}
            alt="backDrop"
            className="d-block img-responsive section-6-main-dad-son"
          />
        </div>

        <div className="division-9">
          <img
            src={mom}
            alt="backDrop"
            className="d-block img-responsive section-6-main-mom"
          />
        </div>

        <div className="division-10">
          <img
            src={daughter}
            alt="backDrop"
            className="d-block img-responsive section-6-main-daughter"
          />
        </div>

        <div className="division-11">
          <img
            src={rightBuild}
            alt="backDrop"
            className="d-block img-responsive section-6-main-left-build"
          />
        </div>
        <div className="division-12">
          <img
            src={angle_rounder}
            alt="backDrop"
            className="d-block img-responsive section-6-main-left-rounder"
          />
        </div>

        <div className="division-13">
          <img
            src={bulbs}
            alt="backDrop"
            className="d-block img-responsive section-6-main-left-bulb"
          />
        </div>

        <div className="division-14">
          <img
            src={sun}
            alt="backDrop"
            className="d-block img-responsive section-6-main-left-sun"
          />
        </div>
        <div className="division-15">
          <img
            src={Tree}
            alt="backDrop"
            className="d-block img-responsive section-6-main-right-tree"
          />
        </div>

        <div className="division-16">
          <img
            src={buildOne}
            alt="backDrop"
            className="d-block img-responsive section-6-main-right-buildOne"
          />
        </div>
        <div className="division-17">
          <img
            src={buildTwo}
            alt="backDrop"
            className="d-block img-responsive section-6-main-right-buildTwo"
          />
        </div>
        <div className="division-18">
          <img
            src={cup}
            alt="backDrop"
            className="d-block img-responsive section-6-main-left-cup"
          />
        </div>
        <div className="division-19">
          <img
            src={pupGiftBox}
            alt="backDrop"
            className="d-block img-responsive section-6-main-right-gift-box"
          />
        </div>
        <div className="division-20">
          <img
            src={pGiftBox}
            alt="backDrop"
            className="d-block img-responsive section-6-main-right-gift-box-two"
          />
        </div>
        <div className="division-20">
          <img
            src={jug}
            alt="backDrop"
            className="d-block img-responsive section-6-main-right-jug"
          />
        </div>

        <Button
          text={
            lang === "English" ? "Replay The Journey" : "إعادة تشغيل الرحلة"
          }
        />
      </div>
      <img
        src={pinkWave} //orange
        alt="backDrop"
        className="d-block img-responsive section-6-main-bottom-wave-one"
      />
      <img
        src={wave_3}
        alt="backDrop"
        className="d-block img-responsive section-6-main-bottom-wave-two"
      />
      <img
        src={roseWqave}
        alt="backDrop"
        className="d-block img-responsive section-6-main-bottom-wave-three"
      />
    </section>
  );
}

export default SectionSix;
