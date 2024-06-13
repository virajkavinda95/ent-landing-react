import React, { useEffect, useState } from "react";
import headerLogo from "../assets/logo.png";

function Nav() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const [audioPermissionGranted, setAudioPermissionGranted] = useState(false);
  const requestAudioPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      console.log("Audio permission granted");
      setAudioPermissionGranted(true);
      // Now you can use the `stream` for audio processing or recording
    } catch (error) {
      console.error("Error accessing audio", error);
      setAudioPermissionGranted(false);
    }
  };
  useEffect(() => {
    requestAudioPermission();
  }, []);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <header>
      <nav className="header-nav">
        <div className="header-nav-box-one">
          <button className="btn btn-primary btn-sm top-common-butoon">
            English
          </button>
          <button
            type="button"
            onClick={requestAudioPermission}
            className="btn btn-primary btn-sm top-common-butoon"
          >
            {soundEnabled ? "enable" : "disable"}
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
