
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import "./TopHeader.css";
const TopHeader = () => {
  const {user,logOut,}=useAuth()
  return (
    <header>
      <nav className="breadcrumb">
        <Container>
          <ul className="color-light">
            <li>
              <Link to="#">Web</Link>
            </li>
            {
              user?.email?
              <li>
              <button  onClick={logOut}><small>{user.displayName}</small> Logout</button>
            </li>
            :
            <li>
              <HashLink to="/login">  LogIn</HashLink>
            </li>
            }
            <li>
              <HashLink to="/dashboard"> Admin</HashLink>
            </li>
            {/* <li>
              <Link to="#">Student Log In</Link>
            </li> */}
          </ul>
        </Container>
      </nav>

      <Banner />

      <Header />
    </header>
  );
};

export default TopHeader;
