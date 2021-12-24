import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Navigation from '../../shared/Navigation/Navigation';

const Success = () => {
    const {id}=useParams()
    const [bookingInfo,setBookingInfo]=useState([])
    const history=useHistory()

    useEffect(()=>{

        fetch(`https://peaceful-caverns-31356.herokuapp.com/booking/${id}`)
        .then(res=>res.json())
        .then(data=>{
            //console.log(data)
            setBookingInfo(data)
        })

    },[id])

    const validatePayment=()=>{
      
       const data={
           tran_id:id,
           val_id:bookingInfo?.val_id
       }
      axios.post(`https://peaceful-caverns-31356.herokuapp.com/validate`,data)
      .then(res=>{
          console.log(res.data)
          if(res.data){
              alert("your booking successfully confirmed")
              history.push("/")
          }
      })
    }
    return (
        <>
        <Navigation></Navigation>
        <div className="card text-center w-50 mx-auto mt-5 mb-5">
  <div className="card-header">
    Your Booking Info
  </div>
  <div className="card-body " >
    <h5 className="card-title">{bookingInfo?.product_name}</h5>
 
    <p  className="card-text">You Booked {bookingInfo?.totalRoom} {bookingInfo?.roomType}</p>
    <p className="card-text">Your Total Amount:{bookingInfo?.total_amount} Tk</p>
   <button className='btn btn-danger' onClick={validatePayment}>Confirm</button>
  </div>
 
</div>

        </>
        
    );
};

export default Success;