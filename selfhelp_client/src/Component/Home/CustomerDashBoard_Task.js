import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table,Col,Form,Button} from 'react-bootstrap'
import styled from 'styled-components'
import { NavigationBar } from '../navbar/Navigationbar';
import API_URL from "../../ApiHelper/API_URL.js";
const Styles = styled.div`

    h1{
        margin-top:50px;
        margin-bottom:60px;
        text-align:center;
        font-size:2.5rem;
        text-color:#4e4e32;
    }

    .buttons1{
      text-align:center;
      margin-left:42%;
      margin-right:42%;
      margin-bottom:3%;
    }

`

function CustomerDashBoard_Task(props) {

  const [task, setTask] = useState([]);
  const [status, setStatus] = useState('unassigned');
  const [service, setService] = useState('ambulance');
  const [privateData,setPrivateData]=useState({});

 

  function handleStatusChange(e) {
    setStatus(e.target.value);
}

function handleServiceChange(e) {
  setService(e.target.value);
}


  const getAllTask = () => {

    axios.get(`${API_URL}/task/getTask/${privateData._id}`

    ).then(res => {
     
      setTask(res.data);
    }).catch(err => {
      console.log(err);
    });
   

  }

  useEffect(() => {
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
    console.log("ankesh");
    fetchPrivateDate();

   
  }, []);


  

  let listOfSortedData=[];
  let indexOfList=0;
  
 


  return (
    <>
      <NavigationBar />
      <Styles>
        <h1>YOUR PREVIOUSLY BOOKED SERVICES</h1>
      
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Task Status</Form.Label>
              <Form.Control as="select" defaultValue={status}
                onChange={handleStatusChange}>
                <option selected value="unassigned">UnAssigned</option>
                <option value="assigned">Assigned</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Service</Form.Label>
              <Form.Control as="select" defaultValue={service}
                onChange={handleServiceChange}>
                <option selected value="ambulance">Ambulance</option>
                <option selected value="medicine-delivery">Medicine Delivery</option>
                <option value="hospital-visit">Hospital Visit</option>
                <option selected value="grocery-delivery">Grocery Delivery</option>
                <option selected value="house-cleaning">House Cleaning</option>
                <option selected value="plumber-facility">Plumber facility</option>
                <option selected value="morning-walk">Morning Walk</option>
                <option selected value="evening-walk">Evening Walk</option>
                <option selected value="locomotive-service">Locomotive Service</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary"  className="buttons1" size="lg" 
                      onClick={()=> getAllTask()}
                    >Click To Get Task</Button >
          </Form.Row>
         
        </Form>

        <Table striped condensed hover>
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Service status</th>
              <th>Volunteer Name</th>
              <th>Volunteer Phone Number</th>
              <th>Date of Booking</th>
            </tr>
          </thead>
          <tbody>
            {
              task.map((item, index) =>{
                return ((item.TaskStatus===status && item.TaskName===service) && <tr key={index}>
                  <td>{item.TaskName}</td>
                  <td>{item.TaskStatus}</td>
                  <td>{item.Volunteer_Name}</td>
                  <td>{item.Volunteer_PhoneNumber}</td>
                  <td>{item.bookingDate}</td>
                </tr>)
              }

              )}
          </tbody>
        </Table>
      </Styles>
    </>
  );
}

export default CustomerDashBoard_Task;