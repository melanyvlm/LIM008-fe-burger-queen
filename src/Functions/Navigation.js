import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class Navigation extends Component{
    render(){
        return(
            <div>
       <Navbar className="brown-color" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Menú</Nav.Link>
      <Nav.Link href="#link">Bebidas</Nav.Link>
      <Nav.Link href="#link">Promociones</Nav.Link>
      <Nav.Link href="#link">Locales</Nav.Link>
       </Nav>
    <Form inline>
      <Button className="button-one">COMEDOR</Button>
      <Button className="button-two">COCINA</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
          </div>
        )
    }
}
export default Navigation;


