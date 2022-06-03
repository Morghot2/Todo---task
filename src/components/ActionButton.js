import React, { useState } from "react";


import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const ActionButton = ({
  position,
  userList,
  setUserList,
  action,
  handleShow,
  userValues,
  buttonType,
  currentUser,
}) => {

  const handleUser = () => {
    
    if (action === "delete") {
      
      setUserList(
        userList.filter((user) => position !== userList.indexOf(user))
      );
    } else if (buttonType === "new") {
      
      setUserList([...userList, userValues]);
      handleShow();

    } else if (buttonType === "edit") {
     
      const updateUser = [...userList];
      updateUser[currentUser] = userValues;

      setUserList([...updateUser]);
      handleShow();
    }
  };
  const icon = <DeleteIcon></DeleteIcon>


  return (
    // <Stack direction="row">
    <Button variant="contained" color={'error'} onClick={handleUser}>
      {icon}
    </Button>
    // </Stack>
  );
};

export default ActionButton;
