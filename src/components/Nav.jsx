import React, { useEffect, useState } from "react";
import headerLogo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../slices/languageSlice";
import { setSound } from "../slices/audioSlice";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

function Nav() {
  const dispatch = useDispatch();

  const [isEnglish, setIsEnglish] = useState(true);
  const [isMute, setIsMute] = useState(false);

  const handleLanguageChange = (language) => {
    setIsEnglish((prev) => !prev);
    dispatch(setLang(language));
  };

  const handleAudioMute = () => {
    setIsMute((prev) => !prev);
    dispatch(setSound(isMute));
  };

  useEffect(() => {}, []);

  return (
    <header>
      <nav className="header-nav">
        <div className="header-nav-box-one">
          <input
            type="button"
            onClick={(e) => handleLanguageChange(e.target.value)}
            value={isEnglish ? "English" : "Arabic"}
            className="btn btn-primary btn-sm top-common-butoon"
          />

          {/* <BootstrapSwitchButton
            checked={isMute}
            onlabel={<FaVolumeHigh />}
            onstyle="danger"
            offlabel={<FaVolumeXmark />}
            offstyle="success"
            style="w-100 mx-3"
          /> */}
          <button
            type="button"
            onClick={handleAudioMute}
            className={`btn btn-primary btn-sm top-common-butoon ${
              isMute ? "mute" : "unmute"
            }`}
          >
            {isMute ? <FaVolumeHigh /> : <FaVolumeXmark />}
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
