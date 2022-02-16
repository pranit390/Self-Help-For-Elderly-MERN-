import React from 'react';
import axios from "axios";
import { Navbar, Nav, Container, Button, NavDropdown, Glyphicon } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import  logo from '../image/mylogo.png';
import {NavLink,Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import API_URL from "../../ApiHelper/API_URL.js";

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

 const Volnavbar = () => {

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
                        <NavLink to="/voldashboard" className="inactive mx-2" activeClassName="active" exact={true}>Home</NavLink>
                        <NavLink to="/volunteertask" className="inactive mx-2" activeClassName="active" exact={true}>Tasks</NavLink>
                        {/* <NavLink to="/rating" className="inactive mx-2" activeClassName="active" exact={true}>Rating</NavLink> */}
           
                        <NavLink to="/VolunteerProfile" className="inactive mx-2" activeClassName="active" exact={true}>My Profile</NavLink>
          
                       
              



                    </Nav>
                   
                </Navbar.Collapse>

                <Button variant="danger" onClick={() => {
                    

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

                                const fetchPrivateDate = async () => {
                                    const config = {
                                      headers: {
                                        "Content-Type": "application/json",
                                        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                                      },
                                    };
                              
                                    try {
                                      const  res  = await axios.get(`${API_URL}/volunteerAuth/getParticularVolunteer`, config);
                                     
                                      const payload = {
                                        availability:false
                                      }
                                      await axios.put(`${API_URL}/volunteer/updateVolunteerEngage/${res.data._id}`, payload)
                                     
                                    } catch (error) {
                                      localStorage.removeItem("authToken");
                                     // setError("You are not authorized please login");
                                    }
                                  };
                                 
                                  fetchPrivateDate();

                               setTimeout(()=>{localStorage.removeItem("authToken");
                               window.location.href = "/"},3000); 
                                
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

export default Volnavbar;
