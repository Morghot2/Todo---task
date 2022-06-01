import React from "react";
import ModifyButton from "./ModifyButton";

const Header = ({ userList, setUserList }) => {
  return (
    <div className="header">
      <h1>User List</h1>
      <ModifyButton />
    </div>
  );
};

export default Header;
