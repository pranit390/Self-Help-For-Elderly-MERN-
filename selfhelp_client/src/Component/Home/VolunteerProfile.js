import React, {useEffect,useState} from "react";
import axios from "axios";
import styled from 'styled-components';
import Volnavbar from '../navbar/Volnavbar';
import morning from './customer_dashboard_images/morning.png';
import { Footer } from './Footer';
import { Link } from "react-router-dom";
import API_URL from "../../ApiHelper/API_URL.js";
import {Modal,Button} from 'react-bootstrap';
const Styles = styled.div`
body{
    margin-top: 15%;
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
}
.emp-profile{
    padding: 3%;
    margin-top: 4%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background:   #ffffb3;
    margin-top: 20vh;
    
}
.profile-img{
    text-align: center;
  
    
}
.profile-img img{
    width: 70%;
    height: 100%;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #ffffff;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}
.profile-head h5{
    margin-top: 10vh;
    color: #333;
}
.profile-head h6{
    color: #0062cc;
}
.profile-edit-btn{
    border: none;
   
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757z;
    cursor: pointer;
    margin-top: 20%;
}
.profile-edit-btn:hover{
    border: none;
    
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757z;
    cursor: pointer;
    margin-top: 20%;
}
.proile-rating{
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
}
.proile-rating span{
    color: #495057;
    font-size: 15px;
    font-weight: 600;
}
.profile-head .nav-tabs{
    margin-bottom:5%;
}
.profile-head .nav-tabs .nav-link{
    font-weight:600;
    border: none;
}
.profile-head .nav-tabs .nav-link.active{
    border: none;
    border-bottom:2px solid #0062cc;
}
.profile-work{
    padding: 14%;
    margin-top: -15%;
}
.profile-work p{
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
}
.profile-work a{
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
}
.profile-work ul{
    list-style: none;
}
.profile-tab label{
    font-weight: 600;
}
.profile-tab p{
    font-weight: 600;
    color: #0062cc;
}

#myTabContent{
    margin-left: 50%;
}
`

export const VolunteerProfile=()=>{
    const [privateData,setPrivateData]=useState({});
    const[address,setAddress]  =useState({});
    const[rating,setRating] = useState(0);
    
  //===============================================================================  
    const [btn,setBtn] = useState(true);
    const [show, setShow] = useState(false);
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [address1, setAddress1] = useState("");
    const [zipCode, setZipCode] = useState("");
    const handleClose = () => {setShow(false);window.location.reload(false);}
  const handleShow = () => setShow(true);
  
let task=[];
  const getAllTask = async () => {
        try{
            const res = await axios.get(`${API_URL}/task/getVolunteerCompletedTask/${privateData._id}`)
           
            task=res.data.message;
       
        }catch(err){
            console.log(err.message);
        }
    }

useEffect(() => {
    if(!localStorage.getItem("authToken")){
      window.location.href = "/VolunteerLogin";
    }
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const  res  = await axios.get(`${API_URL}/volunteerAuth/getParticularVolunteer`, config);
      
        setPrivateData(res.data);
        setAddress(res.data.address);
      } catch (error) {
        localStorage.removeItem("authToken");
        
       // setError("You are not authorized please login");
      }
    };
       

    fetchPrivateDate();
   
  }, []);


  const completeTask = async () => {
    await getAllTask();
      
      let sum=0,count=0;
  
      task.map(item=>{
          if(item.rating!=-1)
            {
               
                sum+=item.rating;
                count+=1;
            }
      })

      let avgRate=0;

      if(sum!==0)
         avgRate=Math.round(sum/count);
        
      setRating(avgRate);
     
  
      const payload = {
        rating:avgRate
      }
      await axios.put(`${API_URL}/volunteer/updateVolunteerEngage/${privateData._id}`, payload)
    }

    const getRating = ()=>{
      
        completeTask();
        setBtn(false);
    }


  const editProfile = async () => {

        
    
    const payload = {
        address: {
            addressLine: address1,
            addressCity: city,
            addressState:address.addressState,
            addressZipCode: zipCode,
        },
        phoneNumber:phone
    }
    await axios.put(`${API_URL}/volunteer/updateVolunteerEngage/${privateData._id}`, payload)
  }

  
return(
    <>
 <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form onSubmit={e=>e.preventDefault()}>
                  
                    Phone Number: <input type="text" 
                    value={phone} 
                    onChange={({ target }) => setPhone(target.value)}
                   required />
                    Address Line: <input type="text" 
                     value={address1} onChange={({ target }) => setAddress1(target.value)}
                   required />
                    City: <input type="text" 
                    value={city} onChange={({ target }) => setCity(target.value)} 
                    required/>
                    ZIP code: <input type="text" 
                    value={zipCode} onChange={({ target }) => setZipCode(target.value)} 
                   required />
                
                    
                    <Button variant="primary"  type ="submit" onClick={editProfile}>
                        Save Changes
                    </Button>
                </form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                    </Modal.Footer>
                </Modal>




      <Volnavbar />
    <Styles>



<div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={morning} alt=""/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                       {privateData.firstName+" "+privateData.lastName}
                                    </h5>
                                    <h6>
                                       {privateData.profession}
                                    </h6>
                                    <p className="proile-rating"><span>{btn?<Button onClick={getRating}>Get your rating</Button>:rating}</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                    
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                      
                    <input type="button" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" onClick={handleShow} />
                    </div>
                </div>
                <div className="row">
            
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        {/* <div className="row">
                                            <div className="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{privateData._id}</p>
                                            </div>

                                        </div> */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{privateData.firstName+" "+privateData.lastName}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{privateData.emailId}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{privateData.phoneNumber}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{address.addressLine+","+address.addressCity+","
                                                +address.addressState+","+address.addressZipCode}</p>
                                            </div>
                                        </div>
                            </div>
                       
                        </div>
                    </div>
                
            </form>           
        </div>
        <Footer />
        </Styles>
        </>
 )
}

