import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about_img" />
        <img src={play_icon} alt="" className="play_icon" />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>World Best University in City</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
          Donec mollis hendrerit risus, sed vulputate diam tincidunt sed. Integer
          in ex nec libero imperdiet fermentum. Donec auctor turpis in feugiat
          laoreet.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
          Donec mollis hendrerit risus, sed vulputate diam tincidunt sed. Integer
          in ex nec libero imperdiet fermentum. Donec auctor turpis in feugiat
          laoreet.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
          Donec mollis hendrerit risus, sed vulputate diam tincidunt sed. Integer
          in ex nec libero imperdiet fermentum. Donec auctor turpis in feugiat
          laoreet.
        </p>
      </div>
    </div>
  );
};

export default About;
