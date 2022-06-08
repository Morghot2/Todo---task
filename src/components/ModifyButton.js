import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeButtonType, changeModal } from "../redux/slices/buttonSlice";
import { changeCurrentUser } from "../redux/slices/currentUserSlice";

import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const ModifyButton = ({ action, position }) => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.button.show);
  const handleButtonClick = () => {
    dispatch(changeModal(!type));
    dispatch(changeButtonType(action));

    if (position >= 0) {
      dispatch(changeCurrentUser(position));
    }
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
