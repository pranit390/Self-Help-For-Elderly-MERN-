import React from 'react';
import {Button,Container} from 'react-bootstrap' 
import styled from 'styled-components'
import { Link } from "react-router-dom";
import '../../css/home/footer.css'
import AdminNavigationBar from './AdminNav'
import API_URL from "../../ApiHelper/API_URL.js";


const Styles = styled.div`
.container1{
    position:relative;
    width:1200px;
    height:300px;
    margin:240px auto;
}
.boxes{
    position:relative;
    width:calc(400px - 30px);
    height:calc(300px - 30px);
    background: #ccc;
    float:left;
    margin:15px; 
    box-sizing: border-box;
    overflow:hidden;
    border-radius:10px;
}
.h3{
    text-align:center;
    padding:10px;
}
.h5{
    padding:10px;
    text-align:center;
    color:green;
}

 .xyz{
   padding-left: 20px; 
  
   text-align: center; 
   
 }
 

`;

function VolunteerDetails(props) {
    return (
        <Styles>
        <>
        <AdminNavigationBar/>
        <Container>
        <div class="container1">
            <div class="boxes"><h3 class="h3">All Volunteers</h3>
            
            <br/>
             <h5 class="h5">Click here to get the details of all volunteers</h5>
            <div class="xyz">
             <br/>
             <Button variant="light" type="submit" ><Link to="/AllVolunteersDetails" >Click Here</Link></Button>  	   	 
  	 	  	  </div>	  	   
            </div>
            <div class="boxes"><h3 class="h3">Available Volunteers</h3>
            <br/>
             <h5 class="h5">Click here to get all available volunteers</h5>
            <div class="xyz">
             <br/>
             <Button variant="light" type="submit"><Link to="/AvailableVolunteersDetails">Click Here</Link></Button>  	   	 
  	 	  	  </div>
            </div>
            <div class="boxes"><h3 class="h3">Unavailable Volunteers</h3>
            <br/>
             <h5 class="h5">Click here to get all unavailable volunteers</h5>
            <div class="xyz">
             <br/>
             <Button variant="light" type="submit"><Link to="/UnavailableVolunteersDetails">Click Here</Link></Button>  	   	 
  	 	  	  </div>
                
            </div>

        </div>
        
        </Container>
          {/*  <Footer/> */}
        </>
        </Styles>
    );
}

export default VolunteerDetails;