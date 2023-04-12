import React from "react";
import { Link } from "react-router-dom";

// navbar
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropDown";

function MainNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Registration</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="Degrees" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/degrees">
                                All Degrees
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/degree/create">
                                Create Degree
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Cohorts" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/cohorts">
                                All Cohorts
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/cohort/create">
                                Create Cohort
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Modules" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/modules">
                                All Modules
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/module/create">
                                Create Module
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Students" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/student">
                                Search Student
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/student/create">
                                Create Student
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/student/grade/create">
                                Create Grade
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;