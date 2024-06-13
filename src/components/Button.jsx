import React from "react";

function Button(props) {
  return (
    <button type="button" className="btn btn-primary btn-sm common-btn-center">
      {props.text}
    </button>
  );
}

export default Button;
