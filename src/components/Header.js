import React from "react";
import Modal from "./Modal";
import ModifyButton from "./ModifyButton";

const Header = ({ handleShow, handleButtonType }) => {



  return (
    <div className="header">
      <h1>User List</h1>
      <ModifyButton  handleShow={handleShow} action={"new"} handleButtonType={handleButtonType}/>    
    </div>
  );
};

export default Header;
