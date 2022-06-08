import React from "react";

import Header from "./Header";
import ListBody from "./ListBody";
import MyModal from "./Modal";

import { useSelector } from "react-redux";

const App = () => {
  const type = useSelector((state) => state.button.show);

  return (
    <>
      <Header />
      <ListBody />
      {type && <MyModal />}
    </>
  );
};

export default App;
