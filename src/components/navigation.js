import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { NavLink as RRNavLink } from "react-router-dom";

import Brand from "./brand";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="header">
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="#">
            <Brand />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/" exact activeClassName="active">
                  Bio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/skills/" activeClassName="active">
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  to="/projects/"
                  activeClassName="active"
                >
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/kantesilvestrs">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
