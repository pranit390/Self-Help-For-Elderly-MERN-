
import AdminNavigationBar from './AdminNav'
import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components'
import { Container,Button } from 'react-bootstrap';
import {Footer} from '../Home/Footer'
import API_URL from '../../ApiHelper/API_URL'
const Styles = styled.div`
  
.h3{
    text-align:center;
}
.pagination {
    margin: 15px auto;
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
    
export class AvailableVolunteersDetails extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 5,
            currentPage: 0
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
		const data = this.state.orgtableData;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice
		})
	
    }

    componentDidMount(){
        this.getData();
    }

    getData() {
        axios
            .get(`${API_URL}/volunteer/availableVolunteerDetails`)
            .then(res => {

                var data = res.data.message;
				
                var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
                

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    orgtableData :res.data.message,
                    tableData:slice
                })
            });
    }

  

    render() {
        return (
            <Styles>
            <>
             <AdminNavigationBar/>
             <br/>
              <br/>
             <br/> 
             <br/>
             <br/>
           <br/>  
<Container>
<h3 class="h3">Available Volunteer Details</h3>
            
                  

<table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                             <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                             <th>Phone number</th>
                             <th>Email</th>
                             <th>Profession</th>
                           
                        </tr>
                    </thead>
                    
                     
                                        <tbody>
                        {
                            this.state.tableData.map((item)=>
                        <tr >
                           <td>{item.firstName} </td>
                           <td>{item.lastName} </td>
                           <td>{item.gender} </td>
                           <td>{item.phoneNumber} </td>
                           <td>{item.emailId}</td>
                           <td>{item.profession}</td>
                          
                           
                        </tr>
                            )
}
                    </tbody>
                   

                 </table>  

                 <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>

            
            </Container>
            <Footer/>
            </>
             </Styles>
        )
       
    }
}

export default AvailableVolunteersDetails;