import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { UseContext, UseContextModalList } from "./shared/UserContext";

const Routes = () => {
  const [modalAdd, setModalAdd] = useState<Boolean>(false);
  const [modalList, setModalList] = useState<Boolean>(false);
  return (
    <BrowserRouter>
      <UseContext.Provider value={{ modalAdd, setModalAdd }}>
        <UseContextModalList.Provider value={{ modalList, setModalList }}>
          <Route component={Home} path="/" exact />
        </UseContextModalList.Provider>
      </UseContext.Provider>
    </BrowserRouter>
  );
};

export default Routes;
