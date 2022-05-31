import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ModifyButton from "./ModifyButton";
import DeleteButton from "./DeleteButton";

const columns = [
  { field: "firstName", headerName: "First name", flex: 1 },
  { field: "lastName", headerName: "Last name", flex: 1 },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "age",
    headerName: "Age",
    
    flex: 1,
  },
  {
    field: "edit",
    headerName: "Edit",
    flex: 1,
    maxWidth: 100,
    

    renderCell: () => {
      return <ModifyButton />;
    },
  },
  {
    field: "delete",
    headerName: "Delete",
    flex: 1,
    maxWidth: 100,
    

    renderCell: () => {
      return <DeleteButton />;
    },
  },
];

const ListBody = ({ userList }) => {
  return (
    <div style={{ height: 400 }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
          
            rows={userList}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </div>
  );
};

export default ListBody;
