import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import Ifrem from "./Ifrem/Ifrem";
import Info from "./Info/Info";
const Footer = () => {
  return (
    <footer className="footer mt-4 mb-0">
      <Container>
        <Row className="py-5">
          <Ifrem />
          <Info />
        </Row>
      </Container>
      <div className="footer-bottom">
        <p className="mb-0 py-3 text-center">
          &copy; 2021 <span className="pgs">PSTU PGS .</span> All Rights
          Reserved . <span className="developer"><Link to="#"><b>Developers .</b></Link></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
