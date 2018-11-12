"use strict"
import React from 'react';
import {Nav, NavItem, NavDropdown, MenuItem, Navbar, Badge} from 'react-bootstrap';
  class Menu extends React.Component{
    render(){
      return(
        <Navbar inverse fixedTop>
        <Navbar.Header>
        <Navbar.Brand>
          <a href="/">BookShop</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/about">About</NavItem>
          <NavItem eventKey={2} href="/contacts">Contact Us</NavItem>
        <NavDropdown eventKey={12} title="Categories" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Cartes</MenuItem>
            <MenuItem eventKey={3.3}>Combat</MenuItem>
            <MenuItem eventKey={3.4}>Comedie</MenuItem>
            <MenuItem eventKey={3.5}>Course</MenuItem>
            <MenuItem eventKey={3.6}>Demon</MenuItem>
            <MenuItem eventKey={3.7}>Drame</MenuItem>
            <MenuItem eventKey={3.8}>Dresseur</MenuItem>
            <MenuItem eventKey={3.9}>Emotions</MenuItem>
            <MenuItem eventKey={4.0}>Enigme</MenuItem>
            <MenuItem eventKey={4.1}>Fantasy</MenuItem>
            <MenuItem eventKey={4.2}>Horreur</MenuItem>
        </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="/admin">Admin</NavItem>
          <NavItem eventKey={2} href="/cart">Your Cart
           { (this.props.cartItemsNumber > 0)?(<Badge className="badge">{this.props.cartItemsNumber}</Badge>):('')}
          </NavItem>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
      );
    }
}
export default Menu;
