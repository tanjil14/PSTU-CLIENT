import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="primary"
      variant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="right-space navbarScroll">
            <Nav.Link className="me-2 me-lg-4" to="#features">
              HOME
            </Nav.Link>
            {/* <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item to="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <li className="nav-item dropdown me-2 me-lg-4">
              <Link className="nav-link" to="#">
                ABOUT
              </Link>
              <div className="dropdown-menu ">
                <Link className="dropdown-item" to="#">
                  Link 1
                </Link>
                <Link className="dropdown-item" to="#">
                  Link 2
                </Link>
                <Link className="dropdown-item" to="#">
                  Link 3
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown me-2 me-lg-4">
              <Link className="nav-link" to="#">
                ACADEMIC
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="#">
                  Link 1
                </Link>
                <Link className="dropdown-item" to="#">
                  Link 2
                </Link>
                <Link className="dropdown-item" to="#">
                  Link 3
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown me-2 me-lg-4">
              <Link className="nav-link" to="#">
                FACULTY
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="#">
                  Link 1
                </Link>
                <Link className="dropdown-item" to="#">
                  Link 2
                </Link>
                <Link className="dropdown-item" to="#">
                  Link 3
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown me-2 me-lg-4">
              <Link className="nav-link" to="#">
                ADMINISTRATION
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="#">
                  Link 1
                </Link>
                <Link className="dropdown-item" to="#">
                  Link 2
                </Link>
                <Link className="dropdown-item" to="#">
                  Link 3
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown me-2 me-lg-4">
              <Link className="nav-link" to="#">
                ANNOUNCEMENT
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="#">
                  Link 1
                </Link>
                <Link className="dropdown-item" to="#">
                  Link 2
                </Link>
                <Link className="dropdown-item" to="#">
                  Link 3
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown me-2  me-lg-4">
              <Link className="nav-link" to="#">
                DOWNLOAD
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="#">
                  Link 1
                </Link>
                <Link className="dropdown-item" to="#">
                  Link 2
                </Link>
                <Link className="dropdown-item" to="#">
                  Link 3
                </Link>
              </div>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

// <nav className="navbar main-nav navbar-expand-lg navbar-dark sticky-top">
// <div className="container">
//   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#pstu-navbar" aria-controls="pstu-navbar" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="pstu-navbar">
//     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//       <li className="nav-item">
//         <Link className="nav-link" aria-current="page" to="#">Home</Link>
//       </li>
//       <!-- Dropdown -->
//       <li className="nav-item dropdown">
//         <Link className="nav-link" to="#">ABOUT</Link>
//         <div className="dropdown-menu">
//           <Link className="dropdown-item" to="#">Link 1</Link>
//           <Link className="dropdown-item" to="#">Link 2</Link>
//           <Link className="dropdown-item" to="#">Link 3</Link>
//         </div>
//       </li>
//
//
//
//
//
//     </ul>
//   </div>
// </div>
// </nav>
