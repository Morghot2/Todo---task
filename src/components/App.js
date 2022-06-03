import React, { useState, useEffect } from "react";

import Modal from "./Modal";
import ListBody from "./ListBody";
import Header from "./Header";


const App = () => {
  const [isShown, setIsShown] = useState(false);
  const [currentUser, setCurrentUser] = useState(0)
  const [buttonType, setButtonType] = useState('')
  const [userList, setUserList] = useState([
    {id: 1, firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", age: 27,},
    {id: 2, firstName: "Lech", lastName: "Nowak", email: "nowaklech@gmail.com", age: 25,},
    {id: 3, firstName: "Jan", lastName: "Kowalski", email: "jankowalski@gmail.com", age: 43,},
  ]);
  
  const changeCurrentUser = (position) => {
    setCurrentUser(position)
    console.log(currentUser)
  }

  const handleShow = e => {
    setIsShown(isShown => !isShown);
    console.log("Working")
  }
  const handleButtonType = (action) => {
    // action === "new" ? setButtonType("new") : setButtonType("edit")
    setButtonType(action)
    
    // console.log(buttonType)
  }


  return (
    <div>
      <Header handleShow={handleShow} handleButtonType={handleButtonType}/>
      <ListBody userList={userList} setUserList={setUserList} handleShow={handleShow} handleButtonType={handleButtonType} buttonType={buttonType} changeCurrentUser={changeCurrentUser}/>
      {isShown && <Modal userList={userList} setUserList={setUserList} handleShow={handleShow} buttonType={buttonType} handleButtonType={handleButtonType} currentUser={currentUser}/>}
    </div>
  );
};

export default App;
