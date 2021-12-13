import React from "react";
import "./SingleTrandingPlace.css";

const SingleTrandingPlace = (props) => {
  const { place, img, des } = props.singleTranding;
  return (
    
      <div className="single-tranding-container ">
      <img src={img} className="image-set" alt="tranding"/>
        <h5 className="tranding-place">{place}</h5>
        <p className="tranding-desc ">
         {des.slice(0,300)}
        </p>
      <button className="btn btn-info d-block mx-auto mb-3 tranding-button">Read More</button>
    </div>
  );
};

export default SingleTrandingPlace;
