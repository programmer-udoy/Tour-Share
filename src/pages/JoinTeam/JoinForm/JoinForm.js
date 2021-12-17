import React, { useEffect, useState } from "react";
import "./JoinForm.css";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

import SendMessage from "../SendMeassage/SendMessage";

const JoinForm = (props) => {
  // console.log(props)
  const disabled = props.disabled;
  const userIdNumber = props.userIdNumber;
  const teamName = props.teamName;
  const [createUserEmail, setUserEmail] = useState("");
  
  const [clickvalue, setClickValue] = useState(null);
  const slice = teamName.indexOf("_");
  const { register, handleSubmit, reset } = useForm();

  const { user } = useAuth();

  useEffect(() => {
    let isMounted = true;
    fetch(`https://peaceful-caverns-31356.herokuapp.com/createteambyTeam?teamName=${teamName}`)
      .then((req) => req.json())
      .then((data) => {
        if (isMounted) 
        setUserEmail(data[0]?.userEmail);
        
      });
    return () => {
      isMounted = false;
    };
  }, [teamName]);
  const onSubmit = (data) => {
    //console.log(data)
    axios
      .post("https://peaceful-caverns-31356.herokuapp.com/jointeam", data)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          alert("your join request has been send   succesfully");
          reset();
        }
      });
    const clickButton = document.getElementById("join-button");
    setClickValue(clickButton.value);
  };

  return (
    <div style={{ backgroundColor: "#ff914f" }}>
      <h1 className="text-center">JOIN TEAM</h1>

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
            pattern="(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$"
            required
          />
        </div>

        <input
          type="submit"
          value="JOIN"
          id="join-button"
          className="form-button-style "
          disabled={disabled}
        />
      </form>

      <SendMessage
        createUserEmail={createUserEmail}
       
        clickvalue={clickvalue}
        key={Math.random()}
      ></SendMessage>
    </div>
  );
};

export default JoinForm;
