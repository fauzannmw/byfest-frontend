import React from "react";
import { Parallax } from "react-parallax";
import bgImage from "../../assets/image/Jumbotron-Byfest.jpg";
import logoUtama from "../../assets/image/byfest_kuning.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <Parallax bgImage={bgImage} strength={600}>
      <div className="hero">
        <img src={logoUtama} alt="" />
        <h1>BRAWIJAYA FILM FESTIVAL</h1>
        <p>19 - 20 Oktober 2021</p>
      </div>
    </Parallax>
  );
};

export default Hero;
