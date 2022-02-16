import React from 'react';
import styled from 'styled-components'
import {Footer} from '../Home/Footer'
import '../../css/home/footer.css'
import AdminNavigationBar from './AdminNav'
import AdminHome_1 from '../image/AdminHome_1.jpg'
import AdminHome_2 from '../image/AdminHome_2.jpg'
import AdminHome_3 from '../image/AdminHome_3.jpg'
const Styles = styled.div`
   .para{
       text-align:center;
       margin-left:15%;
       margin-right:15%;
       color:grey;
       font-size:1.3rem;
   }

   .Container{
    background-color:;
   }
 
`;

function AdminHome(props) {
    return (
        <Styles>
        <>
        <AdminNavigationBar/>
           <br/>
           <br/>
           <br/>
           <br/>

      <div className="description-package" id="description">
  	 <div className="container">
  	 	  
  	 	  <div className="content">
  	 	  	  <div className="box wow bounceInUp">
  	 	  	  	  <div className="inner">
  	 	  	  	  	   
  	 	  	  	  	   <div className="img">
  	 	  	  	  	   	 <img src={AdminHome_1} alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	  
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  	  <div className="box wow bounceInUp" >
  	 	  	  	  <div className="inner">
  	 	  	  	  	  
  	 	  	  	  	   <div className="img">
  	 	  	  	  	   	 <img src={AdminHome_2} alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	  
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  	  <div className="box wow bounceInUp" >
  	 	  	  	  <div className="inner">
  	 	  	  	  	   
  	 	  	  	  	   <div className="img">
  	 	  	  	  	   	 <img src={AdminHome_3} alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	   
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  </div>
  	 </div>

  </div>
  <div className="Container">
                    <p className="para">India’s leading experts of doctors and nurses under a single roof have come to offer the best home care in Ahmedabad. Healthcare at home, is one of the most sought after requirements in post treatment hospital care. Patients and their relatives wish to be cared for from home, and would prefer being helped and assisted at home. The Self help – Home Care Team, with CIMS Hospital offers quality home care services across Ahmedabad and some of it’s surrounding regions.</p>
                    <br />
                    <p className="para">
                        A growing concern has been providing affordable yet complete care for ailing and recovering patients at home. These patients prefer to be in an environment of their liking, where they have family and friends easily accessible to them. Self Help, makes things easy with our team visiting your home, rather than you visiting us. The importance of Self help services is growing. In the last decade or so, people wish to get services at their door step. Though in healthcare, this is not always possible, Self help – Home Care Unit makes most types of healthcare including preventive checkups possible.
            </p>
                    <br />
                    <p className="para">
                        When the health of a loved one is compromised, all treatment options can seem a bit overwhelming. Often, many patients and their families choose toreceive medical care in the comfort of home. It’s a familiar alternative to the hurried pace of a hospital, nursing home, or assisted living community.
            <br />
            And for that reason Self Help, was created to help make home care easy. Relax at Home. Self help will do the rest !
            </p>
                </div>


           <Footer/>
        </>
        </Styles>
    );
}

export default AdminHome;