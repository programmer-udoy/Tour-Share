
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import useAuth from "../../../hooks/useAuth";
// import axios from "axios";

// const BookingForm = (props) => {
//     const {dateDifference, roomCount,roomType,hotelName,hotelPrice,startDate,endDate}=(props?.bookingData);
//      const {user}=useAuth();
     
//      const { register, handleSubmit } = useForm();
//      const onSubmit = data => console.log(data);

//      console.log(roomCount,roomType)
 
//     return (
//         <div>
//          <form onSubmit={handleSubmit(onSubmit)}>
//          <div>
//           <label className="label-style" htmlFor="">
//             User Name:
//           </label>
//           <input
//             type="text"
//             {...register("userName")}
    
//             value={user?.displayName || ""}
//             placeholder="User Name"
//             className="d-inline"
//             readOnly
//             required
//           />
//         </div>

//         <div>
//           <label className="label-style" htmlFor="">
//             Email:
//           </label>
//           <input
//             type="email"
//             {...register("userEmail")}
           
//             value={user?.email || ""}
//             placeholder="User Email"
//             className="d-inline"
//             readOnly
//             required
//           />
//         </div>
//         <div>
//           <label className="label-style" htmlFor="">
//             Hotel Name:
//           </label>
//           <input
//             type="text"
//             {...register("hotelName")}
           
//             value={hotelName || ""}
//             placeholder="Hotel Name"
//             className="d-inline"
//             readOnly
//             required
//           />
//         </div>

//         <div>
//           <label className="label-style" htmlFor="">
//             Hotel Price:
//           </label>
//           <input
//             type="text"
//             {...register("hotelPrice")}
            
//             value={hotelPrice || ""}
//             placeholder="Team Name"
//             className="d-inline"
//             readOnly
//             required
//           />
//         </div>

       

//         <div>
//           <label className="label-style" htmlFor="">
//             Room Type:
//           </label>
//           <input
//             type="text"
//             {...register("roomType")}
//             value={roomType || ""}
       
//             placeholder="Team Member"
//             className="d-inline"
//             required
//           />
//         </div>

//         <div>
//           <label className="label-style" htmlFor="">
//             Total Room:
//           </label>
//           <input
//             type="text"
//             {...register("roomCount")}
//             value={roomCount || ""}
//             placeholder="Address"
//             className="d-inline"
           
//             required
//           />
//         </div>

//         <div>
//           <label className="label-style" htmlFor="">
//             Start Date:
//           </label>
//           <input
//             type="date"
//             {...register("startDate")}
//             value={startDate || ""}
//             placeholder="User Phone Number"
//             className="d-inline"
            
//             required
//           />
//         </div>
//         <div>
//           <label className="label-style" htmlFor="">
//             End Date:
//           </label>
//           <input
//             type="date"
//             {...register("endDate")}
//             value={endDate || ""}
//             placeholder="End Date"
//             className="d-inline"
            
//             required
//           />
//         </div>
//         <div>
//           <label className="label-style" htmlFor="">
//             Stay :
//           </label>
//           <input
//             type="number"
//             {...register("dateDifference")}
//             value={dateDifference|| ""}
//             placeholder="End Date"
//             className="d-inline"
            
//             required
//           />
//         </div>

//         <input
//           type="submit"
//           value="JOIN"
//           id="join-button"
//           className="form-button-style "
         
//         />
//       </form>
//         </div>
//     );
// };

// export default BookingForm;