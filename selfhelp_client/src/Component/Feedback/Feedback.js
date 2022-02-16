import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table,Col,Form,Button,Modal} from 'react-bootstrap'
import styled from 'styled-components'
import { NavigationBar } from '../navbar/Navigationbar';

import API_URL from "../../ApiHelper/API_URL.js";


import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

import Box from '@material-ui/core/Box';

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


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

function Feedback(props) {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  const [taskId,setTaskId]=useState("");

    //====================================================================PopUp
    const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false);
    rating();  };
  const handleShow = (id) =>{ setShow(true);setTaskId(id);}

  const handleClose1 = () => {setNoTask(false)};
  

  const [task, setTask] = useState([]);
  const [privateData,setPrivateData]=useState({});
  const[noTask,setNoTask]=useState(false);
  
  


  const rating = async () => {

    const payload = {
      
          rating:value
    }
    await axios.put(`${API_URL}/task/update/${taskId}`, payload)
    setTaskId("");
  }


  const getAllTask = () => {

    axios.get(`${API_URL}/task/getTask/${privateData._id}`

    ).then(res => {
     
    setTask(res.data)
    
   return res.data;
     
    }).then(response=>{
      const arr=[];
      let j=0;
    for(let i=0;i<response.length;i++){
      if(response[i].completed===true && response[i].rating===-1){
        arr[j]=response[i];
        j++;
     }
    }
     
    if(arr.length===0){
    
      setNoTask(true);
    }
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
  
    fetchPrivateDate();

   
  }, []);

 

  return (
    <>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rating</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
        <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
         </Modal.Body>
        <Modal.Footer>
     
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={noTask} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>No Task Present For Feedback</Modal.Title>
        </Modal.Header>
       
        <Modal.Footer>
     
          <Button variant="primary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      <NavigationBar />
      <Styles>
        <h1>YOUR PREVIOUSLY BOOKED SERVICES</h1>
        <Button  variant="secondary" className="buttons1" onClick={()=>getAllTask()} >Click To RateUs</Button>
     
        <Table striped condensed hover>
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Service status</th>
              <th>Volunteer Name</th>
              <th>Volunteer Phone Number</th>
              <th>Date of Booking</th>
              <th>Transaction Id </th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {
              task.map((item, index) =>{
                return ((item.completed===true && item.rating===-1) && <tr key={index}>
                  <td>{item.TaskName}</td>
                  <td>{item.TaskStatus}</td>
                  <td>{item.Volunteer_Name}</td>
                  <td>{item.Volunteer_PhoneNumber}</td>
                  <td>{item.bookingDate}</td>
                  <td>{item._id}</td>
                  <td><Button  variant="secondary" onClick={()=>handleShow(item._id)} >Rate</Button></td>
                </tr>)
              }
                
              )
            }
          </tbody>
        </Table>
      </Styles>
    </>
  );
}


export default Feedback;