import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./Residencies.css";
import "swiper/css";
import { sliderSettings } from "../../utils/common.js";
import PropertyCard from "../PropertyCard/PropertyCard.jsx";
import useProperties from "../../hooks/useProperties.jsx";
import { PuffLoader } from "react-spinners";

const Residencies = () => {
  const {data, isError, isLoading} = useProperties()
  if(isError){
    return(
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    )
  }
  if(isLoading){
    return(
      <div className="wrapper flexCenter" style={{height:"60vh"}}>
        <PuffLoader 
        width="80"
        height="80"
        radius={1}
        color="#4066ff"
        aria-label="puff-loading"/>
      </div>
    )
  }
  return (
    <section className="resd-wrapper">
      <div className="paddings innerWidth resd-container">
        <div className="resd-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.slice(0,8).map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter resd-button">
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  );
};
