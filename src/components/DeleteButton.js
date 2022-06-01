import React from "react";

// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = ({ position, userList, setUserList, action, handleShow }) => {


  const handleUser = () => {
    // setUserList(userList.filter((user) => position !== userList.indexOf(user)));
    handleShow()
    
  };

  return (
    // <Stack direction="row">
    <Button variant="contained" color="error" onClick={handleUser}>
      <DeleteIcon />
    </Button>
    // </Stack>
  );
};

export default DeleteButton;
