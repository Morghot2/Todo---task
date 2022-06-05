import React, {useContext} from "react";
import { UserContext } from "./App";


import ActionButton from "./ActionButton";
import ModifyButton from "./ModifyButton";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const User = ({ position }) => {
  const { userList } = useContext(UserContext);
  const [usersList, setUsersList] = userList;
  return (
    <TableRow>
      <TableCell>{usersList[position].firstName}</TableCell>
      <TableCell>{usersList[position].lastName}</TableCell>
      <TableCell>{usersList[position].email}</TableCell>
      <TableCell>{usersList[position].age}</TableCell>
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
