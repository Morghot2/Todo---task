import React, { useContext } from "react";
import { addUser, deleteUser, editUser } from "../redux/slices/userSlice";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "./App";
import { changeModal } from "../redux/slices/buttonSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ActionButton = ({ position, action, userValues }) => {
  const { buttonType, handleShow } = useContext(UserContext);

  const [buttonsType, setButtonsType] = buttonType;

  let buttonProperties = { text: "", color: "" };
  const dispatch = useDispatch();
  const type = useSelector((state) => state.button.show);

  const currentUser = useSelector((state) => state.currentUser);
  const user = currentUser.payload;

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

      dispatch(changeModal(!type));
      dispatch(addUser(userValues));
    } else if (buttonsType === "edit") {
      dispatch(changeModal(!type));
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
