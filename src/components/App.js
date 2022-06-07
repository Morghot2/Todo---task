import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MyModal from "./Modal";
import ListBody from "./ListBody";
import Header from "./Header";

export const UserContext = React.createContext();
const redux = 'dsada'
const App = () => {
   
  const [isShown, setIsShown] = useState(false);
  const [currentUser, setCurrentUser] = useState(1212);
  const [buttonType, setButtonType] = useState("");
  const [userList, setUserList] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      age: 27,
    },
    {
      id: 2,
      firstName: "Lech",
      lastName: "Nowak",
      email: "nowaklech@gmail.com",
      age: 25,
    },
    {
      id: 3,
      firstName: "Jan",
      lastName: "Kowalski",
      email: "jankowalski@gmail.com",
      age: 43,
    },
  ]);

  const changeCurrentUser = (position) => {
    setCurrentUser(position);

  };

  const handleShow = (e) => {
    setIsShown((isShown) => !isShown);

  };
  const handleButtonType = (action) => {
    setButtonType(action);
  };
  const contextStore = {
    shown: [isShown, setIsShown],
    currentUser: [currentUser, setCurrentUser],
    buttonType: [buttonType, setButtonType],
    userList: [userList, setUserList],
    changeCurrentUser: changeCurrentUser,
    handleShow: handleShow,
    handleButtonType: handleButtonType,
  };

  return (
    <UserContext.Provider value={contextStore}>
      <Header />
      <ListBody />
      {isShown && <MyModal />}
    </UserContext.Provider>
  );
};

export default App;
