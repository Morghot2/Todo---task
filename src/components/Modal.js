import React from "react";

import DeleteButton from "./DeleteButton";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const Modal = ({userList, setUserList, handleShow}) => {
  const user = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("aas");
  };
  return (
    <form onSubmit={onSubmit}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid item>
          <TextField
            id="first-input"
            name="first-name"
            label="First Name"
            type="text"
            // value={formValues.name}
            // onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="last-name"
            name="last-name"
            label="Last Name"
            type="text"
            // value={formValues.age}
            // onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="email"
            name="email"
            label="Email"
            type="text"
            // value={formValues.name}
            // onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="age"
            name="age"
            label="Age"
            type="number"
            // value={formValues.age}
            // onChange={handleInputChange}
          />
        </Grid>
        <DeleteButton handleShow={handleShow} />
      </Grid>
    </form>
  );
};

export default Modal;
