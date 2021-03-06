import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

import placeholder from 'public/images/placeholder.png';

import Logout from './../logout/index';

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Nav pullRight>
          <NavDropdown
            title={
              <div className="image-wrapper">
                <img src={placeholder} alt="placeholder image" />
              </div>
            }
          >
            <MenuItem>
              <Logout />
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
