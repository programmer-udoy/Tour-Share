import React, { useState } from "react";
import { Alert } from "@mui/material";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    const emailinfo = e.target.value;
    setEmail(emailinfo);
  };
  const handleSumbit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-center text-danger fw-bold">Make Admin</h1>
      <form onSubmit={handleSumbit}>
        <input
          type="email"
          placeholder="email"
          required
          onBlur={handleOnBlur}
        />
        <input
          type="submit"
          className="text-center mx-auto d-block w-25 mb-3 mt-3"
          value="submit"
          required
        />
      </form>
      {success && <Alert severity="success">Made Admin successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
