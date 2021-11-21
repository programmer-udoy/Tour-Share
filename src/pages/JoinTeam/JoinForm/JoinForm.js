import React from "react";
import "./JoinForm.css";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const JoinForm = (props) => {
  const disabled = props.disabled;
  const userIdNumber = props.userIdNumber;
  const teamName=props.teamName;
  const slice=teamName.indexOf("_")
  const { register, handleSubmit, reset } = useForm();
  
  const { user } = useAuth();
  const onSubmit = (data) => {

    axios.post("http://localhost:5000/jointeam", data).then((res) => {
      console.log(res);
    if (res.data.insertedId) {
      alert("your join request has been send   succesfully");
      reset();
    }
  });
  };

  return (
    <div>
      <h1>this is Join form</h1>

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
          {...register("teamName")}
          disabled={disabled}
          value={teamName || ""}
          placeholder="Team Name"
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
          type="number"
          {...register("teamMember")}
          disabled={disabled}
          placeholder="Team Member"
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

        <input type="submit"  disabled={disabled}  />
      </form>
    </div>
  );
};

export default JoinForm;
