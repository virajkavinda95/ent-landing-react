import React from "react";
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

function SectionFive() {
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
        src={rightBuild}
        alt="rightBuild"
        className="d-block img-responsive section-5-left-right-build-img"
      />

      <img
        src={waveOrange}
        alt="waveOrange"
        className="d-block img-responsive section-5-wave-orange-img"
      />

      <img
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
