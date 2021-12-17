import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import CreateForm from "../CreateForm/CreateForm";
import axios from "axios";

import useAuth from "../../../hooks/useAuth";

const IdVerification = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userIdNumber, setUserIdNumber] = useState("");
  const [nationaIdNumber, setNationalIdNumber] = useState([]);
  const [objectNationalId, setObjectNationalId] = useState({});
  const [arrayNationalId, setArrayNationalId] = useState([]);
  const [idError, setIdError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const { user } = useAuth();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  

  useEffect(() => {
    fetch("https://peaceful-caverns-31356.herokuapp.com/nid")
      .then((req) => req.json())
      .then((data) => setArrayNationalId(data));
  }, []);
  useEffect(() => {
    handleOpen();

    fetch("fakeapi.json")
      .then((req) => req.json())
      .then((data) => setNationalIdNumber(data));
  }, []);

  const nidPost = () => {
    axios.put("https://peaceful-caverns-31356.herokuapp.com/nid", objectNationalId).then((res) => {
      //console.log(res);
    });
  };

  const handleIdNumber = (e) => {
    const value = e.target.value;
    const nidObject={
      email:user.email,
      nidNumber:value
    }
    setObjectNationalId(nidObject);
    setUserIdNumber(value);
  };

  const handleIdSubmit = (e) => {
    e.preventDefault();

    const result = nationaIdNumber?.filter(
      (data) => parseInt(data?.nationalId) === parseInt(userIdNumber)
    );
   
    const matchId = arrayNationalId.find((data) =>data.nidNumber == userIdNumber )

    console.log(matchId?.nidNumber)
  
    if (!result?.length) {
      setIdError("Please provide your valid NID ");
      setUserIdNumber("");

      setDisabled(true);
      return;
    }

    if(matchId!==undefined &&matchId.email!==user.email){

      setIdError("already Nid taken");
      setUserIdNumber("");
      setDisabled(true);
    }
    
    else {
      setIdError("Valid NID");
      nidPost();
      setDisabled(false);
     
      handleClose();
    }
  };

  

  return (
    <div style={{ backgroundColor: "#ff914f" }}>
      <div>
        <Button className="mx-auto d-block text-light" onClick={handleOpen}>
          Verify National Id
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
        >
          <Box sx={style}>
            <form onSubmit={handleIdSubmit}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{
                  textAlign: "center",
                  fontWeight: "900",
                  color: "orangered",
                }}
              >
                Your National Id Number
              </Typography>

              <input type="number" name="" id="" onBlur={handleIdNumber} />

              <input
                style={{
                  display: "block",
                  color: "white",
                  marginLeft: "auto",
                  marginRight: "auto",
                  backgroundColor: "violet",
                  border: "2px solid white",
                  borderRadius: "8px",
                }}
                type="submit"
                value="submit"
              />
              <h5
                style={{
                  textAlign: "center",
                  fontWeight: "700",
                  color: "red",
                  marginTop: "10px",
                }}
              >
                {" "}
                {idError}
              </h5>
            </form>
          </Box>
        </Modal>
      </div>

      <form></form>

      <CreateForm
        disabled={disabled}
        userIdNumber={userIdNumber}
        key={Math.floor(Math.random() * 100)}
      ></CreateForm>
    </div>
  );
};

export default IdVerification;
