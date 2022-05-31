import React, { useState } from "react";
import ListBody from "./ListBody";
import Header from "./Header";
import DeleteButton from "./DeleteButton";

const App = () => {
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
      firstName: "Max",
      lastName: "Jaron",
      email: "maxjaron@gmail.com",
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
  return (
    <div>
      <Header />
      <ListBody userList={userList} setUserList={setUserList} />
    </div>
  );
};

export default App;
