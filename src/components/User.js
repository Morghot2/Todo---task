import React from 'react'

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const User = ({ position, userList, setUserList }) => {
  return (
    <TableRow>
      <TableCell>{userList[position].firstName}</TableCell>
      <TableCell>{userList[position].lastName}</TableCell>
      <TableCell>{userList[position].email}</TableCell>
      <TableCell>{userList[position].age}</TableCell>
      <TableCell>asad</TableCell>
      <TableCell>asdasda</TableCell>
    </TableRow>
  )
}

export default User