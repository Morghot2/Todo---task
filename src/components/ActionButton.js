import React from "react";

// import Stack from "@mui/material/Stack";
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
  currentUser
}) => {
    
  const handleUser = () => {
      
    if (action === "delete") {
      
        console.log(buttonType)

      setUserList(
        
        userList.filter((user) => position !== userList.indexOf(user))
      );
    } else if (buttonType === "new"){
        console.log(buttonType)
    
      setUserList([...userList, userValues]);
      handleShow();
    } else if (buttonType === "edit") {
      console.log(buttonType)

      const updateUser = [...userList]
      updateUser[currentUser] = userValues
      console.log(currentUser)
      console.log(userValues)
      
      console.log(updateUser)
      setUserList([...updateUser])
      handleShow()
    }
  };

  return (
    // <Stack direction="row">
    <Button variant="contained" color="error" onClick={handleUser}>
      <DeleteIcon />
    </Button>
    // </Stack>
  );
};

export default ActionButton;
