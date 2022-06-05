import React, { useState, useContext } from "react";
import { UserContext } from "./App";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const ActionButton = ({ position, action, userValues }) => {
  const { buttonType, handleShow, currentUser, userList } =
    useContext(UserContext);
  const [usersList, setUsersList] = userList;
  const [buttonsType, setButtonsType] = buttonType;
  const [currentsUser, setCurrentsUser] = currentUser;

  let buttonProperties = {text: "", color: ""};



  if (action === "delete") {
    buttonProperties.text = <DeleteIcon />
    buttonProperties.color = "error"
  } else if (buttonsType === "edit") {
    buttonProperties.text = "Update"
    buttonProperties.color = "warning"
  } else {
    buttonProperties.text = "Add"
    buttonProperties.color = "primary"
  }

  const handleUser = () => {
    if (action === "delete") {
      setUsersList(
        usersList.filter((user) => position !== usersList.indexOf(user))
      );
    } else if (buttonsType === "new") {
      setUsersList([...usersList, userValues]);
      handleShow();
    } else if (buttonsType === "edit") {
      const updateUser = [...usersList];
      updateUser[currentsUser] = userValues;

      setUsersList([...updateUser]);
      handleShow();
    }

   
  };

  return (
    <Button variant="contained" color={buttonProperties.color} onClick={handleUser}>
      {buttonProperties.text}
    </Button>
  );
};

export default ActionButton;
