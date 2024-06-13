import React from "react";

function Card({ image, type }) {
  return (
    <div className={`common-card-center ${type}`}>
      <div className="inner-card">
        <img
          src={image}
          alt="inner-card-img"
          className={`d-block img-responsive common-card-inner-image`}
        />
      </div>
    </div>
  );
}

export default Card;
