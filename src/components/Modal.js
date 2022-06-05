import React from "react";
import { useState } from "react";

import ActionButton from "./ActionButton";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@mui/material/Button";

import "../modal.css";

const Modal = ({ handleShow }) => {
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
    <div className="form-wrapper">
      <div>
        <div className="form-header">
          <span>
            <h2>User details</h2>
          </span>
          <Button onClick={handleShow} color="error" size="medium">
            <CloseIcon></CloseIcon>
          </Button>
        </div>
        <div>
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
              <Grid item>
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
              <ActionButton
                userValues={userValues}
                setUserValues={setUserValues}
                action={"edit"}
              />
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
