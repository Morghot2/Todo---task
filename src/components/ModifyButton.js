import React, { useContext } from "react";

import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { UserContext } from "./App";
import { changeCurrentUser } from "../redux/currentUserSlice";
import { useDispatch } from "react-redux";

const ModifyButton = ({ action, position }) => {
  const dispatch = useDispatch();

  const { handleButtonType, handleShow } = useContext(UserContext);
  const handleButtonClick = () => {
    handleShow();
    handleButtonType(action);
    if (position >= 0) {
      dispatch(changeCurrentUser(position));
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
