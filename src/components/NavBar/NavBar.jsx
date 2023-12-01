import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './NavBar.css'
import CarWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary, barra" >
      <Container>
        <Navbar.Brand href="#home">Mi tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Ofertas">Ofertas</NavDropdown.Item>
              <NavDropdown.Item href="#Catalogo">Catalogo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Algo mas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Algo mas 2.0
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CarWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
