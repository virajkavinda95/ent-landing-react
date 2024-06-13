import React from "react";
import star from "../assets/start_1.png";

function StarImage() {
  return (
    <img
      src={star}
      alt="start"
      width={100}
      className="d-block img responsive star-image-common-top"
    />
  );
}

export default StarImage;
