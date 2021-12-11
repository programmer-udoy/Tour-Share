import React, { useState } from "react";
import Navigation from "../../shared/Navigation/Navigation";
import "./Login.css";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Alert, Button, CircularProgress } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import { useHistory,useLocation} from "react-router";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const history = useHistory();
  const { user, loginUser, loading,error,signInWithGoogle } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
    console.log(loginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData?.email, loginData?.password, location, history);
    e.preventDefault();
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
            <form onSubmit={handleLoginSubmit} className="login-form  text-center">
              <h1 className="bg-primary mb-5 lh-lg text-light">Login </h1>

             

            <input onBlur={handleOnBlur} type="email" name="email" placeholder="Email" /> 
             
              <input onBlur={handleOnBlur} type="password" name="password" placeholder="Password" />
              <p className="text-danger fw-bold"> {error}</p>
              <Link className="forget-password-style mt-3">
                Forget Password
              </Link>

              <input
                className="login-button bg-primary"
                type="submit"
                value="Login"
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
             
              <Link to="/register" className="forget-password-style mt-3">
                {" "}
                Don't have an account?Register
              </Link>
              {loading && <CircularProgress />}
            {user?.email && <Alert severity="success">Login Succesfully</Alert>}
         
            </form>
           
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
