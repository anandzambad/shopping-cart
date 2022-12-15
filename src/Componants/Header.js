import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Badge from '@mui/material/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Add To Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
         </Nav>
         <Badge badgeContent={1} color="primary">
         <i className="fa fa-shopping-cart text-light" style={{fontSize:25, cursor:"pointer"}} ></i>
    </Badge>
           
        </Container>
      </Navbar>
    </div>
  )
}

export default Header