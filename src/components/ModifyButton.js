import React from "react";

// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const ModifyButton = ({ handleShow, action, handleButtonType, changeCurrentUser, position }) => {
  const handleButtonClick = () => {
    handleShow();
    handleButtonType(action);
    if (position) {
      changeCurrentUser(position)
    } else return null

  };
  if (action === "new") {
    
    return (
      <Button variant="contained" onClick={handleButtonClick}>
        New
      </Button>
    );
  }
  if (action === "edit") {
    return (
      <Button variant="contained" color="warning" onClick={handleButtonClick}>
        <EditIcon />
      </Button>
    );
  }
};

export default ModifyButton;

// switch (action) {
//   case "new":
//     return (
//       <Button variant="contained" onClick={handleButtonClick}>
//         New
//       </Button>
//     );
//     break;

//   case "edit":
//     return (
//       <Button variant="contained" color="warning" onClick={handleButtonClick}>
//         <EditIcon />
//       </Button>
//     );
//     break;
//   default:
//     return null;
// }
