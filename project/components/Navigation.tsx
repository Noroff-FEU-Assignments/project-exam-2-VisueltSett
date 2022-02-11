import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from './NavLink';
import { useState } from 'react';

export type NavProps = {
  children: React.ReactNode;
};

export default function Navigation({ children }: NavProps) {
  const [navCollapsed, setNavCollapsed] = useState(true);

  const handleNavCollapse = () => setNavCollapsed(!navCollapsed);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container fluid>
          <NavLink href="/">
            <a onClick={setNavCollapsed}>
              <Navbar.Brand>COCKTAILICIOUS</Navbar.Brand>
            </a>
          </NavLink>
          <Navbar.Toggle
            aria-label="Toggle navigation"
            data-bs-toggle="collapse"
            data-bs-target="#basic-navbar-nav"
            aria-controls="basic-navbar-nav"
            aria-expanded={!navCollapsed ? true : false}
            onClick={handleNavCollapse}
          />
          <Navbar.Collapse
            className={`${navCollapsed ? 'collapse' : ''}`}
            id="basic-navbar-nav"
          >
            <Nav className="mr auto">
              <NavLink href="/">
                <a className="nav-link">Home</a>
              </NavLink>
              <NavLink href="/favorites">
                <a className="nav-link">Favorites</a>
              </NavLink>
              <NavLink href="/contact">
                <a className="nav-link">Contact</a>
              </NavLink>
              <NavLink href="/login">
                <a className="nav-link">Login</a>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>{children}</div>
    </>
  );
}
