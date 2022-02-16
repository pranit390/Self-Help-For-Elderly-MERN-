import React, {useEffect} from "react"
import styled from 'styled-components'
import img2 from './images/img2.jpg';
import NavigationBar from '../navbar/navbar.js';
import {Footer} from './Footer'
import '../../css/home/footer.css'

const Styles = styled.div`  
.h1{
   margin-left:40%;
}

.h1 {
    margin-right:20%;
    
    margin-left:20%;
    color: #3d5c5c;
    font-weight: bold;
    
}

.h1 {
    
    color: white;
    margin-left:20%;
    margin-right:20%;
    margin-top: 5%;
    margin-bottom: 2%;
    font-weight: bold;
    
}

.list{
    background-color:black;
    opacity: 0.5;
    margin-left:20%;
    margin-right:20%;
    margin-bottom:5%;
    color: white;
    font-weight: bold;
    font-style: Monospace Lucida Console;
    
}

.para{
    margin-left:10%;
    margin-right:40%;
    font-weight: bold;
    color:white ;
    backgound-color: black;

}

.heading1{
    margin-left:10%;
    font-weight: bold;
    color: white;
}

.section1 {
   
    background:url(${img2}) no-repeat;
    background-size: cover;
  
    background-width:100%
    background-height: 500vh;
    opacity: 0.7;
    margin-top:115px;
    box-shadow: 0px 0px 20px 2px rgba(15, 15, 15, 0.2);
    margin-left: 20px;
    margin-right: 20px;
	border-radius: 10px;

}


`


export const Aboutus=()=>{

    useEffect(()=>{
        window.scrollTo(0, 0);
       },[])


return(
    <>
    <NavigationBar/>
    <Styles>
<div className={"section1"}>
    <h1 className={"heading1"}  >Why Self Help?</h1>
    <p className = {"para"}>
        Self Help offers the best nurses in Ahmedabad and is proud to provide the best doctors
        in Ahmedabad at your doorstep to your home though a few simple steps. Self Help has partnered
        with the 2018 winner for the best hospital in Gujarat – CIMS Hospital to provide the amazing team 
        of doctors and nurses that offer a wide variety of services to your home backed by the excellent 
        standard of care you expect from the best hospital in India, right within the comforts of your own home.
    </p>

    <h1 className={"h1"}>Why Choose Us?</h1>
   <p className={"list"}> Self Help (A UNIT OF CIMS HOSPITAL PVT LTD) – 
       we know what is required to meet your needs at home, even tailoring our services
        to meet individual needs. A level of service which emphasises on a high level of 
        cleanliness and hygiene from our staff to meet and exceed the healthcare industry’s highest standards.
                 
     People often compare services offered by two health care at home providers and find confusion 
    on who to pick. With Self Help powered by CIMS Hospital which has been rated as one of the
     best hospitals for patient experience by patients through online reviews and testimonials, makes
      it easy for you to skip the need to spend time picking and choosing. It’s quite clear that Care 
      At Homes is always going to be your first and last choice. It’s the winner all the time.
        
        
        <ul>
            <li className={"list1"}> Self Help offers 24-hour services, including all holidays and weekends. </li>
            <li className={"list1"}> Self Help offers Highly trained and experienced healthcare professionals ! </li>
            <li className={"list1"}> Self Help offers Regular assessments by management to ensure client satisfaction ! </li>
            <li className={"list1"}> Self Help offers IN HOME consultation ! </li>
        </ul>
    </p>
</div>
</Styles>
<Footer/>
</>
 )
}