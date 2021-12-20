import React from "react";
import { Link } from "react-router-dom";
import "./HotelsDetails.css"

const HotelsDetails = (props) => {


  const { name, destination, desc, price, rating, des ,img} = props?.hotelDetails;
  const  dateDifference=props?.dateDifference;
  const roomType=props.roomType;
  const roomCount=props.roomCount
  //console.log(dateDifference)

  const handleBookingValue=()=>{

     const arrayOfData=[

      dateDifference,roomCount,roomType
     ]
  }


  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name:{name}</h5>
          <p className="card-text text-dark">Area:{destination}</p>
          <p className="card-text hotels-parra text-dark">{desc.slice(0,250)}</p>
          <p className="text-dark">{ des}</p>
          <p  className="text-dark" >{roomType} Price:{price} Tk Per Night</p>
          
          <p  className="text-dark">Rating:{rating}</p>
          <Link to="/booking"  
          
          ><button className="btn btn-danger">Book</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default HotelsDetails;
