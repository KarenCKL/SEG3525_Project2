import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../App.css';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="navbar bg-white py-3 px-2 sticky-top bg-info py-3 sticky-top">
            <Container fluid className='custom-container'>
                <img src={logo} style={{ width: '70px', marginRight: '10px' }} alt="Logo" />
                <Navbar.Brand as={Link} to='/' className="capitalize">Ottawa Badminton Club</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto py-0 pe-5">
                        <Nav.Link as={Link} to='/' id="HomeLink" className="capitalize">Home</Nav.Link>
                        <NavDropdown title="Suscribe" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/activities#indoor">Membership</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/activities#outdoor">Coaching</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to='/restaurants' className="capitalize">Guides</Nav.Link>
                        <Nav.Link as={Link} to='/restaurants' className="capitalize">Forum</Nav.Link>
                        <Nav.Link as={Link} to='/restaurants' className="capitalize">Shop</Nav.Link>
                    </Nav>
                    <Button as={Link} to='/contact' variant="primary" className='Contact text-white py-2 px-4 capitalize' id='bookIdbtn'>Book Now</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;
