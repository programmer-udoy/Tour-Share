import React from "react";

const HotelsDetails = (props) => {
  // const [singleHotel,setSingleHotel]=useState({})

  const { name, destination, desc, price, rating, des ,img} = props?.hotelDetails;

  //  if(Object.keys(props).length>0){

  //       setSingleHotel(props)
  //       console.log(singleHotel)
  //  }

  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{destination}</p>
          <p className="card-text">{desc}</p>
          <p>{ des}</p>
          <p>{price}</p>
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default HotelsDetails;
