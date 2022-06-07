import React, { useContext } from "react";
import { UserContext } from "./App";
import { useDispatch } from "react-redux";
import { addUser, deleteUser, editUser } from "../redux/userSlice"


import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const ActionButton = ({ position, action, userValues }) => {
  const { buttonType, handleShow, currentUser, userList } =
    useContext(UserContext);
  const [usersList, setUsersList] = userList;
  const [buttonsType, setButtonsType] = buttonType;
  const [currentsUser, setCurrentsUser] = currentUser;

  let buttonProperties = {text: "", color: ""};

  const dispatch = useDispatch()



  if (action === "delete") {
    buttonProperties.text = <DeleteIcon />
    buttonProperties.color = "error"
  } else if (buttonsType === "edit") {
    buttonProperties.text = "Update"
    buttonProperties.color = "warning"
  } else {
    buttonProperties.text = "Add"
    buttonProperties.color = "success"
  }

  const handleUser = () => {
    if (action === "delete") {
      dispatch(deleteUser(position))
      console.log(position)
      setUsersList(
        usersList.filter((user) => position !== usersList.indexOf(user))
      );
    } else if (buttonsType === "new") {
      setUsersList([...usersList, userValues]);
      handleShow();
      dispatch(addUser(userValues))
      console.log(userList)

    } else if (buttonsType === "edit") {
      console.log(currentsUser)
      const updateUser = [...usersList];
      updateUser[currentsUser] = userValues;

      setUsersList([...updateUser]);
      dispatch(editUser({
      
        currentsUser,
        userValues
      }))
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
