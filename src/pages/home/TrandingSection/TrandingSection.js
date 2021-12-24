import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleTrandingPlace from "../SingleTrandingPlace/SingleTrandingPlace";
import "./TrandingSection.css";

const TrandingSection = () => {
  const [trandingPlace, setTrandingPlace] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-caverns-31356.herokuapp.com/tranding")
      .then((res) => res.json())
      .then((data) => setTrandingPlace(data));
  }, []);
  return (
    <div>
      <h1 className="tranding-text">TRENDING PLACES</h1>
      <div className="tranding-section ">
        {trandingPlace.map((singleTranding) => (
          <SingleTrandingPlace
            key={singleTranding._id}
            singleTranding={singleTranding}
          ></SingleTrandingPlace>
        ))}
      </div>
    </div>
  );
};

export default TrandingSection;
