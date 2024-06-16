import React, { useEffect, useRef } from "react";
import biscuit from "../assets/biscuit_2.png";
import pupBalloon from "../assets/pup_balloon.png";
import Card from "../components/Card";
import innerBackOne from "../assets/white-card-back.png";
import innerBackTwo from "../assets/puple-card-back.png";
import innerBackOneAr from "../assets/white-card-back-ar.png";
import innerBackTwoAr from "../assets/puple-card-back-ar.png";
import Button from "../components/Button";
import kite from "../assets/kite_1.png";
import rounder from "../assets/left_rounder.png";
import pinkBalloon from "../assets/balloon_2.png";
import rightBuild from "../assets/right_build.png";
import waveOrange from "../assets/wave_2_right.png";
import wavePurple from "../assets/wave_1.png";

import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";

import bottom_logo from "../assets/bottom-logo.png";

gsap.registerPlugin(ScrollTrigger);

function SectionFive({ lang, sound }) {
  const language = useSelector(
    (state) => state.language.translations.sectionFive
  ); //state.language.translations.sectionTwo

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
        <Card
          image={lang === "English" ? innerBackOne : innerBackOneAr}
          type={"one"}
        />
        <Card
          image={lang === "English" ? innerBackTwo : innerBackTwoAr}
          type={"sec"}
        />
        {/* <Card image={innerBackTwo} /> */}
      </div>

      <div className="section-5-bottom-box">
        <h5 className="section-5-bottom-inner-top-text">
          {lang === "English" ? "Greetings Card" : "بطاقات ترحيبية"}
        </h5>
        <h5 className="section-5-bottom-inner-center-text">
          {lang === "English"
            ? "To share with your loved ones!"
            : "لمشاركتها مع أحبائك!"}
        </h5>

        <Button text={lang === "English" ? "Your Greeting" : "تحية الخاص بك"} />
        <Button
          text={lang === "English" ? "Create your own" : "إنشاء الخاصة بك"}
        />
      </div>

      <img
        ref={kiteRef}
        src={kite}
        alt=""
        className="d-block img-responsive section-5-left-kite-img"
      />

      <div className="section-5-bottom-two-box">
        {lang === "English" ? (
          <p className="section-5-bottom-two-inner-text">{language.en}</p>
        ) : (
          <p className="section-5-bottom-two-inner-text">{language.ar}</p>
        )}
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
        {lang === "English" ? (
          <p className="section-5-margin-bottom-two-inner-text">
            {language.en}
          </p>
        ) : (
          <p className="section-5-margin-bottom-two-inner-text">
            {language.ar}
          </p>
        )}
        <Button
          text={
            lang === "English"
              ? "Discover our Eid Events"
              : "اكتشف فعاليات العيد لدينا"
          }
        />
        <img
          src={bottom_logo}
          alt="bottom_logo"
          className="d-block img-responsive section-5-bottom-logo-img"
        />
      </div>
    </section>
  );
}

export default SectionFive;
