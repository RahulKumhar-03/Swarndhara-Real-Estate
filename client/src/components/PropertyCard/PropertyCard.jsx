import React from "react";
import "./PropertyCard.css";
import { AiFillHeart } from "react-icons/ai";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";
const PropertyCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flexColStart resd-card"
      onClick={() => navigate(`../properties/${card.id}`)}
    >
      <Heart id={card?.id}/>
      <img src={card.image} alt="home-img" />
      <span className="resd-price secondaryText">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>

      <span className="primaryText">
        {truncate(card.title, { length: 15 })}
      </span>
      <span className="secondaryText">
        {truncate(card.description, { length: 100 })}
      </span>
    </div>
  );
};

export default PropertyCard;
