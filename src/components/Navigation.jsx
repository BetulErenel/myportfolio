import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.5rem' }}>
          Betul Erenel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation

