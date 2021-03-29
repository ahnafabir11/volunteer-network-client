import './Header.css';
import logo from '../../images/logo.png';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from '../../App';

function Header() {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  return (
    <div className="Header">
      <div className="container">
        <Navbar expand="lg">
          <img src={logo} alt="Volunteer Network" className="w-25" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-links">
              <Link to="/" className="link-text">Home</Link>
              <Link to="/donation" className="link-text">Donation</Link>
              <Link to="/blogs" className="link-text">Blogs</Link>
              {user.isLoggedIn && <Button variant="contained" color="primary" className="ml-2" onClick={()=> history.push("/tasks")}>my tasks</Button>}
              {!user.isLoggedIn && <Button variant="contained" color="primary" className="ml-2" onClick={()=> history.push("/signin")}>sign in</Button>}
              {user.isLoggedIn && <Button variant="contained" color="secondary" className="ml-2" onClick={() => history.push("/admin")}>Admin</Button>}
              {user.isLoggedIn && <Button variant="contained" color="secondary" className="ml-2" onClick={()=> setUser({})}>log out</Button>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default Header;