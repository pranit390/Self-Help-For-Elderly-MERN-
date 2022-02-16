import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import Volnavbar from "../navbar/Volnavbar";
import Table from 'react-bootstrap/Table';

import Button from 'react-bootstrap/Button';
import { Footer } from './Footer.js';

import API_URL from "../../ApiHelper/API_URL.js";


const Styles = styled.div`  
.table{
  width: 80%;
  overflow-x: scroll;
  margin-left:10%;
}



.head{
   text-align:center;
  
 padding-bottom: 3%;
 margin-top: 30vh;
  color:grey;
}


 .section1 {
    margin-bottom:5%;

}
.buttons1{
  text-align:center;
  margin-left:42%;
  margin-right:42%;
  margin-bottom:3%;
}

.pagination {
  margin: 15px auto;
  margin-left:20%;
  display: flex;
  list-style: none;
  outline: none;
}
.pagination > .active > a{
  background-color: #47ccde ;
  border-color: #47ccde ;
  color: #fff;
}
.pagination > li > a{
  border: 1px solid #47ccde ;
  padding: 5px 10px;
  outline: none;
  cursor: pointer;
}
.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
  background-color: #47ccde ;
  border-color: #47ccde;
  outline: none ;
}
.pagination > li > a, .pagination > li > span{
  color: #47ccde
}
.pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span{
  border-radius: unset
} 

 `;




function VolunteerTask() {

  const [task, setTask] = useState([]);
  const [privateData, setPrivateData] = useState({});
  //=============================================================================pagination
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(5);
  const [pageCount, setPageCount] = useState(0)
  //=============================================================================


  const getAllTask = async () => {
    axios.get(`${API_URL}/task/getVolunteerCompletedTask/${privateData._id}`).then(res => {

      setTask(res.data.message)
      const data = res.data.message;
      const slice = data.slice(offset, offset + perPage)

      setData(slice);
      setPageCount(Math.ceil(data.length / perPage))

    }).catch(err => {
      console.log(err);
    });



  }


  useEffect(() => {
    getAllTask();
  }, [offset])


  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
  };



  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
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
        const res = await axios.get(`${API_URL}/volunteerAuth/getParticularVolunteer`, config);

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
        <Volnavbar />
        <div className={"section1"}>
          <h1 className={"head"}>COMPLETED TASKS</h1>
          <Button variant="primary" className="buttons1" size="lg"
            onClick={() => getAllTask()}
          >Click To Get Task</Button >
          <Table striped bordered hover variant="dark" className={"table"}>
            <thead>
              <tr>
                <th>Task</th>
                <th>Customer Name</th>
                <th>Customer Phone Number</th>


              </tr>
            </thead>
            <tbody>
              {data.map(({ TaskName, Customer_PhoneNumber, Customer_Name }, i) => (

                <tr>
                  <td>{TaskName}</td>
                  <td>{Customer_Name}</td>
                  <td>{Customer_PhoneNumber}</td>



                </tr>
              ))

              }

            </tbody>

          </Table>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
        </div>



      </Styles>




      <Footer />



    </>
  )
}

export default VolunteerTask;