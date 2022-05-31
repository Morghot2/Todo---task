import React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = ({ position, userList, setUserList }) => {

    
  const removeUser = () => {
    setUserList(userList.filter((user) => position !== userList.indexOf(user)));
  };

  return (
    // <Stack direction="row">
    <Button variant="contained" color="error" onClick={removeUser}>
      <DeleteIcon />
    </Button>
    // </Stack>
  );
};

export default DeleteButton;
