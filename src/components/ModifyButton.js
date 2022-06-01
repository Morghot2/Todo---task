import React from "react";

// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';

const ModifyButton = ({ handleShow, action }) => {
  if (action === "new") {
    return (
      <Button variant="contained" onClick={handleShow}>
        New
      </Button>
    );
  } else {
    return (
      <Button variant="contained" color="warning" onClick={handleShow}>
        <EditIcon />
      </Button>
    );
  }
};

export default ModifyButton;
