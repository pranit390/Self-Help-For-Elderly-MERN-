import React from 'react'; 
import {Footer} from '../Home/Footer'
import '../../css/home/footer.css'
import AdminNavigationBar from './AdminNav'
import AdminAmbulance from '../image/AdminAmbulance.jpeg'
import AdminDoctor from '../image/AdminDoctor.jpeg'
import AdminMedicine from '../image/AdminMedicine.jpg'
import AdminHouseCleaning from '../image/AdminHouseCleaning.jpg'
import AdminPlumber from '../image/AdminPlumber.jpg'
import AdminLocomotive from '../image/AdminLocomotive.jpg'
import AdminHome_3 from '../image/AdminHome_3.jpg'
import AdminMorningWalk from '../image/AdminMorningWalk.jpg'
import AdminEveningWalk from '../image/AdminEveningWalk.jpg'

function AdminHome(props) {
    return (
        <>
        <AdminNavigationBar/>
          
           <br/>
           <br/>
           <br/>
           <br/>
		   <br/>
		   <br/>
           <div className="description-package" id="description">
           
  	      <div className="container">
            
  	 	  <div className="content">
  	 	  	  <div className="box wow bounceInUp">
  	 	  	  	  <div className="inner">
  	 	  	  	  	   <div className="price-tag">
								Ambulance

  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="img">
  	 	  	  	  	   	 <img src={AdminAmbulance} alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="text">
  	 	  	  	  	   	 
  	 	  	  	  	   	  <p>We provide 24/7 ambulance which is medically equipped vehicle
							which transports patients to treatment facilities,such as
							 hospitals.Typically, out-of-hospital medical care is provided to the patient.
						
						 </p>
  	 	  	  	  	   	  
  	 	  	  	  	   	 
					
  	 	  	  	  	   </div>
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  	  <div className="box wow bounceInUp" >
  	 	  	  	  <div className="inner">
  	 	  	  	  	   <div className="price-tag">
					Doctor
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="img">
  	 	  	  	  	   	 <img src={AdminDoctor} alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="text">
  	 	  	  	  	   	 
  	 	  	  	  	   	  <p>We create the same ecosystem and infrastructure as in a hospital 
						in the comfort of one’s home.This is made possible by accessibility to a 
						Specialist,Diagnostics, Pharmacy and the use of technology.</p>
  	 	  	  	  	   	
  	 	  	  	  	   </div>
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  	  <div className="box wow bounceInUp" >
  	 	  	  	  <div className="inner">
  	 	  	  	  	   <div className="price-tag">
						Medicine Delivery
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="img">
  	 	  	  	  	   	 <img src={AdminMedicine} alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="text">
  	 	  	  	  	   	  
  	 	  	  	  	   	  <p>Get your prescription medicines conveniently delivered right at your doorstep.
							All medicine orders can be made cashless based on your domiciliary cover and as
							 per the terms set out in your policy.</p>
  	 	  	  	  	   	 
  	 	  	  	  	   	  
  	 	  	  	  	   </div>
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  </div>
  	 </div>
  </div>
  <div className="description-package" id="description">
  	      <div className="container">
  	 	  
  	 	  <div className="content">
  	 	  	  <div className="box wow bounceInUp">
  	 	  	  	  <div className="inner">
  	 	  	  	  	   <div className="price-tag">
								House Cleaning
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="img">
  	 	  	  	  	   	 <img src={AdminHouseCleaning} alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="text">
  	 	  	  	  	   	 
  	 	  	  	  	   	  <p>we offer professional cleaning and grooming delivered on a schedule that works 
							for you. We’ll clean your home and surroundings for you so you can have more time for your loved ones,
							 hobbies, and interests.</p>
  	 	  	  	  	   	  
  	 	  	  	  	   	 
					
  	 	  	  	  	   </div>
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  	  <div className="box wow bounceInUp" >
  	 	  	  	  <div className="inner">
  	 	  	  	  	   <div className="price-tag">
					   Grocery Delivery
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="img">
  	 	  	  	  	   	 <img src={AdminHome_3} alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="text">
  	 	  	  	  	   	 
  	 	  	  	  	   	  <p>The service will deliver groceries, household items and other vital necessities
							 to those who are 60 years old or older, or have a permanent or temporary disability, 
							 or those people ages 18 to 59 who are “dependent adults.”</p>
  	 	  	  	  	   	  
						 
  	 	  	  	  	   	 
  	 	  	  	  	   </div>
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  	  <div className="box wow bounceInUp" >
  	 	  	  	  <div className="inner">
  	 	  	  	  	   <div className="price-tag">
						Plumber
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="img">
  	 	  	  	  	   	 <img src={AdminPlumber} alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="text">
  	 	  	  	  	   	  
  	 	  	  	  	   	  <p>It makes a lot of sense when you need plumbing or plumbing-related
							 work done to make a single call to one shop for all the work. At PlumbWise,
							  Inc. we provide a very wide range of services to our customers.</p>
  	 	  	  	  	   	 
  	 	  	  	  	   	  
  	 	  	  	  	   </div>
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  </div>
  	 </div>
  </div>
  <div className="description-package" id="description">
	  
  	      <div className="container">
  	 	  
  	 	  <div className="content">
  	 	  	  <div className="box wow bounceInUp">
  	 	  	  	  <div className="inner">
  	 	  	  	  	   <div className="price-tag">
								Morning Walk

  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="img">
  	 	  	  	  	   	 <img src={AdminMorningWalk} alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="text">
  	 	  	  	  	   	 
  	 	  	  	  	   	  <p>Experts have said that walking could be the best exercise for seniors.
							 it’s an effective way to reduce the risk for chronic conditions and 
							 improve your overall health.walking offers numerous heart health benefits.</p>
  	 	  	  	  	   	  
  	 	  	  	  	   	 
					
  	 	  	  	  	   </div>
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  	  <div className="box wow bounceInUp" >
  	 	  	  	  <div className="inner">
  	 	  	  	  	   <div className="price-tag">
					Evening Walk
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="img">
  	 	  	  	  	   	 <img src={AdminEveningWalk} alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="text">
  	 	  	  	  	   	 
  	 	  	  	  	   	  <p>Experts have said that walking could be the best exercise for seniors.
							 it’s an effective way to reduce the risk for chronic conditions and 
							 improve your overall health.walking offers numerous heart health benefits.</p>
  	 	  	  	  	   	  
						 
  	 	  	  	  	   	 
  	 	  	  	  	   </div>
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  	  <div className="box wow bounceInUp" >
  	 	  	  	  <div className="inner">
  	 	  	  	  	   <div className="price-tag">
						Locomotive Services
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="img">
  	 	  	  	  	   	 <img src={AdminLocomotive} alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="text">
  	 	  	  	  	   	  
  	 	  	  	  	   	  <p>It include transporting the elderly.It 
						 provides a modified car that accommodates those on wheelchair for a seamless commute. 
						 The vehicle is fitted with a lift that person and strap
						  them in the seat for comfort.</p>
  	 	  	  	  	   	 
  	 	  	  	  	   	  
  	 	  	  	  	   </div>
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  </div>
  	 </div>
  </div>

  


           <Footer/>
        </>
    );
}

export default AdminHome;