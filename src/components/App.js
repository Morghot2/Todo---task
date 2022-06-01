import React, { useState } from "react";

import Modal from "./Modal";
import ListBody from "./ListBody";
import Header from "./Header";


const App = () => {
  const [userList, setUserList] = useState([
    {id: 1, firstName: "John",lastName: "Doe",email: "johndoe@gmail.com",age: 27,},
    {id: 2,firstName: "Max",lastName: "Jaron",email: "maxjaron@gmail.com",age: 25,},
    {id: 3,firstName: "Jan",lastName: "Kowalski",email: "jankowalski@gmail.com",age: 43,},
  ]);

  const [isShown, setIsShown] = useState(false);
  const handleShow = e => {
    e.preventDefault()
    setIsShown(current => !current);
  }


  return (
    <div>
      <Header userList={userList} setUserList={setUserList} isShown={isShown} setIsShown={setIsShown} handleShow={handleShow}/>
      <ListBody userList={userList} setUserList={setUserList} isShown={isShown} setIsShown={setIsShown} handleShow={handleShow}/>
      {isShown && <Modal />}
    </div>
  );
};

export default App;
