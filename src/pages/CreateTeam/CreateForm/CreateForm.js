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
    <div>
      <h1>this is create form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          {...register("nationalId")}
          disabled={disabled}
          value={userIdNumber || ""}
          placeholder="National Id Number"
          readOnly
          required
        />
        <input
          type="text"
          {...register("userName")}
          disabled={disabled}
          value={user.displayName || ""}
          placeholder="User Name"
          readOnly
          required
        />
        <input
          type="email"
          {...register("userEmail")}
          disabled={disabled}
          value={user.email || ""}
          placeholder="User Email"
          readOnly
          required
        />
        <input
          type="text"
          {...register("destination")}
          disabled={disabled}
          placeholder="Destination"
          required
        />
        <input
          type="text"
          {...register("teamName")}
          disabled={disabled}
          placeholder="Team Name"
          required
        />
        <input
          type="number"
          {...register("teamMember")}
          disabled={disabled}
          placeholder="Team Member"
          required
        />
        <input
          type="number"
          {...register("neededMember")}
          disabled={disabled}
          placeholder="Needed Member"
          required
        />

        <input
          type="date"
          {...register("startDate")}
          disabled={disabled}
          placeholder="End Date"
          required
        />
        <input
          type="date"
          {...register("endDate")}
          disabled={disabled}
          placeholder="End Date"
          required
        />
        
        <textarea
          className="mx-auto float-none d-block"
          {...register("address")}
          placeholder="Address"
          disabled={disabled}
          required
        />

        <input
          type="tel"
          {...register("phoneNumber")}
          disabled={disabled}
          placeholder="User Phone Number"
          required
        />

        <input type="submit"  disabled={disabled} />
      </form>
    </div>
  );
};

export default CreateForm;
