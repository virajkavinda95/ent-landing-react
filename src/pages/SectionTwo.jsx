import React, { useEffect, useRef } from "react";
import cup from "../assets/cup1.png";
import star from "../assets/start_1.png";
import kite from "../assets/kite_1.png";
import Button from "../components/Button";

import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SectionTwo() {
  const kiteRef = useRef(null);

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
  }, []);

  return (
    <section className="section-2">
      <div className="section-2-left-box">
        <img src={cup} alt="" className="d-block section-2-cup-image" />
      </div>

      <div className="section-2-center-box">
        <p className="section-2-center-text">
          After a whole year of patiently, but eagerly waiting, Eid is finally
          here! Hands up everyone who missed the incense smells, the outfits and
          the delicious food? But first, let’s get Eid-ready with our outfits.
        </p>

        <Button text="Eid Identity" />
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
