import React from "react";
import { Container, Row } from "react-bootstrap";
import Ifrem from "./Ifrem/Ifrem";
import './Footer.css'
import Info from "./Info/Info";
const Footer = () => {
  return (
    <footer className="footer my-4">
      <Container>
        <Row className="py-5">
          <Ifrem/>
          <Info/>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
