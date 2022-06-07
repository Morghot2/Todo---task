import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UserContext } from "./App";
import { useDispatch } from "react-redux";
import { addUser, deleteUser, editUser } from "../redux/userSlice";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const ActionButton = ({ position, action, userValues }) => {
  const { buttonType, handleShow } = useContext(UserContext);

  const [buttonsType, setButtonsType] = buttonType;


  let buttonProperties = { text: "", color: "" };

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  const users = useSelector((state) => state.users);
 

  if (action === "delete") {
    buttonProperties.text = <DeleteIcon />;
    buttonProperties.color = "error";
  } else if (buttonsType === "edit") {
    buttonProperties.text = "Update";
    buttonProperties.color = "warning";
  } else {
    buttonProperties.text = "Add";
    buttonProperties.color = "success";
  }

  const handleUser = () => {
    if (action === "delete") {
      dispatch(deleteUser(position));
    } else if (buttonsType === "new") {
      handleShow();
      dispatch(addUser(userValues));
    } else if (buttonsType === "edit") {
      dispatch(editUser(userValues));
      handleShow();
    }
  };

  return (
    <Button
      variant="contained"
      color={buttonProperties.color}
      onClick={handleUser}
    >
      {buttonProperties.text}
    </Button>
  );
};

export default ActionButton;
