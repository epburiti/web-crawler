import React from "react";

import { Container } from "./styles";

function Loader() {
  return (
    <Container>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
}

export default Loader;
