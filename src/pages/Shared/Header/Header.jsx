import React from "react";
import logo from "../../../assets/images/logo.png";
import moment from "moment/moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format(`dddd, MMMM D, YYYY`)}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={100}>
          USA will contest both the men’s and women’s team compound finals after
          a successful morning of action in the team eliminations at the Hyundai
          Archery World Cup in Antalya.
        </Marquee>
      </div>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
