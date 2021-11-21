import React from "react";
import "./Navigation.css";

import { Container, Nav, Navbar } from "react-bootstrap";
import { NavHashLink } from "react-router-hash-link";

import useAuth from "../../../hooks/useAuth";

const Navigation = () => {

  const {logOut,user}=useAuth()
 
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="nav-container  "
    >
      <Container>
        <Navbar.Brand href="#home" >Tour Share</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              activeStyle={{ color: "red" }}
              className="fw-bold fs-6 nav-link "
              as={NavHashLink}
              to="/home#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="fw-bold fs-6 "
              as={NavHashLink}
              activeStyle={{ color: "red" }}
              to="/home#tranding"
              
            >
              Groups
            </Nav.Link>
            <Nav.Link
              className="fw-bold fs-6 "
              as={NavHashLink}
              activeStyle={{ color: "red" }}
              to="/createteam"
            >
              Create Team
            </Nav.Link>
            
          </Nav>

         
          <Nav>
            
              
               
              
            
           
          {user?.email ? (
              <>
                <Nav.Link
                  as={NavHashLink}
                  className="fw-bold fs-6 "
                  to="/dashboard"
                >
                  DashBoard
                </Nav.Link>
                <Nav.Link
                  className="fw-bold fs-6 "
                  as={NavHashLink}
                  activeStyle={{ color: "red" }}
                  onClick={logOut}
                  to="/home"
                >
                  LogOut
                </Nav.Link>
                <Nav.Link
                  className="fw-bold fs-6 "
                  as={NavHashLink}
                  activeStyle={{ color: "red" }}
                  to="/"
                >
                  {user.displayName}
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  className="fw-bold fs-6 "
                  as={NavHashLink}
                  activeStyle={{ color: "red" }}
                  to="/login"
                >
                  Login
                </Nav.Link>

                <Nav.Link
                  className="fw-bold fs-6 "
                  as={NavHashLink}
                  activeStyle={{ color: "red" }}
                  to="/register"
                >
                  Register
                </Nav.Link>
              </>
            )}
             
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;