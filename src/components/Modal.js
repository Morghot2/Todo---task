import React from "react";
import { useState, useContext } from "react";

import { UserContext } from "./App";

import ActionButton from "./ActionButton";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "../modal.css";

const MyModal = () => {
  const { handleShow, shown } = useContext(UserContext);
  const [modalShown, setModalShown] = shown;
  const [userValues, setUserValues] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
  });

  const handleUserValueChange = (e) => {
    const { name, value } = e.target;
    setUserValues({
      ...userValues,
      [name]: value,
    });
  };

  return (
    <Modal
      className="modal"
      open={modalShown}
      onClose={handleShow}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal-box">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
            
          }}
        >
          {" "}
          <Typography variant="h5">User details</Typography>
          <Button onClick={handleShow} color="error" size="medium">
            <CloseIcon />
          </Button>
        </div>

        <form className="user-form">
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
        
          >
            
            <Grid item>
              <TextField
                id="first-input"
                name="firstName"
                label="First Name"
                
                type="text"
                value={userValues.name}
                onChange={handleUserValueChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="last-name"
                name="lastName"
                label="Last Name"
                type="text"
                value={userValues.name}
                onChange={handleUserValueChange}
              />
            </Grid>
            <Grid item >
              <TextField
                id="email"
                name="email"
                label="Email"
                type="text"
                value={userValues.name}
                onChange={handleUserValueChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="age"
                name="age"
                label="Age"
                type="number"
                value={userValues.name}
                onChange={handleUserValueChange}
              />
            </Grid>
            <ActionButton userValues={userValues} action={"edit"} />
          </Grid>
        </form>
      </Box>
    </Modal>

  );
};

export default MyModal;
