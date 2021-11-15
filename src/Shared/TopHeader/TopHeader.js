import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import "./TopHeader.css";
const TopHeader = () => {
  return (
    <header>
      <nav className="breadcrumb">
        <Container>
          <ul className="color-light">
            <li>
              <Link to="#">Web</Link>
            </li>
            <li>
              <Link to="#">Teacher Log In</Link>
            </li>
            <li>
              <Link to="#">Student Log In</Link>
            </li>
          </ul>
        </Container>
      </nav>

      <Banner />

      <Header />
    </header>
  );
};

export default TopHeader;
