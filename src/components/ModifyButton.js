import React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ModifyButton = ({isShown, setIsShown, handleShow}) => {
  return (
    
      <Button variant="contained" onClick={handleShow}>New</Button>
    
  );
};

export default ModifyButton;
