import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

import CreateForm from "../CreateForm/CreateForm";

const IdVerification = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userIdNumber, setUserIdNumber] = useState("");
  const [nationaIdNumber, setNationalIdNumber] = useState([]);
  const [idError, setIdError] = useState("");
  const [disabled, setDisabled] = useState(true);

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

  const handleIdNumber = (e) => {
    const value = e.target.value;
    setUserIdNumber(value);
    // console.log(nationaIdNumber)
  };

  const handleIdSubmit = (e) => {
    e.preventDefault();

    const result = nationaIdNumber?.filter(
      (data) => parseInt(data?.nationalId) === parseInt(userIdNumber)
    );
    // console.log(result.length)
    if (!result?.length) {
      setIdError("data is wrong");
      setUserIdNumber("");

      setDisabled(true);
      return;
    } else {
      setIdError("data is valid");
      setDisabled(false);
      handleClose();
    }
  };

  useEffect(() => {
    handleOpen();

    fetch("fakeapi.json")
      .then((req) => req.json())
      .then((data) => setNationalIdNumber(data));
  }, []);

  return (
    <div>
      <div>
        <Button className="mx-auto d-block" onClick={handleOpen}>
          Verify National Id
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleIdSubmit}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Your National Id Number
              </Typography>
              <TextField
                id="standard-basic"
                name="idNumber"
                onBlur={handleIdNumber}
                variant="standard"
              />
              <input type="submit" value="submit" />
              <h5> {idError}</h5>
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
