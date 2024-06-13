import React from "react";
import SectionOne from "./pages/SectionOne";
import SectionTwo from "./pages/SectionTwo";
import SectionThree from "./pages/SectionThree";
import SectionFour from "./pages/SectionFour";
import "./App.css";
import Nav from "./components/Nav";
import SectionFive from "./pages/SectionFive";

function App() {
  return (
    <>
      <Nav />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </>
  );
}

export default App;
