import React from "react";
import "./CreateForm.css";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const CreateForm = (props) => {
  const disabled = props.disabled;
  const userIdNumber = props.userIdNumber;
  const { register, handleSubmit, reset } = useForm();
  
  const { user } = useAuth();
  const onSubmit = (data) => {

   const teamName= data.teamName;
   const uniqueID=Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))

   
       const newTeamName=teamName.concat("_id"+uniqueID)
       data.teamName=newTeamName
       console.log(data)
     
    axios.post("http://localhost:5000/createteam", data).then((res) => {
        console.log(res);
      if (res.data.insertedId) {
        alert("your team  has been created  succesfully");
        reset();
      }
    });
  };

  return (
    <div style={{backgroundColor:"orange"}}>
      <h1>CREATE TEAM</h1>

      <form onSubmit={handleSubmit(onSubmit)} >

        <div>
        <label className="label-style" htmlFor="">National Id:</label>
        <input
          type="number"
          {...register("nationalId")}
          disabled={disabled}
          value={userIdNumber || ""}
          placeholder="National Id Number"
          className="d-inline"
          readOnly
          required
        />
        </div>

        
        <div>
        <label className="label-style" htmlFor="">User Name:</label>
        <input
          type="text"
          {...register("userName")}
          disabled={disabled}
          value={user.displayName || ""}
          placeholder="User Name"
          className="d-inline"
          readOnly
          required
        />
        </div>
        <div>
        <label className="label-style" htmlFor="">Email:</label>
        <input
          type="email"
          {...register("userEmail")}
          disabled={disabled}
          value={user.email || ""}
          placeholder="User Email"
          className="d-inline"
          readOnly
          required
        />
        </div>

        <div>
        <label className="label-style" htmlFor="">Destination:</label>
        <input
          type="text"
          {...register("destination")}
          disabled={disabled}
          placeholder="Destination"
          className="d-inline"
          required
        />
        </div>

        <div>
        <label className="label-style" htmlFor="">Team Name:</label>
        
        <input
          type="text"
          {...register("teamName")}
          disabled={disabled}
          placeholder="Team Name"
          className="d-inline"

          required
        />
        </div>
        <div>
        <label className="label-style" htmlFor="">Team Member:</label>
        
        <input
          type="number"
          {...register("teamMember")}
          disabled={disabled}
          placeholder="Team Member"
          className="d-inline"

          required
        />
        </div>

        <div>
        <label className="label-style" htmlFor="">Needed Member:</label>
        
        <input
          type="number"
          {...register("neededMember")}
          disabled={disabled}
          placeholder="Needed Member"
          className="d-inline"

          required
        />
        </div>


        <div>
        <label className="label-style" htmlFor="">Start Date:</label>
        
        <input
          type="date"
          {...register("startDate")}
          disabled={disabled}
          placeholder="Start Date"
          className="d-inline"

          required
        />
        </div>


        <div>
        <label className="label-style" htmlFor="">End Date:</label>
        
        <input
          type="date"
          {...register("endDate")}
          disabled={disabled}
          placeholder="End Date"
          className="d-inline"

          required
        />
        </div>


        
        <div>
        <label className="label-style" htmlFor="">Address:</label>
        
        <input
          type="text"
          {...register("address")}
          placeholder="Address"
          className="d-inline"

          disabled={disabled}
          required
        />
        </div>


        <div>
        <label className="label-style" htmlFor="">Phone Number:</label>
        
        <input
          type="tel"
          {...register("phoneNumber")}
          disabled={disabled}
          placeholder="User Phone Number"
          className="d-inline"

          required
        />
        </div>


        

        
       
       

        
      
        
        
     
    
        

        
        
        
       

        

        <input type="submit"  className="form-button-style " value="CREATE" disabled={disabled} />
      </form>
    </div>
  );
};

export default CreateForm;
