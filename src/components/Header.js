import React from "react";
import Modal from "./Modal";
import ModifyButton from "./ModifyButton";

const Header = ({ handleShow }) => {



  return (
    <div className="header">
      <h1>User List</h1>
      <ModifyButton  handleShow={handleShow} action={"new"}/>    
    </div>
  );
};

export default Header;
