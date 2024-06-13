import React from "react";
import gitar from "../assets/gitar.png";
// import gitar from "../assets/gitar.png";
import m1 from "../assets/ms_1.png";
import m2 from "../assets/ms_2.png";
import m3 from "../assets/ms_3.png";
import kitePink from "../assets/kite_pink.png";
import gBalloon from "../assets/balloon_1.png";
import centerText from "../assets/letter_bottom.png";

function SectionSix() {
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

        <img
          src={centerText}
          alt=""
          className="d-block img-responsive section-6-letter-bottom-img"
        />
      </div>
    </section>
  );
}

export default SectionSix;
