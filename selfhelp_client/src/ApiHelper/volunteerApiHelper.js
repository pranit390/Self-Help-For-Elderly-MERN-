import axios from 'axios'

import API_URL from "./API_URL.js";



export const addRegistrationDetails = (details,temp) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName:temp.studName.toUpperCase(),
            lastName:temp.lastName.toUpperCase(),
            emailId:temp.emailId.toLowerCase(),
            dob:temp.dob,
            gender:temp.gender,
            phone:temp.phoneNumber,
            address:{
                address_Line1:temp.address,
                city:temp.city,
                state:temp.State,
                zipcode:temp.zipcode
            },
            id:details.url,
            profession:temp.profession,
          
            password:temp.password,

        }),
    };
    fetch(`${API_URL}/volunteerAuth/register`, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result));
}

export const isEmailExist = async(email)=>{

    try{
        const res = await axios.get(`${API_URL}/volunteer/particularVolunteer/${email}`);
        if(res.data.message!=="not found")
          return true;
    }catch(err){
        console.log(err.message);
    }
   return false;  
}



export const getVolunteerIdBasedOnService = async(serviceId)=>{

    try{
        const res = await axios.get(`${API_URL}/volunteer/status/${serviceId}`);
        
          return res.data.message;
          
    }catch(err){
        console.log(err.message);
    }
 
}

export  async function updateVolunteerEngage(id, payload) {
    const { data: newTodo } = await axios.put(`${API_URL}/volunteer/updateVolunteerEngage/${id}`, payload)
    return newTodo
  }