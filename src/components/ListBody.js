import React from "react";
import User from "./User";
// import { DataGrid } from "@mui/x-data-grid";
// import ModifyButton from "./ModifyButton";
// import DeleteButton from "./DeleteButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ListBody = ({
  userList,
  setUserList,
  handleButtonType,

  handleShow,
}) => {
  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((user) => {
            return (
              <User
                userList={userList}
                setUserList={setUserList}
                key={userList.indexOf(user)}
                position={userList.indexOf(user)}
                handleShow={handleShow}
                handleButtonType={handleButtonType}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
    
    
  );
};

export default ListBody;

{
  /* <div style={{ height: 400 }}>
<div style={{ display: "flex", height: "100%" }}>
  <div style={{ flexGrow: 1 }}>
    <DataGrid
      editMode="row"
    
      rows={userList}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
    />
  </div>
</div>
</div> */
}

// const columns = [
//   { field: "firstName", headerName: "First name", flex: 1 },
//   { field: "lastName", headerName: "Last name", flex: 1 },
//   {
//     field: "email",
//     headerName: "Email",
//     flex: 1,
//   },
//   {
//     field: "age",
//     headerName: "Age",

//     flex: 1,
//   },
//   {
//     field: "edit",
//     headerName: "Edit",
//     flex: 1,
//     maxWidth: 100,

//      renderCell: () => {
//        return <ModifyButton />;
//     },
//   },
//   {
//     field: "delete",
//     headerName: "Delete",
//     flex: 1,
//     maxWidth: 100,

//      renderCell: () => {
//        return <DeleteButton userList={userList} setUserList={setUserList} />;
//      },
//   },
// ];
