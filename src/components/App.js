import React, { useState } from "react";

import Header from "./Header";
import ListBody from "./ListBody";
import MyModal from "./Modal";
import { useSelector } from "react-redux";

export const UserContext = React.createContext();

const App = () => {
  const type = useSelector((state) => state.button.show);

  const [buttonType, setButtonType] = useState("");

  const handleButtonType = (action) => {
    setButtonType(action);
  };
  const contextStore = {
    buttonType: [buttonType, setButtonType],

    handleButtonType: handleButtonType,
  };

  return (
    <UserContext.Provider value={contextStore}>
      <Header />
      <ListBody />
      {type && <MyModal />}
    </UserContext.Provider>
  );
};

export default App;
