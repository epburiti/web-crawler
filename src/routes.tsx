import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { UseContext } from "./shared/UserContext";

const Routes = () => {
  const [modalAdd, setModalAdd] = useState<Boolean>(false);
  return (
    <BrowserRouter>
      <UseContext.Provider value={{ modalAdd, setModalAdd }}>
        <Route component={Home} path="/" exact />
      </UseContext.Provider>
    </BrowserRouter>
  );
};

export default Routes;
