import React from "react";
import headerLogo from "../assets/logo.png";

function Nav() {
  return (
    <header>
      <nav className="header-nav">
        <div className="header-nav-box-one">
          <button className="btn btn-primary btn-sm top-common-butoon">
            English
          </button>
          <button className="btn btn-primary btn-sm top-common-butoon">
            Sound
          </button>
        </div>

        <div className="header-nav-box-two">
          <img
            src={"#"}
            alt="headerLogo"
            className="d-block img-responsive header-nav-logo"
            width={100}
          />
        </div>

        <div className="header-nav-box-three">
          <button className="btn btn-primary btn-sm">English</button>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
