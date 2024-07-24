import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import {motion} from 'framer-motion';
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter innerWidth paddings hero-container">
        {/*left side*/}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="title-circle"></div>
            <motion.h1
            initial={{y: "2rem",opacity:0}}
            animate={{y: 0,opacity:1}}
            transition={{duration:2, type:"spring"}}
            >
              Discover <br />
              Your Peace <br /> & Comfort
            </motion.h1>
          </div>
          <div className="flexColStart hero-desc">
            <span className="secondaryText">Find a variety of properties that suit you very easily</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>
         
         <SearchBar/>

          <div className="flexCenter hero-stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={5500} end={6000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1850} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={16} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>

        </div>
        {/*right side*/}
        <motion.div 
        initial={{x: "7rem", opacity:0}}
        animate={{x: 0, opacity:1}}
        transition={{duration: 2, type:"spring"}}
        className="flexCenter hero-right">
          <div className="img-container">
            <img src="./value.png" alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
