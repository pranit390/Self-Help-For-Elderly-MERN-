import React from 'react';
import {Button} from 'react-bootstrap' 
import styled from 'styled-components'
import { Link } from "react-router-dom";
import {Footer} from '../Home/Footer'
import '../../css/home/footer.css'
import AdminNavigationBar from './AdminNav'
import done from '../image/done.jpg'
import pending from '../image/pending.png'
import inprogress from '../image/inprogress.jpg'

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
    height:calc(450px - 30px);
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

 .image{
     width:83%;
    padding:10px;
     padding-left: 90px;
     
 }
 .image2{
    width:68%;
   padding:10px;
    padding-left: 120px;
    
}
 .h5{
     padding:10px;
     text-align:center;
 }
 
  .xyz{
    padding-left: 20px; 
   
    text-align: center;
    
    
  }
`;

function TaskManager(props) {
    return (
        <Styles>
        <>
        <AdminNavigationBar/>
        <div class="container1">
            <div class="boxes"><h3 class="h3">Completed Tasks</h3>
            
  	 	  	  	  	   	 <img class="image" src={done} alt="price" />
                                     <br/>
                                     <h5 class="h5">Click here to get all the completed tasks of the day</h5>
                                     <div class="xyz">
                                         <br/>
                                         <Button variant="light" type="submit" ><Link to="/CompletedTasks" >Click Here</Link></Button>  	  
                                     </div>
  	 	  	  	  	   
            </div>
            <div class="boxes"><h3 class="h3">Pending Tasks</h3>
            <img class="image2" src={pending} alt="price" />
            <br/>
               <h5 class="h5">Click here to get all the pending tasks of the day</h5>
                <div class="xyz">
                    <br/>
                    <Button variant="light" type="submit" ><Link to="/IncompleteTasks" >Click Here</Link></Button>  	  
                 </div>
            </div>
            <div class="boxes"><h3 class="h3">Ongoing Tasks</h3>
            <img class="image2" src={inprogress} alt="price" />
            <br/>
               <h5 class="h5">Click here to get all the ongoing tasks of the day</h5>
                <div class="xyz">
                    <br/>
                    <Button variant="light" type="submit" ><Link to="/OngoingTasks" >Click Here</Link></Button>  	  
                 </div>
            </div>
        </div>



       

          
        </>
        </Styles>
    );
}

export default TaskManager;