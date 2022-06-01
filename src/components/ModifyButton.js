import React from "react";

// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';

const ModifyButton = ({ handleShow, action, handleButtonType }) => {

  const handleButtonClick = () => {
    handleShow()
    console.log(action)
    handleButtonType(action)
  }
  

  if (action === "new") {
    return (
      <Button variant="contained" onClick={handleButtonClick}>
        New
      </Button>
    );
  } else {
    return (
      <Button variant="contained" color="warning" onClick={handleButtonClick}>
        <EditIcon />
      </Button>
    );
  }
};

export default ModifyButton;
