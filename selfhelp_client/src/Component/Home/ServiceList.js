import React ,{useEffect} from "react"
import styled from 'styled-components'
import img1 from './images/img1.jpg';
import NavigationBar from '../navbar/navbar.js';
import {Footer} from './Footer'
import '../../css/home/footer.css'
const Styles = styled.div`  

.heading2 {
    margin-right:20%;
    background-color:#a8d8f0;
    margin-left:20%;
    color: #3d5c5c;
    padding-top: 20px;
    
}

.heading3 {
    background-color:#a8d8f0;
    color: #3d5c5c;
    margin-left:20%;
    margin-right:20%;
    
}

.list{
    background-color:#e6ffff;
    margin-left:20%;
    margin-right:20%;
    margin-bottom:5%;
    color: grey;
    font-weight: bold;
    
}

.list1{
    color:grey;
    font-weight: bold;
}

.section1 {
   
    background:url(${img1}) no-repeat;
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

.para{
   
    margin-left:10%;
    margin-right:40%;
    padding-bottom: 100px;
    font-weight: bold;
}

.heading1{
    margin-left:10%;
    padding-top: 100px;
    padding-bottom: 30px;
}
 `;


export const ServiceList=()=>{
    //===========================
   useEffect(()=>{
    window.scrollTo(0, 0);
   },[])

   //============================
    return(
        <>
        <NavigationBar/>
<Styles>
<div className={"section1"}>
    <h1 className={"heading1"}>Services</h1>
    <p  className = {"para"}>
        Self Help offers the best nurses and is proud to provide the best doctors
        in Ahmedabad at your doorstep to your home though a few simple steps. Self Help provide the amazing team 
        of doctors and nurses that offer a wide variety of services to your home backed by the excellent 
        standard of care you expect from the best hospital in India, right within the comforts of your own home.
    </p>
</div>
    <h1 className = {"heading2"}>Services</h1>
    <ul className = {"list"}>
        <li className={"list1"}> Vaccination at home(Adult/Paediatric) </li>
        <li className={"list1"}> Implementing clinical care plans </li>
        <li className={"list1"}> Attending to disabilities, chronic illness, and/or therapies </li>
        <li className={"list1"}> Coordinating home medical equipment, pharmacy , and supplies </li>
        <li className={"list1"}> Pharmacy (medications) at your doorstep </li>
        <li className={"list1"}> Assisting with mobility and transfers </li>
        <li className={"list1"}> Performing personal care </li>
        <li className={"list1"}> Assisting with daily activities </li>
    </ul>
    <h2 className = {"heading3"}>Rehabilitation Services</h2>
    <ul className = {"list"}>
        <li>Physiotherapy (Occupational Therapy and Rehabilitation Center).</li>
        <li>Nutritional assessment (With qualified Dietician)</li>
    </ul>
    <h2 className = {"heading3"}>24×7 Specialized Nursing Services</h2>
    <ul className = {"list"}>
        <li className={"list1"}>Escort nurse for patients shifting. </li>
        <li className={"list1"}> Wound care and dressing. </li>
        <li className={"list1"}> Intravenous (IV) infusion therapy, Intra Muscular(IM) and Sub Cutaneous (SC) injections. </li>
        <li className={"list1"}> Catheter (urinary) insertion and care. </li>
        <li className={"list1"}> Tracheostomy Care , tube insertion in food pipe (Ryle’s Tube Insertion). </li>
        <li className={"list1"} > Skilled nursing  in Chronic Illnesses like : </li>
        <li className={"list1"}> Diabetic Care. </li>
        <li className={"list1"}> Nephro Care. </li>
        <li className={"list1"}> Neuro Care. </li>
        <li className={"list1"}> Post transplant Care. </li>
        <li className={"list1"}> Parkinson’s Disease. </li>
        <li className={"list1"}> Mental Illnesses. </li>
    </ul>
</Styles>
   <Footer/>
    </>
  )
}