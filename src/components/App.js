import React, { useState } from "react";

import Modal from "./Modal";
import ListBody from "./ListBody";
import Header from "./Header";


const App = () => {
  const [isShown, setIsShown] = useState(false);
  const [userList, setUserList] = useState([
    {id: 1, firstName: "John",lastName: "Doe",email: "johndoe@gmail.com",age: 27,},
    {id: 2,firstName: "Lech",lastName: "Nowak",email: "nowaklech@gmail.com",age: 25,},
    {id: 3,firstName: "Jan",lastName: "Kowalski",email: "jankowalski@gmail.com",age: 43,},
  ]);
  

  const handleShow = e => {
    setIsShown(isShown => !isShown);
    console.log("Working")
  }


  return (
    <div>
      <Header handleShow={handleShow}/>
      <ListBody userList={userList} setUserList={setUserList}  handleShow={handleShow}/>
      {isShown && <Modal userList={userList} setUserList={setUserList} handleShow={handleShow}/>}
    </div>
  );
};

export default App;
