import React from "react";
import Modal from "./Modal";
import ModifyButton from "./ModifyButton";

const Header = ({ userList, setUserList, isShown, setIsShown, handleShow }) => {



  return (
    <div className="header">
      <h1>User List</h1>
      <ModifyButton isShown={isShown} setIsShown={setIsShown} handleShow={handleShow} action={"new"}/>
      
    </div>
  );
};

export default Header;
