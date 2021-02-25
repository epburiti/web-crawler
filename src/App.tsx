import React from "react";
import Routes from "./routes";

import GlobalStyles from "./Styles/GlobalStyle";
// import { Provider } from "react-redux";
// import store from "./store/index";
const App = () => {
  return (
    // <Provider store={store}>
    <>
      <GlobalStyles />
      <Routes />
    </>
    // </Provider>
  );
};

export default App;