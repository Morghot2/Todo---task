import React, {useContext} from "react";
import User from "./User";

import { UserContext } from "./App";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ListBody = () => {
  const { userList } = useContext(UserContext);
  const [usersList, setUsersList] = userList;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList.map((user) => {
            return (
              <User
                key={usersList.indexOf(user)}
                position={usersList.indexOf(user)}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListBody;
