import React, { useContext } from "react";
import { UserContext } from "./App";


import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const ModifyButton = ({ action, position }) => {
  const { handleButtonType, handleShow, changeCurrentUser } =
    useContext(UserContext);
  const handleButtonClick = () => {
    console.log(position)
    handleShow();
    handleButtonType(action);
    if (position >= 0) {
      changeCurrentUser(position);
    } else return null;
  };
  if (action === "new") {
    return (
      <Button variant="contained" onClick={handleButtonClick}>
        New
      </Button>
    );
  }
  if (action === "edit") {
    return (
      <Button variant="contained" color="warning" onClick={handleButtonClick}>
        <EditIcon />
      </Button>
    );
  }
};

export default ModifyButton;
