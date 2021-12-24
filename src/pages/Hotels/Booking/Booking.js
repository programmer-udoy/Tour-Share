import React, { useEffect, useState,useRef } from "react";

import useAuth from "../../../hooks/useAuth";

import { useLocation } from "react-router-dom";
import Navigation from "../../shared/Navigation/Navigation";
import Footer from "../../shared/Footer/Footer";

const Booking = () => {
  const location = useLocation();
  const { fromNotifications } = location?.state;
  const { user } = useAuth();

  const [totalCost,setTotalCost]=useState()
  const phoneref=useRef()
  const addressref=useRef()
  const arrivalref=useRef()


  useEffect(()=>{
    let totalCost =
           parseFloat(fromNotifications[4].hotelPrice) *
          parseFloat(fromNotifications[1].roomCount) *
          parseFloat(fromNotifications[0].dateDifference);
         
          setTotalCost(totalCost) 
         
  },[fromNotifications])
  
  
    
const purchase=()=>{
  const phoneNumber=(phoneref.current.value)
  const address=addressref.current.value
  const arrivaltime=arrivalref.current.value
   
   const bookingDetails={

      userName:user.displayName,
      userEmail:user.email,
      hotelCost:totalCost,
      hotelName:fromNotifications[3].hotelName ,
      roomType:fromNotifications[2].roomType,
      totalRoom:fromNotifications[1].roomCount,
      checkIn:fromNotifications[5].startDate,
      checkOut:fromNotifications[6].endDate,
      phoneNumber:phoneNumber,
      address:address,
      arrivalTime:arrivaltime    
   }
   fetch(`https://peaceful-caverns-31356.herokuapp.com/init`,{

    method:"POST",
    headers: {
     'Content-Type': 'application/json'
     // 'Content-Type': 'application/x-www-form-urlencoded',
   },
   body: JSON.stringify(bookingDetails)
 })
 .then(res=>res.json())
 .then(data=>{

  window.location.replace(data)
 })
}

 
  

  return (
    <div>
      <Navigation></Navigation>
      <h1>this is booking</h1>
      <div >
        <div style={{ display: "none" }}>
          <label className="label-style" htmlFor="">
            User Name:
          </label>
          <input
            type="text"
         
            value={user.displayName || ""}
            placeholder="User Name"
            className="d-inline"
            readOnly
            required
          />
        </div>

        <div style={{ display: "none" }}>
          <label className="label-style" htmlFor="">
            Email:
          </label>
          <input
            type="email"
            
            value={user.email || ""}
            placeholder="User Email"
            className="d-inline"
            readOnly
            required
          />
        </div>
        <div style={{ display: "none" }}>
          <label className="label-style" htmlFor="">
            Hotel Name:
          </label>
          <input
            type="text"
            
            value={fromNotifications[3].hotelName || ""}
            placeholder="Hotel Name"
            className="d-inline"
            readOnly
            required
          />
        </div>

        <div>
          <label className="label-style" htmlFor="">
            Room Type:
          </label>
          <input
            type="text"
           
            value={` ${fromNotifications[2].roomType}` || ""}
            readOnly
            placeholder="Team Member"
            className="d-inline"

            required
          />
        </div>

        <div>
          <label className="label-style" htmlFor="">
            Total Room:
          </label>
          <input
            type="text"
          
            value={fromNotifications[1].roomCount || ""}
            readOnly
            placeholder="Address"
            className="d-inline"
            required
          />
        </div>

        <div>
          <label className="label-style" htmlFor="">
            Total Stay :
          </label>
          <input
            type="text"
         
            value={`${fromNotifications[0].dateDifference} night` || ""}
            readOnly
            placeholder="End Date"
            className="d-inline"
            required
          />
        </div>
        <div>
          <label className="label-style" htmlFor="">
            Total Cost:
          </label>
          <input
            type="text"
            
            value={ `${totalCost } `}
            placeholder="Team Name"
            className="d-inline"
            readOnly
            required
          />
        </div>
        <div>
          <label className="label-style" htmlFor="">
            Check In:
          </label>
          <input
            type="text"
            
            value={fromNotifications[5].startDate || ""}
            readOnly
            placeholder="User Phone Number"
            className="d-inline"
            required
          />
        </div>
        <div>
          <label className="label-style" htmlFor="">
            Check Out:
          </label>
          <input
            type="text"
            
            value={fromNotifications[6].endDate || ""}
            readOnly
            placeholder="End Date"
            className="d-inline"
            required
          />
        </div>
        <div>
          <label className="label-style" htmlFor="">
            Arrival time:
          </label>
          <input
            type="time"
            ref={arrivalref}
           
            placeholder="Your arrival time"
            className="d-inline"
            required
          />
        </div>
        <div>
          <label className="label-style" htmlFor="">
            Phone Number:
          </label>
          <input
            type="tel"
            ref={phoneref}
          
            placeholder="Your Phone Number"
            className="d-inline"
            pattern="(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$"
            required
          />
        </div>
        <div>
          <label className="label-style" htmlFor="">
            Address:
          </label>
          <input
          ref={addressref}
          
            type="text"
            
            placeholder="Your Address"
            className="d-inline"
            required
          />
        </div>
      <button onClick={purchase}> Book</button>
       
      </div>
     <Footer></Footer>
    </div>
  );
};

export default Booking;

// const totalCost =
//       parseFloat(fromNotifications[4].hotelPrice) *
//       parseFloat(fromNotifications[1].roomCount) *
//       parseFloat(fromNotifications[0].dateDifference);
//      setTotalCost(parseFloat(totalCost) )
//      console.log(totalCost) 