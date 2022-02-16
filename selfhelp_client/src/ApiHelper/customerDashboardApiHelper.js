import axios from "axios"

import API_URL from "./API_URL.js";

export function createTask(details) {

 
    const request={
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
        Customer_id:details.Customer_id,
        Customer_Name:details.Customer_Name,
   
       Customer_address:{
        address:details.Customer_address.address,
         state:details.Customer_address.state,
         city:details.Customer_address.city,
         pincode:details.Customer_address.pincode
       },
   
        Customer_PhoneNumber:details.Customer_PhoneNumber, 
   
     
   
      Volunteer_Name:details.Volunteer_Name,
   
        Volunteer_PhoneNumber:details.Volunteer_PhoneNumber,  
     
    
     
        
        Volunteer_id:details.Volunteer_id,
        Service_id:details.Service_id,
        TaskName:details.TaskName
     
        
    })
  }

  fetch(`${API_URL}/task/postTask`,request)
  .then(response=>response.json())
  .then(result=>console.log(result))
}
