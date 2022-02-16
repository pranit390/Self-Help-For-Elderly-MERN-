import axios from "axios"
import React,{ useEffect, useState } from "react"

import styled from 'styled-components';//For internal styling
//======================================================================================================Importing Images
import cus1 from './customer_dashboard_images/cus1.jpg';
import cus2 from './customer_dashboard_images/cus2.jpg';
import cus3 from './customer_dashboard_images/cus3.jpg';
import img1 from './customer_dashboard_images/img1.jpg';
import service1 from './customer_dashboard_images/service1.jpg';
import service2 from './customer_dashboard_images/service2.jpg';

import walk from './customer_dashboard_images/walk.png'
import morning from './customer_dashboard_images/morning.png';
import evening from './customer_dashboard_images/evening.jpg';
import plumber from './customer_dashboard_images/plumbing-service.png';
import grocery from './customer_dashboard_images/grocery.png';
import housecleaning from './customer_dashboard_images/housecleaning.png';
import service3 from './customer_dashboard_images/medicine-service.png';

import { NavigationBar } from '../navbar/Navigationbar'
import { Footer } from '../Home/Footer.js'

//========================================================================================================Importing APIHELPER 
import APIHelperCustomer from "../../ApiHelper/customerApiHelper"
import { getVolunteerIdBasedOnService } from "../../ApiHelper/volunteerApiHelper.js"
import { createTask } from "../../ApiHelper/customerDashboardApiHelper"
//=========================================================================================================Bootstrap
import {Modal,Button} from 'react-bootstrap';
//===========================================================================================================styling start

//Style introduced using  styled component

import API_URL from "../../ApiHelper/API_URL.js";
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
    padding-left:1%;
    padding-right:3%;

    
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

.Choose{
    color:white;
}




 

         
.about{
	padding:80px 0px;
	background-color:#e6f9ff;
}

.about .content{ 
 -webkit-display: flex;
 display: flex;
}
.about .content .box{
	flex:0 0 33.33%;
	max-width: 33.33%;
	padding:15px;
}
.about .content .box .inner{
	background-color: #1aa3ff;
}
.about .content .box:nth-child(2) .inner{
	background-color: 

    #00cccc;
}
.about .content .box .inner .img img{
	width: 100%;
}
.about .content .box .inner .text{
	padding:30px;
}

.about .content .box .inner .text h4{
  font-size: 20px;
  margin:0;
  padding: 0px 0px 15px;
  font-weight: 500;
  color:#ffffff;
 text-transform: capitalize;
  text-align: center;
}
.about .content .box .inner .text p{
	font-size: 15px;
	line-height:20px;
	color:#ffffff;
	text-align: center;
	margin:0;
	font-family: 'Open Sans', sans-serif;
}

.head{
    margin-left:35%;
   padding-bottom: 5%;
   margin-top: 5%;
    color:grey;
}

.heading2{
    margin-top: 3%;
}

.options{
    padding-top:5%;
    padding-right:5%;
    padding-left:5%;
    padding-bottom:5%;
    opacity: 0.5;
}
.options:hover{
    opacity: 1;
    cursor: pointer;
    
}

.service{
    color:white;
}
.service:hover{
    color:black;
    cursor: pointer;
}

.options{
    -moz-box-shadow: 0 0 10px #ccc;
    -webkit-box-shadow: 0 0 10px #ccc;
    box-shadow: 0 0 10px #ccc;
  }


  /*if screen width is less than or equal to 767px then*/
