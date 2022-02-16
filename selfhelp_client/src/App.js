import './App.css';
import IncorrectRoute from './Component/IncorrectRoute.js'
import Home from './Component/Home/Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Aboutus} from './Component/Home/AboutUs'
import {ServiceList} from './Component/Home/ServiceList'
import VolunteerRegistration from './Component/SignUp/RegisterVolunteer'
import CustomerLogin from './Component/Login/Login'
import VolunteerLogin from './Component/Login/Volunteer_Login.js'
import CustomerRegistration from './Component/SignUp/RegisterCustomer'
import {CustomerDashboard} from './Component/Home/Cusdashboard'
import CustomerDashboardTask from './Component/Home/CustomerDashBoard_Task'
import VolunteerDashboard from './Component/Home/VolunteerPortal';
import VolunteerTask from './Component/Home/VolunteerTask';
import AdminHome from './Component/Admin/AdminHome.js'
import Admin_Login from './Component/Login/Admin_Login';
import Facilities from './Component/Admin/Facilities'
import CustomerDetails from './Component/Admin/CustomerDetails'
import VolunteerDetails from './Component/Admin/VolunteerDetails'
import TaskManager from './Component/Admin/Tasks'
import AllVolunteersDetails from './Component/Admin/AllVolunteersDetails'
import AvailableVolunteersDetails from './Component/Admin/AvailableVolunteersDetails'
import UnavailableVolunteersDetails from './Component/Admin/UnavailableVolunteersDetails'
import ForgetPassword from './Component/PasswordReset/ForgotPassword.js';
import ResetPassword from './Component/PasswordReset/ResetPassword';
import VolunteerForgetPassword from './Component/volunteerPasswordReset/ForgotPassword ';
import VolunteerResetPassword from './Component/volunteerPasswordReset/ResetPassword ';

import Feedback from './Component/Feedback/Feedback'

import {VolunteerProfile} from './Component/Home/VolunteerProfile'
import {CustomerProfile} from './Component/Home/CustomerProfile'
import CompletedTasks from './Component/Admin/CompletedTasks'
import IncompleteTasks from './Component/Admin/IncompleteTasks'
import OngoingTasks from './Component/Admin/OngoingTasks'
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>     
      <Router>
        <Switch>

            <Route exact path="/voldashboard" component={VolunteerDashboard}/>
            <Route exact path="/volunteertask" component={VolunteerTask} />
            <Route exact path="/volunteerforgetpassword" component={VolunteerForgetPassword}/>
          <Route exact path="/volunteerpasswordreset/:resetToken" component={VolunteerResetPassword}/>
          <Route exact path="/feedback" component={Feedback}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/AboutUs" component={Aboutus}/>
          <Route exact path="/ServiceList" component={ServiceList}/>
          <Route exact path="/volunteerRegistration" component={VolunteerRegistration}/>
          <Route exact path="/customerRegistration" component={CustomerRegistration}/>
          <Route exact path="/Login" component={CustomerLogin}/>
          <Route exact path="/CustomerDashboard" component={CustomerDashboard}/>
          <Route exact path="/CustomerDashboardTask" component={CustomerDashboardTask}/>
          <Route exact path="/VolunteerLogin" component={VolunteerLogin}/>
           <Route exact path="/Admin_Login" component={Admin_Login}/>
          <Route exact path="/AdminHome" component={AdminHome}/>
         <Route exact path="/Facilities" component={Facilities}/>
         <Route exact path="/CustomerDetails" component={CustomerDetails}/>
         <Route exact path="/VolunteerDetails" component={VolunteerDetails}/>
         <Route exact path="/TaskManager" component={TaskManager}/>
         <Route exact path="/AllVolunteersDetails" component={AllVolunteersDetails}/>
          <Route exact path="/AvailableVolunteersDetails" component={AvailableVolunteersDetails}/>
         <Route exact path="/UnavailableVolunteersDetails" component={UnavailableVolunteersDetails}/>
         <Route exact path="/forgetpassword" component={ForgetPassword}/>
          <Route exact path="/passwordreset/:resetToken" component={ResetPassword}/>
          <Route exact path="/VolunteerProfile" component={VolunteerProfile}/>
          <Route exact path="/CustomerProfile" component={CustomerProfile}/>
          <Route exact path="/CompletedTasks" component={CompletedTasks}/>
          <Route exact path="/IncompleteTasks" component={IncompleteTasks}/>
          <Route exact path="/OngoingTasks" component={OngoingTasks}/>

          {/* <Route exact path="/test" component={TableUsers}/> */}
          <Route component={IncorrectRoute}/> 
        </Switch>
      </Router>      
    </>

  );
}

export default App;