import React from "react";
import "./JoinForm.css";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const JoinForm = (props) => {
  const disabled = props.disabled;
  const userIdNumber = props.userIdNumber;
  const teamName = props.teamName;
  const slice = teamName.indexOf("_");
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
    <div style={{ backgroundColor: "orange" }}>
      <h1>JOIN TEAM</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="label-style" htmlFor="">
            National Id:
          </label>
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
          <label className="label-style" htmlFor="">
            Team Name:
          </label>
          <input
            type="text"
            {...register("teamName")}
            disabled={disabled}
            value={teamName || ""}
            placeholder="Team Name"
            className="d-inline"
            readOnly
            required
          />
        </div>

        <div>
          <label className="label-style" htmlFor="">
            User Name:
          </label>
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
          <label className="label-style" htmlFor="">
            Email:
          </label>
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
          <label className="label-style" htmlFor="">
            Team Member:
          </label>
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
          <label className="label-style" htmlFor="">
            Address:
          </label>
          <input
          type="text"
          className="mx-auto float-none d-block"
          {...register("address")}
          placeholder="Address"
          className="d-inline"
          disabled={disabled}
          required
        />
        </div>


     

        <div>
          <label className="label-style" htmlFor="">
            Phone Number:
          </label>
          <input
          type="tel"
          {...register("phoneNumber")}
          disabled={disabled}
          placeholder="User Phone Number"
          className="d-inline"
          required
        />
        </div>

    

      

        <input
          type="submit"
          value="JOIN"
          className="form-button-style "
          disabled={disabled}
        />
      </form>
    </div>
  );
};

export default JoinForm;
