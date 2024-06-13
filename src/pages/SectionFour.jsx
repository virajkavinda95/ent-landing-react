import React, { useEffect, useRef } from "react";
import waveOne from "../assets/wave_4.png";
import waveTwo from "../assets/wave_3.png";
import giftCap from "../assets/gift_closer.png";
import giftBox from "../assets/gift_box.png";
import gMoney from "../assets/money_1.png";
import pMoney from "../assets/money_2.png";
import bMoney from "../assets/money_3.png";
import fatherSon from "../assets/dad_daughter.png";
import mother from "../assets/mother.png";
import daughter from "../assets/daughter_1.png";
import wavePink from "../assets/wave_3_left.png";
import letterBox from "../assets/letter_box.png";

import audio from "../assets/audio/audio4.mp3";

import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SectionFour() {
  const daugh = useRef(null);
  const gCap = useRef(null);
  const gBox = useRef(null);
  const gMoneyLeft = useRef(null);
  const pMoneyLeft = useRef(null);
  const gMoneyRight = useRef(null);
  const pMoneyRight = useRef(null);
  const bMoneyRight = useRef(null);
  const letterBRight = useRef(null);

  // Audio ref
  const audioOne = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-3",
        toggleActions: "restart pause reverse none",
        start: "top",
        end: "bottom",
        scrub: true,
      },
    });

    tl2
      .fromTo(gMoneyLeft.current, { y: 0 }, { y: "-50%", duration: 10 }, 0)
      .fromTo(pMoneyLeft.current, { y: 0 }, { y: "-200%", duration: 10 }, 0)
      .fromTo(daugh.current, { x: 0 }, { x: "-10%", duration: 10 }, 0)
      .fromTo(
        gCap.current,
        { y: 0 },
        { y: "-30%", rotateZ: 20, duration: 10 },
        0
      )
      .fromTo(
        gBox.current,
        { y: 0 },
        { y: "30%", rotateZ: -20, duration: 10 },
        0
      )
      .fromTo(gMoneyRight.current, { y: 0 }, { y: "-90%", duration: 10 }, 0)
      .fromTo(pMoneyRight.current, { y: 0 }, { y: "-90%", duration: 10 }, 0)
      .fromTo(bMoneyRight.current, { y: 0 }, { y: "-90%", duration: 10 }, 0)
      .fromTo(
        letterBRight.current,
        { x: 0 },
        { x: 0, rotate: 10, duration: 10 },
        0
      );

    // Autoplay audio section
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
    <section className="section-4" ref={sectionRef}>
      <audio
        ref={audioOne}
        src={audio}
        style={{ display: "none" }}
        controls={false}
        preload="auto"
      />
      <div className="section-4-left-top-img-box">
        <img
          src={waveOne}
          alt="waveOne"
          className="d-block img-responisve section-4-left-purple-wave"
        />
        <img
          src={waveTwo}
          alt="waveTwo"
          className="d-block img-responisve section-4-left-green-wave"
        />
      </div>

      <div className="section-4-center-box">
        <p className="section-4-center-text-para">
          After that much-needed family time, it’s the kids’ favourite part,
          Eideyah! Time for them to engage in friendly banter as to who received
          the most.
        </p>
      </div>

      <div className="section-4-right-top-img-box">
        <img
          ref={gCap}
          src={giftCap}
          alt="giftCap"
          className="d-block img-responsive section-4-right-gift-cap"
        />
        <img
          ref={gBox}
          src={giftBox}
          alt="giftBox"
          className="d-block img-responsive section-4-right-gift-box"
        />
      </div>

      <div className="section-4-left-bottom-img-box">
        <img
          ref={gMoneyLeft}
          src={gMoney}
          alt="gMoney"
          className="d-block img-responisve section-4-left-green-money"
        />
        <img
          ref={pMoneyLeft}
          src={pMoney}
          alt="pMoney"
          className="d-block img-responisve section-4-left-purple-money"
        />

        <img
          src={fatherSon}
          alt="fatherSon"
          className="d-block img-responisve section-4-left-father-son"
        />
        <img
          src={mother}
          alt="mother"
          className="d-block img-responisve section-4-left-mother"
        />
        <img
          ref={daugh}
          src={daughter}
          alt="daughter"
          className="d-block img-responisve section-4-left-daughter"
        />
        <img
          src={wavePink}
          alt="wavePink"
          className="d-block img-responisve section-4-left-pink-wave"
        />
      </div>

      <div className="section-4-right-bottom-img-box">
        <img
          ref={gMoneyRight}
          src={gMoney}
          alt="gMoney"
          className="d-block img-responisve section-4-right-green-money"
        />
        <img
          ref={pMoneyRight}
          src={pMoney}
          alt="pMoney"
          className="d-block img-responisve section-4-right-purple-money"
        />
        <img
          ref={bMoneyRight}
          src={bMoney}
          alt="bMoney"
          className="d-block img-responisve section-4-right-blue-money"
        />
        <img
          ref={letterBRight}
          src={letterBox}
          alt="letterBox"
          className="d-block img-responisve section-4-left-letter-box"
        />
      </div>
    </section>
  );
}

export default SectionFour;
