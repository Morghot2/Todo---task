import React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = () => {
  return (
    // <Stack direction="row">
    <Button variant="contained" color="error">
      <DeleteIcon />
    </Button>
    // </Stack>
  );
};

export default DeleteButton;