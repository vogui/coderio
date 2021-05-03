import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import { Container } from "./styled";

const Main = () => {
  return (
    <Container>
      <Header />
      <Home />
      <Footer />
    </Container>
  );
};

export default Main;
