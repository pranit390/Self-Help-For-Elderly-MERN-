import axios from 'axios';
import API_URL from "./API_URL.js";
async function deleteTask(id,payload) {
    const { data: message } = await axios.put(`${API_URL}/volunteertask/deletetask/${id}`,payload)
    return message
  }
  
  async function update(id, payload) {
    const { data: newTodo } = await axios.put(`${API_URL}/volunteertask/volunteerbusy/${id}`, payload)
    return newTodo
  }

  async function getVolunteerTask(id){

    axios.get(`${API_URL}/task/getVolunteerTask/${id}`).then(res => {
     
     return res.data;
    }).catch(err => {
      console.log(err);
    });

   

  }


  async function getCompletedTask(id){

    axios.get(`${API_URL}/task/getVolunteerCompletedTask/${id}`).then(res => {
      
     return res.data.message;
    }).catch(err => {
      console.log(err);
    });

   

  }

  export default { deleteTask, update,getVolunteerTask,getCompletedTask};
