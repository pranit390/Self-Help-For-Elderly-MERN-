import React from 'react'
import { Navbar, Nav,  NavDropdown } from 'react-bootstrap'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import  logo from '../image/mylogo.png'
import {NavLink,Link} from 'react-router-dom'

const Styles = styled.div`

.navbar { background-color: #C9FCDF;}
  a, .navbar-nav,.navdropdown .navbar-light .nav-link
  {
    font-size: 1.1em;
    font-style: normal;
    font-family: arial;
    font-weight:bold;
    border:none;
    &:hover {color: #103D60;}
  }
  .navbar-brand {
    font-size: 2.3em;
    font-weight:900;
    font-family:arial;
    &:hover {
    color:#103D60 }
    h5{
        font-weight:bold;
        font-style:normal;
        font-family:arial;
        font-size:1.1rem;
        text-align:center;
        text-decoration:none;
   }
  }
  .NavItems{
    font-weight:bold;
    font-style:normal;
    font-family:arial;
    font-size:1.1rem;
    text-align:center;
    text-decoration:none;
    color:green;
   }
   .inactive{
    font-weight:bold;
    font-style:normal;
    font-family:arial;
    font-size:1.1rem;
    text-align:center;
    text-decoration:none;
    color:green;
   }
   .active{
    color: black;
   }

`;

const NavigationBar = () => {

    return (
        <Styles>
            <Navbar fixed="top" expand="xl">
                <Navbar.Brand>
                <img
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline align-top"
                    />
                    SELF HELP<br/><h5 className="heading">A HELPING HAND</h5></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-4">
                        <NavLink to="/" className="inactive mx-2" activeClassName="active" exact={true}>Home</NavLink>
                        <NavLink to="/AboutUs" className="inactive mx-2" activeClassName="active" exact={true}>About Us</NavLink>
                        <NavLink to="/ServiceList" className="inactive mx-2" activeClassName="active" exact={true}>Our Services</NavLink>
                    </Nav>
                    <Nav className="ml-auto">
                    <NavDropdown title="LOGIN" id="basic-nav-dropdown" className="NavItems">
                            <NavDropdown.Item><Link to="/Login" className="NavItems">Customer</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/VolunteerLogin" className="NavItems">Volunteer</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Admin_Login" className="NavItems">Admin</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="SIGNUP" id="basic-nav-dropdown" className="NavItems">
                            <NavDropdown.Item><Link to="/customerRegistration" className="NavItems">Customer</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/volunteerRegistration" className="NavItems">Volunteer</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
};

export default NavigationBar;