@media(max-width: 767px){
	
  .about .content{
	  flex-wrap: wrap;
  }
  .about .content .box {
	  flex: 0 0 100%;
	  max-width: 100%;
  }
  
  }

 `;


//==================================================================================================================================
//Functional Component 
export const CustomerDashboard = () => {

    //====================================================================PopUp
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () =>{ setShow(true);setButtonDisabled(true);}
  //================================================================================POPUp
  const [event,setEvent]=useState(null);
  const[taskName,setTaskName]=useState('');
  const[alertMessage,setAlertMessage]=useState();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [privateData,setPrivateData]=useState({});

  useEffect(()=>{
      if(!localStorage.getItem("authToken")){
        window.location.href = "/Login";
      }
      const fetchPrivateDate = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };
  
        try {
          const  res  = await axios.get(`${API_URL}/auth/getParticularCustomer`, config);
         
          setPrivateData(res.data);
        } catch (error) {
          localStorage.removeItem("authToken");
         // setError("You are not authorized please login");
        }
      };
  
      fetchPrivateDate();
  },[])

    



    //Function called when Services get clicked to confirm
    const message = async (e) => {
        setEvent(e);
        if(e.target.nodeName==="DIV"){
            setAlertMessage(<strong>Your task is {e.target.id}</strong>)  
        }
        if(e.target.nodeName==="IMG"){
        setAlertMessage(<strong>Your task is {e.target.name}</strong>)}
              handleShow();
      }

    const registeredTask=async()=>{

        setButtonDisabled(false);

        const e=event;
        
        //==================================================================================================================Medical Services
        if (e.target.name == "ambulance" || e.target.name == "hospital-visit" || e.target.name == "medicine-delivery") {
            let serviceId = "60478f00c8319b1a9dbd3c05";//medical service ID


            const volunteerId = await getVolunteerIdBasedOnService(serviceId);//Getting volunteer status(available/unavailable).
        
            if (volunteerId !== "not found") {
                  

              
                const details = {
                    Customer_id: privateData._id,
                    Customer_Name: privateData.firstName + " " + privateData.lastName,

                    Customer_address: {
                        address: privateData.address,
                        state: privateData.state,
                        city: privateData.city,
                        pincode: privateData.zipCode
                    },

                    Customer_PhoneNumber: privateData.phoneNumber,



                    Volunteer_Name: volunteerId.firstName + " " + volunteerId.lastName,

                    Volunteer_PhoneNumber: volunteerId.phoneNumber,

                    Volunteer_id:volunteerId,
                    Service_id: serviceId,
                    TaskName: e.target.name

                }
                const task = await createTask(details);
                setAlertMessage(<strong>Your task is registered soon our volunteer will be reaching you for more information
                     </strong>)
            }
            else {
                setAlertMessage(<strong>Sorry! No Volunteers </strong>)
            }
        }

        //===============================================================================================================Assistance in HouseHold
        if (e.target.name == "house-cleaning" || e.target.name == "grocery-delivery" || e.target.name == "plumber-facility") {
            let serviceId = "60479538fe7adc5be8e5ce49";
            const volunteerId = await getVolunteerIdBasedOnService(serviceId)
           
            if (volunteerId !== "not found") {
              

                const details = {
                    Customer_id:privateData._id,
                    Customer_Name: privateData.firstName + " " + privateData.lastName,

                    Customer_address: {
                        address: privateData.address,
                        state: privateData.state,
                        city: privateData.city,
                        pincode: privateData.zipCode
                    },

                    Customer_PhoneNumber: privateData.phoneNumber,



                    Volunteer_Name: volunteerId.firstName + " " + volunteerId.lastName,

                    Volunteer_PhoneNumber: volunteerId.phoneNumber,

                    Volunteer_id: volunteerId,
                    Service_id: serviceId,
                    TaskName: e.target.name

                }
                const task = await createTask(details);
                setAlertMessage(<strong>Your task is registered soon our volunteer will be reaching you for more information
                    </strong>)
            }
            else {
                setAlertMessage(<strong>Sorry! No Volunteers </strong>)
            }
        }


//=========================================================================================================================Transportaion
        if (e.target.name == "morning-walk" || e.target.name == "evening-walk" || e.target.name == "locomotive-service") {
            let serviceId = "60479550fe7adc5be8e5ce4a";
            const volunteerId = await getVolunteerIdBasedOnService(serviceId)
            
            if (volunteerId !== "not found") {
            

                const details = {
                    Customer_id: privateData._id,
                    Customer_Name: privateData.firstName + " " + privateData.lastName,

                    Customer_address: {
                        address: privateData.address,
                        state: privateData.state,
                        city: privateData.city,
                        pincode: privateData.zipCode
                    },

                    Customer_PhoneNumber: privateData.phoneNumber,

                    Volunteer_Name: volunteerId.firstName + " " + volunteerId.lastName,

                    Volunteer_PhoneNumber: volunteerId.phoneNumber,

                    Volunteer_id: volunteerId,
                    Service_id: serviceId,
                    TaskName: e.target.name

                }
                const task = await createTask(details);
                setAlertMessage(<strong>Your task is registered soon our volunteer will be reaching you for more information
                    </strong>)
            }
            else {
                setAlertMessage(<strong>Sorry! No Volunteers </strong>)
            }
        }



        if (e.target.id == "ambulance" || e.target.id == "hospital-visit" || e.target.id == "medicine-delivery") {
            let serviceId = "60478f00c8319b1a9dbd3c05";//medical service ID


            const volunteerId = await getVolunteerIdBasedOnService(serviceId);//Getting volunteer status(available/unavailable).
        
            if (volunteerId !== "not found") {
                  

              
                const details = {
                    Customer_id: privateData._id,
                    Customer_Name: privateData.firstName + " " + privateData.lastName,

                    Customer_address: {
                        address: privateData.address,
                        state: privateData.state,
                        city: privateData.city,
                        pincode: privateData.zipCode
                    },

                    Customer_PhoneNumber: privateData.phoneNumber,



                    Volunteer_Name: volunteerId.firstName + " " + volunteerId.lastName,

                    Volunteer_PhoneNumber: volunteerId.phoneNumber,

                    Volunteer_id:volunteerId,
                    Service_id: serviceId,
                    TaskName: e.target.id

                }
                const task = await createTask(details);
                setAlertMessage(<strong>Your task is registered soon our volunteer will be reaching you for more information
                     </strong>)
            }
            else {
                setAlertMessage(<strong>Sorry! No Volunteers </strong>)
            }
        }

        //===============================================================================================================Assistance in HouseHold
        if (e.target.id == "house-cleaning" || e.target.id== "grocery-delivery" || e.target.id == "plumber-facility") {
            let serviceId = "60479538fe7adc5be8e5ce49";
            const volunteerId = await getVolunteerIdBasedOnService(serviceId)
           
            if (volunteerId !== "not found") {
              

                const details = {
                    Customer_id:privateData._id,
                    Customer_Name: privateData.firstName + " " + privateData.lastName,

                    Customer_address: {
                        address: privateData.address,
                        state: privateData.state,
                        city: privateData.city,
                        pincode: privateData.zipCode
                    },

                    Customer_PhoneNumber: privateData.phoneNumber,



                    Volunteer_Name: volunteerId.firstName + " " + volunteerId.lastName,

                    Volunteer_PhoneNumber: volunteerId.phoneNumber,

                    Volunteer_id: volunteerId,
                    Service_id: serviceId,
                    TaskName: e.target.id

                }
                const task = await createTask(details);
                setAlertMessage(<strong>Your task is registered soon our volunteer will be reaching you for more information
                    </strong>)
            }
            else {
                setAlertMessage(<strong>Sorry! No Volunteers </strong>)
            }
        }


//=========================================================================================================================Transportaion
        if (e.target.id == "morning-walk" || e.target.id== "evening-walk" || e.target.id == "locomotive-service") {
            let serviceId = "60479550fe7adc5be8e5ce4a";
            const volunteerId = await getVolunteerIdBasedOnService(serviceId)
            
            if (volunteerId !== "not found") {
            

                const details = {
                    Customer_id: privateData._id,
                    Customer_Name: privateData.firstName + " " + privateData.lastName,

                    Customer_address: {
                        address: privateData.address,
                        state: privateData.state,
                        city: privateData.city,
                        pincode: privateData.zipCode
                    },

                    Customer_PhoneNumber: privateData.phoneNumber,

                    Volunteer_Name: volunteerId.firstName + " " + volunteerId.lastName,

                    Volunteer_PhoneNumber: volunteerId.phoneNumber,

                    Volunteer_id: volunteerId,
                    Service_id: serviceId,
                    TaskName: e.target.id

                }
                const task = await createTask(details);
                setAlertMessage(<strong>Your task is registered soon our volunteer will be reaching you for more information
                    </strong>)
            }
            else {
                setAlertMessage(<strong>Sorry! No Volunteers </strong>)
            }
        }       
    
    }  
   


    return (
        <>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Your Task</Modal.Title>
        </Modal.Header>
        <Modal.Body> <p>{alertMessage}</p></Modal.Body>
        <Modal.Footer>
       {
           buttonDisabled && <Button  variant="secondary"   onClick={registeredTask} > Confirm</Button>
       }
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


     


            <Styles>
                <NavigationBar />
                <h1 className={"head"}>CUSTOMER DASHBOARD</h1>
                <section className="about" id="about">
                    <div className="container">
                        <div className="content">
                            <div className="box wow bounceInUp">
                                <div className="inner">
                                    <div className="img">
                                        <img src={cus1} alt="img" height="200px " width="100px" />
                                    </div>
                                    <div className="text">
                                        <h4>Medical Services</h4>

                                        <label className={"Choose"} for="medical" >Choose a service:</label>
                                        <div className={"service"} id="ambulance"  onClick={e => message(e)}> <img src={service1} className={"options"} name="ambulance" alt="img" height="80px " width="80px" onClick={(e) => message(e)} /> Ambulance</div>
                                        <div className={"service"}  id="hospital-visit" onClick={e => message(e)}> <img src={service2} className={"options"} name="hospital-visit" alt="img" height="80px " width="80px" onClick={e => message(e)} />Hospital Visit</div>
                                        <div className={"service"} id="medicine-delivery" onClick={e => message(e)}> <img src={service3} className={"options"} name="medicine-delivery" alt="img" height="80px " width="80px" onClick={e => message(e)} /> Medicine delivery</div>

                                    </div>
                                </div>
                            </div>
                            <div className="box wow bounceInUp" >
                                <div className="inner">
                                    <div className="img">
                                        <img src={cus3} alt="img" height="200px " width="100px"/>
                                    </div>
                                    <div className="text">
                                        <h4>Assistance In Household</h4>


                                        <label className={"Choose"}  >Choose a service:</label>
                                        <div className={"service"} id="house-cleaning"  onClick={e => message(e)}> <img src={housecleaning} className={"options"} name="house-cleaning" alt="img" height="80px " width="80px" onClick={e => message(e)} /> House Cleaning</div>
                                        <div className={"service"} id="grocery-delivery"  onClick={e => message(e)}> <img src={grocery} className={"options"} name="grocery-delivery" alt="img" height="80px " width="80px" onClick={e => message(e)} /> Grocery Delivery</div>
                                        <div className={"service"} id="plumber-facility"  onClick={e => message(e)}> <img src={plumber} className={"options"} name="plumber-facility" alt="img" height="80px " width="80px" onClick={e => message(e)} /> Plumber facility</div>







                                    </div>
                                </div>
                            </div>
                            <div class="box wow bounceInUp" data-wow-delay="0.4s">
                                <div class="inner">
                                    <div class="img">
                                        <img src={cus2} alt="img" height="200px " width="100px"  />

                                    </div>

                                    <div class="text">
                                        <h4>Transportation</h4>

                                        <div className="submitdiv">


                                            <label className={"Choose"} for="medical" >Choose a service:</label>
                                            <div className={"service"} id="morning-walk"  onClick={e => message(e)} > <img src={morning} className={"options"} name="morning-walk" alt="img" height="80px " width="80px" onClick={e => message(e)} /> Morning Walk</div>
                                            <div className={"service"} id="evening-walk"  onClick={e => message(e)}> <img src={evening} className={"options"} name="evening-walk" alt="img" height="80px " width="80px" onClick={e => message(e)} /> Evening Walk</div>
                                            <div className={"service"} id="locomotive-service"  onClick={e => message(e)}> <img src={walk} className={"options"} name="locomotive-service" alt="img" height="80px " width="80px" onClick={e => message(e)} /> Locomotive Service</div>


                                            <div class="dropdown">


                                            </div>

                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <h1 className={"heading2"}>Facilities </h1>

                <p className={"list"}>
                    Self Help offers the best care taker and is proud to provide the professionals
                    at your doorstep to your home though a few simple steps. Self Help provide the amazing team
                    of medical and regular task representatives that offer a wide variety of services to your home backed by 
                    the excellent standard of care you expect from the best hospital in India, right within the comforts of your own home.
                    Help with the activities of walking, house cleaning, delivery, or locomotive services, is called
                    personal or custodial care. Home health aides can provide personal care services that range from a few
                    hours a day to around-the-clock live-in care.  They may also provide limited assistance with things
                    such as taking blood pressure or offering medication reminders.
                </p>



            </Styles>
            <Footer />

        </>
    )
}