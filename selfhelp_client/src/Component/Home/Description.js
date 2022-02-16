
//This component include our sites features  with buttons, on clicking those buttons we will get redirected to signup page
import React from 'react';
import HomeDelivery from './Gallery/homeDelivery.png'// Images 
import Medical from './Gallery/medical.jpg'
import DailyChores from './Gallery/dailyChores.jpg'

import { Link } from "react-router-dom";

export const Description= () => {
 return (
 
 <div className="description-package" id="description">
  	 <div className="container">
  	 	  
  	 	  <div className="content">
  	 	  	  <div className="box wow bounceInUp">
  	 	  	  	  <div className="inner">
  	 	  	  	  	   <div className="price-tag">
								Specialist-driven care

  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="img">
  	 	  	  	  	   	 <img src={HomeDelivery} alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="text">
  	 	  	  	  	   	 
  	 	  	  	  	   	  <p>What makes us unique is that a Specialist continues to be 
						in charge of the care delivered at home.
						 He guides the primary physician on the patient's treatment 
						 plan to ensure comprehensive and quality care as well as continuity.</p>
  	 	  	  	  	   	  
  	 	  	  	  	   	 
					 <Link to="/customerRegistration" className="btn">Join Now</Link>
  	 	  	  	  	   </div>
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  	  <div className="box wow bounceInUp" >
  	 	  	  	  <div className="inner">
  	 	  	  	  	   <div className="price-tag">
					Continuity of care
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="img">
  	 	  	  	  	   	 <img src={Medical} alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="text">
  	 	  	  	  	   	 
  	 	  	  	  	   	  <p>Care at Home creates the same ecosystem and infrastructure as in a hospital in the comfort of one’s home.This is made possible by accessibility to a Specialist, skilled resources, Diagnostics, Pharmacy and the use of innovative technology.</p>
  	 	  	  	  	   	  
						 <Link to="/customerRegistration" className="btn">Join Now</Link>
  	 	  	  	  	   	 
  	 	  	  	  	   </div>
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  	  <div className="box wow bounceInUp" >
  	 	  	  	  <div className="inner">
  	 	  	  	  	   <div className="price-tag">
						Quality care givers
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="img">
  	 	  	  	  	   	 <img src={DailyChores} alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	   <div className="text">
  	 	  	  	  	   	  
  	 	  	  	  	   	  <p>Only 1 in every 5 applicants for home health services meets our stringent standards. The selected candidates undergo intensive training, as well as a thorough evaluation. They are closely supervised by experienced professionals</p>
  	 	  	  	  	   	 
  	 	  	  	  	   	  <Link to="/customerRegistration" className="btn">Join Now</Link>
  	 	  	  	  	   </div>
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  </div>
  	 </div>
  </div>
 
 )
}

 