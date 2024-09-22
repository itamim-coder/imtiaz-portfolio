/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Link } from "react-scroll";
import Imu from "../assets/imu.png";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { Social } from "./Social";

const Hero = () => (
  <div className="max-w-7xl mx-auto h-screen" id="">
    <div className="hero-overlay">
      <div className=" space-y-3">
        <h2 className="title">hELLO. i aM IMTIAZ</h2>
        {/* <NameSparkle /> */}
        <h3 className="tagline">
          <TypeAnimation
            sequence={["Web Developer", 1000, "Mobile Developer", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h3>
        <p className="text-lg mb-6">
          Creating digital solutions that reshape experiences
        </p>
        <div className="hero-btns mt-3">
          <button className="hire-me">
            <a
              href="https://drive.google.com/file/d/1An3oLYP1GwDgV6woZIKuzUQQButClHQu/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              GET MY CV
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              LET'S TALK
            </Link>
          </button>
        </div>
        <Social className="mt-16"/>
      </div>
      <Image
        src={Imu}
        alt="imtiaz"
        className="hero-image"
        height={150}
        width={150}
      />
    </div>
    <div className="social-icons">
      <a href="https://github.com/PrantoshB" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/prantosh"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin-in" />
      </a>
      <a
        href="https://wellfound.com/u/prantosh-biswas"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-angellist" />
      </a>
      <a
        href="https://www.twitter.com/prangasm"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitter" />
      </a>
      <a
        href="https://www.youtube.com/@prantalks"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-youtube" />
      </a>
    </div>
  </div>
);

export default Hero;
