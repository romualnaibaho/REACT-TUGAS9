import React, { Component } from "react";
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Image, Dropdown, DropdownButton } from "react-bootstrap";

class Navigation extends Component{
    render(){
        return (
            <div>
                <Navbar variant="dark" bg="dark" expand="lg">
                    <Navbar.Brand href="#">Akses Sport</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Berita</Nav.Link>
                            <Nav.Link href="#action2">Livo Scores</Nav.Link>

                            <NavDropdown title="Piala & Liga" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Transfer Pemain</Nav.Link>
                            <Nav.Link href="#">Tim</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;