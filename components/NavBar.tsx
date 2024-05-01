import React, { FC } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const NavBar: FC = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      className="px-4 bg-body-tertiary justify-content-between"
    >
      <Container>
        <Navbar.Brand href="/">Web3 Ethereum app</Navbar.Brand>
        <Row>
          <Col xs="auto">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="contracts">Contracts</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
