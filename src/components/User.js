import React from 'react'

import Modal from './Modal';
import DeleteButton from './DeleteButton';
import ModifyButton from './ModifyButton';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


const User = ({ position, userList, setUserList, isShown, setIsShown, handleShow }) => {
  return (
    
    <TableRow>
      <TableCell>{userList[position].firstName}</TableCell>
      <TableCell>{userList[position].lastName}</TableCell>
      <TableCell>{userList[position].email}</TableCell>
      <TableCell>{userList[position].age}</TableCell>
      <TableCell><ModifyButton isShown={isShown} setIsShown={setIsShown} handleShow={handleShow} action={"edit"}/></TableCell>
      <TableCell><DeleteButton position={position} userList={userList} setUserList={setUserList}></DeleteButton></TableCell>
      
      
    </TableRow>
  )
}

export default User