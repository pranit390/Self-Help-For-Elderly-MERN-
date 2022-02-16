import axios from "axios";
import API_URL from "./API_URL.js";




async function createTodo(temp,details) {

 
    const request={
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      firstName:details.firstName.toUpperCase(),
      lastName:details.lastName.toUpperCase(),    
      emailId:details.emailId.toLowerCase(),
      dob: details.dob,   
      gender:details.gender,    
      phoneNumber: details.phoneNumber,
      address:details.address,
      city: details.city,
      state:details.state,
      zipCode:details.zipCode,
      identityProof:temp.url,
      nomineeFname:details.nomineeFname,
      nomineeLname:details.nomineeLname,
      relation:details.relation,
      nomineePnumber:details.nomineePnumber,
      password:details.password,
      password2:details.password2,  
    })
  }

  fetch(`${API_URL}/auth/register`,request)
  .then(response=>response.json())
  .then(result=>console.log(result))
}

 const isEmailExist = async(email)=>{

  try{
      const res = await axios.get(`${API_URL}/customer/particularCustomer/${email}`);
      if(res.data.message!=="not found")
        return true;
  }catch(err){
      console.log(err.message);
  }
 return false;  
}

export const getCustomerInfoBasedId = async(id)=>{

  try{
      const res = await axios.get(`${API_URL}/customer/particularCustomerDetail/${id}`);
     
     
        return res.data.message;
       
        
        
  }catch(err){
      console.log(err.message);
  }

}

export default {createTodo,isEmailExist,getCustomerInfoBasedId };