import React from 'react'

import Modal from './Modal';
import ActionButton from './ActionButton';
import ModifyButton from './ModifyButton';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


const User = ({ position, userList, setUserList, handleButtonType, handleShow, buttonType, changeCurrentUser }) => {
  const action = "edit"
  return (
    
    <TableRow>
      <TableCell>{userList[position].firstName}</TableCell>
      <TableCell>{userList[position].lastName}</TableCell>
      <TableCell>{userList[position].email}</TableCell>
      <TableCell>{userList[position].age}</TableCell>
      <TableCell><ModifyButton handleShow={handleShow} action={action} handleButtonType={handleButtonType} position={position} changeCurrentUser={changeCurrentUser}/></TableCell>
      <TableCell><ActionButton buttonType={buttonType} position={position} userList={userList} setUserList={setUserList} action={"delete"}></ActionButton></TableCell>
      
      
    </TableRow>
  )
}

export default User