
import { Form, Button, Container } from 'react-bootstrap';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../css/signup_login/signup-login.css'
import axios from 'axios'
import API_URL from "../../ApiHelper/API_URL.js";

//let history = useHistory();
class VolunteerLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {

            emailId: '',

            password: '',

            formErrors: {},

            invalidCredentials:false,
        };

        this.initialState = this.state;
    }

    componentDidMount(){
      
        if(localStorage.getItem("authToken")){

            const fetchPrivateDate = async () => {
                const config = {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                  },
                };
          
                try {
                  const  res  = await axios.get(`${API_URL}/volunteerAuth/getParticularVolunteer`, config);
                 
                  const payload = {
                    availability:false
                  }
                  await axios.put(`${API_URL}/volunteer/updateVolunteerEngage/${res.data._id}`, payload)
                 
                } catch (error) {
                  localStorage.removeItem("authToken");
                 // setError("You are not authorized please login");
                }
              };
             
              fetchPrivateDate();
            localStorage.removeItem("authToken");
        }
    }

    handleFormValidation() {
        const { emailId, password } = this.state;
        let formErrors = {};
        let formIsValid = true;


        //Email    
        if (!emailId) {
            formIsValid = false;
            formErrors["emailIdErr"] = "Email id is required.";
        }
       



        //password
        if (!password) {
            formIsValid = false;
            formErrors["passwordErr"] = "Password is required!";
        }
       


        this.setState({ formErrors: formErrors });
        return formIsValid;

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    loginUser = async (credentials) => {

        const{emailId,password} = credentials;
        const config = {
            header: {
                "Content-Type":"application/json",
            },
        };
        try{
            const {data} = await axios.post(
             `${API_URL}/volunteerAuth/login`,{emailId,password},config
            );
 
           return data;
 
        }catch(error){
           return error;
        }
    }

    handleSubmit = async (e) => {

        e.preventDefault();

        if (this.handleFormValidation()) {
            const data = await this.loginUser({
                emailId: this.state.emailId.toLowerCase(),
                password: this.state.password
            });

            if (!data.token) {
                setTimeout(() => { this.setState({ invalidCredentials: true }) }, 0);
            }
            else {

                

                localStorage.setItem("authToken", data.token);

                const fetchPrivateDate = async () => {
                    const config = {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                      },
                    };
              
                    try {
                      const  res  = await axios.get(`${API_URL}/volunteerAuth/getParticularVolunteer`, config);
                     
                      const payload = {
                        availability:true
                      }
                      await axios.put(`${API_URL}/volunteer/updateVolunteerEngage/${res.data._id}`, payload)
                     
                    } catch (error) {
                      localStorage.removeItem("authToken");
                     // setError("You are not authorized please login");
                    }
                  };
                 
                  fetchPrivateDate();

                this.props.history.push('/voldashboard');
                this.setState(this.initialState);
            }


           
        }
    }

    render() {

        const { emailIdErr, passwordErr } = this.state.formErrors;

        return (
            <div style={{ height: "320vh" ,marginTop: "4rem" }} className="container">
                        <div className="row">
                        <div className="col s8 offset-s2">
                            <Link to="/" className="btn-flat waves-effect">
                            <h5><i className="material-icons left">keyboard_backspace</i>Back To Home</h5>
                            </Link>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Login</b> below
                            </h4>
                         
                            </div>
                </div>
                </div>
            <div className="formDiv" >
                <h3 style={{ textAlign: "center" }} >Volunteer Login Form </ h3>

                <div>
                    <Container>
                        {/* <Link to="/" >
                            Back To Home
                        </Link> */}
                        <form onSubmit={this.handleSubmit} >

                            <div>
                                <label htmlFor="emailId"><b style={{ color: "darkgreen" }}>Email Id</b><b style={{ color: "red" }}>*</b></label>
                                <input type="text" name="emailId"
                                    value={this.state.emailId}
                                    onChange={this.handleChange}
                                    placeholder="Your email id.."
                                    className={emailIdErr ? ' showError' : ''} />
                                {emailIdErr &&
                                    <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>
                                }

                            </div>

                            <div>
                                <label htmlFor="password"><b style={{ color: "darkgreen" }}>Password</b><b style={{ color: "red" }}>*</b></label>
                                <br/>
                                <input type="password" name="password"
                                className="pass"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    placeholder="Enter the Password.."
                                    className={passwordErr ? ' showError' : ''} />
                                {passwordErr &&
                                    <div style={{ color: "red", paddingBottom: 10 }}>{passwordErr}</div>
                                }

                            </div>
                            {this.state.invalidCredentials && <div style={{ color: "red", paddingBottom: 10}}>Invalid Email or Password</div> }
                            <div style={{ textAlign:"center" }}>

                        <input type="submit" value="Login" />    
                        </div>
                           
                        </form>
                        <p className="grey-text text-darken-1">
                            Don't have an account? <Link to="/VolunteerRegistration">Register</Link>
                        </p>
                        
                        <Link to="/volunteerforgetpassword">Forgot password?</Link>


                    </Container>
                </div>
            </div >
            </div>
        )
    }
}

export default VolunteerLogin;
