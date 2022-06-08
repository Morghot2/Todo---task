import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, editUser } from "../redux/slices/userSlice";
import { changeButtonType } from "../redux/slices/buttonSlice";
import { changeModal } from "../redux/slices/buttonSlice";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const ActionButton = ({ position, action, userValues }) => {
  let buttonProperties = { text: "", color: "" };
  const dispatch = useDispatch();
  const showType = useSelector((state) => state.button.show);
  const showAction = useSelector((state) => state.button.type);

  const currentUser = useSelector((state) => state.currentUser);
  const user = currentUser.payload;

  if (action === "delete") {
    buttonProperties.text = <DeleteIcon />;
    buttonProperties.color = "error";
  } else if (showAction === "edit") {
    buttonProperties.text = "Update";
    buttonProperties.color = "warning";
  } else {
    buttonProperties.text = "Add";
    buttonProperties.color = "success";
  }

  const handleUser = () => {
    if (action === "delete") {
      dispatch(changeButtonType(action));
      dispatch(deleteUser(position));
    } else if (showAction === "new") {
      dispatch(changeModal(!showType));
      dispatch(addUser(userValues));
    } else if (showAction === "edit") {
      dispatch(changeModal(!showType));
      dispatch(editUser({ userValues, user }));
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
