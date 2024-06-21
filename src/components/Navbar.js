import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../App.css';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="navbar bg-white sticky-top bg-info sticky-top">
            <Container fluid className='custom-container'>
                <img src={logo} style={{ width: '50px', marginRight: '10px' }} alt="Logo" id="logo" />
                <Navbar.Brand as={Link} to='/' className="capitalize" id='name'>Ottawa Badminton Club</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto py-0 pe-5">
                        <Nav.Link as={Link} to='/' id="HomeLink" className="capitalize">Home</Nav.Link>
                        <Nav.Link as={Link} to='/Guides' className="capitalize">Guides</Nav.Link>
                        <Nav.Link as={Link} to='/Forum' className="capitalize">Forum</Nav.Link>
                        <NavDropdown title="Suscription" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/Suscription#membership">Membership</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Subscription#Coaching">Coaching</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Subscription#Booking">Booking</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button as={Link} to='/' variant="primary" className='text-white py-1 px-1 capitalize' id='bookIdbtn'>Join Now</Button>
                    <Button as={Link} to='/' variant="secondary" className='text-white py-1 px-1 capitalize' id='loginIdbtn'>Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;
