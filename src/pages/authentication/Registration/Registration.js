import React, { useState } from "react";

import Navigation from "../../shared/Navigation/Navigation";
import "./Registration.css";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";

const Registration = () => {
  const [registerData, setRegisterData] = useState({});
  const [registerError, setRegisterError] = useState("");
  const { user, registerUser, loading, error,signInWithGoogle } = useAuth();
  const history = useHistory();
  const location=useLocation()

  const handleRegisterData = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    if (newRegisterData?.password1?.length < 6) {
      setRegisterError("password length should be at least 6");
      return;
    } else {
      setRegisterError("");
      setRegisterData(newRegisterData);
      console.log(newRegisterData);
    }
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    if (registerData?.password1 !== registerData?.password2) {
      setRegisterError("Your password did not match");
      return;
    }

    registerUser(
      registerData?.email,
      registerData?.password1,
      registerData?.userName,
      history,
      location
    );
  };

  const handleGoogleSignIn=()=>{
    signInWithGoogle(location, history)

  }

  return (
    <div>
      <Navigation></Navigation>
      <div className="login-container text-center">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            Tourshare
          </Grid>
          <Grid item xs={12} sm={6}>
            <form
              className="login-form  text-center"
              onSubmit={handleRegistrationSubmit}
            >
              <h1 className="bg-primary mb-5 lh-lg text-light">Register </h1>
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                onBlur={handleRegisterData}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                onBlur={handleRegisterData}
                required
              />

              <input
                type="password"
                name="password1"
                placeholder="Password"
                onBlur={handleRegisterData}
                required
              />
              <input
                type="password"
                name="password2"
                placeholder="Retype Password"
                onBlur={handleRegisterData}
                required
              />
              {error && <Alert severity="error">{error}</Alert>}
              <p>{registerError}</p>

              <input
                className="login-button bg-primary"
                type="submit"
                value="Register"
              />
              <p className="forget-password-style mt-3">Or Login With</p>
              <Button
                style={{
                  backgroundColor: "blue",
                  width: "100px",
                  color: "white",
                }}
              >
                <i className="fab fa-facebook-square fa-2x"></i>
              </Button>
              <Button
              onClick={handleGoogleSignIn}
                style={{
                  backgroundColor: "red",
                  width: "100px",
                  color: "white",
                  margin: "8px",
                }}
              >
                <i className="fab fa-google-plus fa-2x"></i>
              </Button>
              <Button
                style={{
                  backgroundColor: "rgb(139, 0, 139)",
                  width: "100px",
                  color: "white",
                }}
              >
                <i className="fab fa-yahoo fa-2x"></i>
              </Button>
              <Link to="/login" className="forget-password-style mt-3">
                {" "}
                Already have an account?Login
              </Link>
              {loading && <CircularProgress />}
              {user?.email && (
                <Alert severity="success">User Created Succesfully</Alert>
              )}
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Registration;
