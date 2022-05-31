import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ModifyButton from "./ModifyButton";

const columns = [
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "email",
    headerName: "Email",
    width: 160,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "edit",
    headerName: "Edit",
    width: 90,
    renderCell: (cellValues) => {
      return <ModifyButton />;
    },
  },
  {
    field: "delete",
    headerName: "Delete",
    width: 90,
    renderCell: (cellValues) => {
      return <ModifyButton />;
    },
  },
];

const ListBody = ({ userList }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={userList}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default ListBody;
