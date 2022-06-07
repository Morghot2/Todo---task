import React, { useState } from "react";

import Header from "./Header";
import ListBody from "./ListBody";
import MyModal from "./Modal";

export const UserContext = React.createContext();

const App = () => {
  const [isShown, setIsShown] = useState(false);
  const [buttonType, setButtonType] = useState("");

  // const changeCurrentUser = (position) => {
  //   setCurrentUser(position);
  // };

  const handleShow = (e) => {
    setIsShown((isShown) => !isShown);
  };
  const handleButtonType = (action) => {
    setButtonType(action);
  };
  const contextStore = {
    shown: [isShown, setIsShown],
    // currentUser: [currentUser, setCurrentUser],
    buttonType: [buttonType, setButtonType],
    // changeCurrentUser: changeCurrentUser,
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
