import React from "react";
import SectionOne from "./pages/SectionOne";
import SectionTwo from "./pages/SectionTwo";
import SectionThree from "./pages/SectionThree";
import SectionFour from "./pages/SectionFour";
import "./App.css";
import Nav from "./components/Nav";
import SectionFive from "./pages/SectionFive";
import SectionSix from "./pages/SectionSix";
import { useSelector } from "react-redux";

function App() {
  const lang = useSelector((state) => state.language.lang);
  const sounds = useSelector((state) => state.sound.sounds);

  return (
    <>
      <Nav />
      <SectionOne lang={lang} sound={sounds} />
      <SectionTwo lang={lang} sound={sounds} />
      <SectionThree lang={lang} sound={sounds} />
      <SectionFour lang={lang} sound={sounds} />
      <SectionFive lang={lang} sound={sounds} />
      <SectionSix lang={lang} sound={sounds} />
    </>
  );
}

export default App;
