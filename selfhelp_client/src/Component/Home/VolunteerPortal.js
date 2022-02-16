import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import styled from 'styled-components';
import Volnavbar from "../navbar/Volnavbar";

import {Button,Table,Modal} from 'react-bootstrap';
import { Footer } from '../Home/Footer.js';
import APIHelper from '../../ApiHelper/volDashboardHelper';
import { updateVolunteerEngage} from "../../ApiHelper/volunteerApiHelper.js"
import API_URL from "../../ApiHelper/API_URL.js";

const Styles = styled.div`  


.head{
   
    text-align:center;
   padding-bottom: 3%;
   margin-top: 30vh;
    color:grey;
}

.table{
  width: 80%;
  margin-left:10%;
  overflow-x: scroll;
}

 .section1 {
    margin-bottom:15%;

}

.buttons{
  margin:3%;
}

.buttons1{
  text-align:center;
  margin-left:42%;
  margin-right:42%;
  margin-bottom:3%;
}
 `;




function VolunteerDashboard() {

  const [task, setTask] = useState([]);
  const [privateData,setPrivateData]=useState({});
  const [buttonshow,setbuttonshow] = useState(false);
  const[noTask,setNoTask]=useState(false);
  const handleClose1 = () => {setNoTask(false)};


  const completeTask = async (e, id) => {
    e.stopPropagation()
    const payload = {
      completed: !task.find(todo => todo._id === id).completed
    }
    const updated = await APIHelper.deleteTask(id, payload);
    setTask(task.map(todo => (todo._id === id ? updated : todo)))

    const payload1 = {
      engage: false
    }
    await updateVolunteerEngage(privateData._id,payload1);

   await getAllTask();
  }

  const updateTask = async (e, id) => {
    e.stopPropagation()
    const payload = {
      TaskStatus: 'assigned'
    }
    const updated = await APIHelper.update(id, payload)
    setTask(task.map(todo => (todo._id === id ? updated : todo)))

  }



  const getAllTask = async() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        
      },
    };
    try{
    const res=await axios.get(`${API_URL}/task/getVolunteerTask/${privateData._id}`,config);
    setTask(res.data.message)
    if(res.data.message.length===0){
      
      setNoTask(true);
    }
    if(res.data.message[0].TaskStatus==="assigned"){
      setbuttonshow(true);
    }
    }
    catch(err){
      console.log(err);
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
     
      } catch (error) {
        localStorage.removeItem("authToken");
       // setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
     
    
  }, []);








  return (
    <>

      <Styles>

      <Modal show={noTask} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>No Task Assigned Presently</Modal.Title>
        </Modal.Header>
       
        <Modal.Footer>
     
          <Button variant="primary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
        <Volnavbar />
        <div className={"section1"}>
          <h1 className={"head"}>VOLUNTEER DASHBOARD</h1>
          <Button variant="primary"  className="buttons1" size="lg" 
                      onClick={()=> getAllTask()}
                    >Click To Get Task</Button >
          <Table striped bordered hover variant="dark" >
            <thead>
              <tr>
                <th>Task</th>
                <th>Customer Name</th>
                <th>Customer Phone Number</th>
                <th>Address</th>
                <th>Task Status</th>

              </tr>
            </thead>
            <tbody>
              {task.map(({ TaskName, Customer_Name, Customer_PhoneNumber, Customer_address, _id,TaskStatus }, i) => (
                
             
                <tr >
                  <td>{TaskName}</td>
                  <td>{Customer_Name}</td>
                  <td>{Customer_PhoneNumber}</td>
                  <td ><tr>{Customer_address.address}</tr> 
                  <tr>{Customer_address.state}</tr><tr>{Customer_address.city}</tr> <tr>{ Customer_address.pincode}</tr></td>
                  <td><Button variant="primary" className="buttons" size="sm" 
                    disabled={buttonshow} onClick={e => {updateTask(e, _id);setbuttonshow(true)}}
                  >Start</Button>
                    <Button variant="danger" id='start' className="buttons" size="sm" disabled={!buttonshow}
                      onClick={e => {completeTask(e, _id);setbuttonshow(false);}}
                    >Done</Button ></td>




                </tr>
              ))

              }

            </tbody>

          </Table>
        </div>
      </Styles>
      <Footer />



    </>
  )
}

export default VolunteerDashboard;
