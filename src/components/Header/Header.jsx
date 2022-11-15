import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand
            className={location.pathname === "/" ? "btn btn-light text-dark" : "btn btn-dark"}
          >
            HOME
          </Navbar.Brand>
        </Link>

        <Link to="/add">
          <Navbar.Brand
            className={location.pathname === "/add" ? "btn btn-light text-dark" : "btn btn-dark"}
          >
            add product
          </Navbar.Brand>
        </Link>
        <Link to="/about">
          <Navbar.Brand
            className={location.pathname === "/about" ? "btn btn-light text-dark" : "btn btn-dark"}
          >
            about us
          </Navbar.Brand>
        </Link>
        <Link to="/contact">
          <Navbar.Brand
            className={location.pathname === "/contact" ? "btn btn-light text-dark" : "btn btn-dark"}
          >
            contact
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
