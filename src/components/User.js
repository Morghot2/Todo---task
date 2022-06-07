import React from "react";

import { useSelector } from "react-redux";

import ActionButton from "./ActionButton";
import ModifyButton from "./ModifyButton";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const User = ({ position }) => {
  const users = useSelector((state) => state.users);

  return (
    <TableRow>
      <TableCell>{users[position].firstName}</TableCell>
      <TableCell>{users[position].lastName}</TableCell>
      <TableCell>{users[position].email}</TableCell>
      <TableCell>{users[position].age}</TableCell>
      <TableCell>
        <ModifyButton action={"edit"} position={position} />
      </TableCell>
      <TableCell>
        <ActionButton position={position} action={"delete"}></ActionButton>
      </TableCell>
    </TableRow>
  );
};

export default User;
