import React from "react";
import { useState } from "react";

import ActionButton from "./ActionButton";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

import "../modal.css";

const Modal = ({ userList, setUserList, handleShow, buttonType, setButtonType, currentUser }) => {
  const [userValues, setUserValues] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
  });
  //   const user = {
  //     id: 0,
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     age: 0,
  //   };
  const handleUserValueChange = (e) => {
    const { name, value } = e.target;
    setUserValues({
      ...userValues,
      [name]: value,
    });
  };

  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("aas");
  // F
  return (
    <div className="form-wrapper">
        <div className="form-header">
            <span>User details</span>
            <button onClick={handleShow}>x</button>
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
          
            userList={userList}
            setUserList={setUserList}
            handleShow={handleShow}
            userValues={userValues}
            setUserValues={setUserValues}
            action={"edit"}
            buttonType={buttonType}
            setButtonType={setButtonType}
            currentUser={currentUser}
          />
        </Grid>
      </form>
      </div>
    </div>
  );
};

export default Modal;
