import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
function NavScrollExample() {
    const cartProducts=useSelector(state=>state.cart)
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Shopping</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link to="/" as={Link}>Products</Nav.Link>
          </Nav>
          <Navbar.Toggle/>
          <Navbar.Collapse className='justify-content-end'>
              <Navbar.Text>
              <Nav.Link to="/cart" as={Link}>Cart {cartProducts.length}</Nav.Link>
              </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;