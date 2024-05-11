import React, { useState } from "react";
import "./App.css";
import Navbar from "./app/components/Navbar";
import MainRouter from "./app/routes";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <MainRouter isAuth={isAuth} />
    </>
  );
};

export default App;
