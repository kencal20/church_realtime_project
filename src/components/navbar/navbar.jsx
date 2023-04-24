import React from "react";
import {
  Navbar,
  Form,
  Button,
  Container,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import logo from "../img/logo.png";
import "./navbar.css";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light" id="nav_bar">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top Nav_logo"
              alt="adventist logo"
            />{" "}
            <h4 id="nav_head">
              SDA CHURCH
              <br />
              PROMISED LAND
              <br />
              TSE-ADDO
            </h4>
          </Navbar.Brand>

          <div className="navbar_txt">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link> */}
                <NavDropdown
                  className="ml-auto"
                  title="Dropdown"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                {/* <Nav.Item className="mr-auto">
                  <Nav.Link className="mr-auto">Hi fname lname!</Nav.Link>
                </Nav.Item> */}

                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>{" "}
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
