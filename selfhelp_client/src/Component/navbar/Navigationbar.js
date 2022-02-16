import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { Nav, Navbar,Button } from 'react-bootstrap';
import styled from 'styled-components';
import  logo from '../image/mylogo.png'
import Swal from 'sweetalert2';

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

export const NavigationBar = () => (
  
  <Styles>
    <Navbar expand="lg">
    <Navbar.Brand>
                <img
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline align-top"
                    />
                    SELF HELP<br/><h5 className="heading">A Helping Hand</h5></Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
         
            
              <NavLink to="/CustomerDashboard" className="inactive mx-2" activeClassName="active" exact={true}>Home</NavLink>
              <NavLink to="/CustomerDashboardTask" className="inactive mx-2" activeClassName="active" exact={true}>Tasks</NavLink>
              <NavLink to="/CustomerProfile" className="inactive mx-2" activeClassName="active" exact={true}>My Profile</NavLink>
              <NavLink to="/feedback" className="inactive mx-2" activeClassName="active" exact={true}>Rate Us</NavLink>
         
          
        
        </Nav>
      </Navbar.Collapse>

      <Button variant="danger" onClick={() => {
                    localStorage.removeItem("authToken");

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
  </Styles >
)