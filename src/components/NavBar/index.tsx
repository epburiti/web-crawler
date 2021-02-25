import React from "react";
import Logo from "./../../assets/Logo.webp";
import { Container } from "./styles";

const NavBar = () => {
  return (
    <Container >
       <img src={Logo} alt="Logo" />
    </Container>
  );
};

export default NavBar;
