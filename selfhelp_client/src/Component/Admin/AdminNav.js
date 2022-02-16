import React from 'react'
import { Navbar, Nav, Container, Button, NavDropdown, Glyphicon } from 'react-bootstrap'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import  logo from '../image/mylogo.png'
import {NavLink,Link,Redirect} from 'react-router-dom'
import Swal from 'sweetalert2'

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
    text-decoration:underline;
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
   .welcome{
       color:purple;
   }

`;

const AdminNavigationBar = () => {

    return (
        <Styles>
            <Navbar fixed="top" expand="xl">
                <Navbar.Brand href="/AdminHome" >
                <img
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline align-top"
                    />
                    SELF HELP<br/><h5 className="heading">A Helping Hand</h5></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-4">
                        <NavLink to="/AdminHome" className="inactive mx-2" activeClassName="active" exact={true}>Home</NavLink>
                        <NavLink to="/CustomerDetails" className="inactive mx-2" activeClassName="active" exact={true}>Customers</NavLink>
                        <NavLink to="/VolunteerDetails" className="inactive mx-2" activeClassName="active" exact={true}>Volunteers</NavLink>
                        <NavLink to="/TaskManager" className="inactive mx-2" activeClassName="active" exact={true}>Task Manager</NavLink>
                        <NavLink to="/Facilities" className="inactive mx-2" activeClassName="active" exact={true}>Facilities</NavLink>
           
                          {/* <b class="welcome">Welcome {JSON.parse(localStorage.getItem("adminInfo")).userName} ..!!</b> */}
                    </Nav>
                    
                </Navbar.Collapse>
                
                <Button variant="danger" onClick={() => {
                    localStorage.removeItem("adminInfo");

                    Swal.fire({
                        title: 'Are you sure?',
                        text: 'Do you want to logout from the application!',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes',
                        cancelButtonText: 'No'
                    }).then((result) => {
                        if (result.value) {
                            Swal.fire(
                                'Logged out!',
                            ) .then(function() {
                                localStorage.removeItem("adminInfo");
                                window.location.href = "/"
                            });
                        } else if (result.dismiss === Swal.DismissReason.cancel) {
                            Swal.fire(
                                'Cancelled',
                            )
                        }
                    })
                    
                    
                    }}>LOGOUT</Button>
                                </Navbar>
                    
                            </Styles>
                        )
                    }

export default AdminNavigationBar;
