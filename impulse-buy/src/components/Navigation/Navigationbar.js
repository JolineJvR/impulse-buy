// Import fromBootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";

// Import from Router dom
import { useNavigate } from "react-router-dom";

// Import from Js Components
import Buttons from "../Buttons/Purple/ButtonsPurple";

// Import from Image
import Logo from "../../Image/IBK-Logo.png";

// Import from css files
import "./Navigation.css";

/* A navigation bar that is to appear on every page but Login.js and signup.js */

function BasicExample() {
  // useNavigate hook provides a function to navigate
  const nav = useNavigate();

  // Handles the logout process
  const handleLogout = () => {
    // Removes the "isLoggedIn" flag from sessionStorage
    sessionStorage.removeItem("isLoggedIn");
    // Removes "SignupForm"'s data from sessionStorage
    sessionStorage.removeItem("SignupForm");

    // Navigates the user to the Login page
    nav("/login");
  };

  return (
    <Navbar expand="lg" className="navbar-better" fixed="top">
      {/* Container that stretches the full length */}
      <Container fluid>
        <Navbar.Brand onClick={() => nav(`/featured`)}>
          {/* Adds the logo to the navbar */}
          <img src={Logo} alt="Impulse Buy Kingdom Logo" width="auto" height="60px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {/* Links to different pages on the site */}
            <Nav.Link onClick={() => nav(`/featured`)}>Featured</Nav.Link>
            <Nav.Link onClick={() => nav(`/products`)}>Products</Nav.Link>
            <Nav.Link onClick={() => nav(`/aboutus`)}>About Us</Nav.Link>
          </Nav>
          <Nav>
            {/* Buttons to take to other areas on the site */}
            <Buttons onClick={() => nav(`/cart`)} label={<><i className="bi bi-cart4"></i></>}/>
            <div style={{ width: "10px" }} />
            <Button variant='danger' size="lg" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right"></i>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;