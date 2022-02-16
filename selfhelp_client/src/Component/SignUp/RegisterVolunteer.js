
import { Form, Button, Container } from 'react-bootstrap';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../css/signup_login/signup-login.css'
import { addRegistrationDetails, isEmailExist } from '../../ApiHelper/volunteerApiHelper'
import { storage } from '../../firebase'
import moment from 'moment'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
class RegisterVolunteer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studName: '',
            lastName: '',
            emailId: '',
            dob: '',
            gender: 'select',
            phoneNumber: '',
            address: '',
            city: '',
            zipcode: '',
            image: null,
            url: '',
            progress: 0,
            profession: 'select',
            State: '',
            country: '',
            password: '',
            confirmpassword: '',
            formErrors: {},
            isRegistered:false,
            isEmailAlreadyExist:false,
        };


        this.handleIdProof = this
            .handleIdProof
            .bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


        this.initialState = this.state;
    }

    handleFormValidation() {


        const { studName, emailId, dob, gender, country, phoneNumber, address, city, State, profession, zipcode, lastName, identityproof, password, confirmpassword } = this.state;
        let formErrors = {};
        let formIsValid = true;

        //Student name     
        if (!studName) {
            formIsValid = false;
            formErrors["studNameErr"] = "FirstName is required.";
        }
        else if (!(/^[A-Za-z]+$/.test(studName))) {

            formIsValid = false;
            formErrors["studNameErr"] = "first name should contain only alphabets.";
        }
        else if (studName.length < 3) {
            formIsValid = false;
            formErrors["studNameErr"] = "First name should contain  three or more characters.";
        }

        //lastname
        if (!lastName) {
            formIsValid = false;
            formErrors["lastNameErr"] = "LastName is required.";
        }
        else if (!(/^[A-Za-z]+$/.test(lastName))) {

            formIsValid = false;
            formErrors["lastNameErr"] = "Last name should contain only alphabets.";
        }
        //Email    
        if (!emailId) {
            formIsValid = false;
            formErrors["emailIdErr"] = "Email id is required.";
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {

            formIsValid = false;
            formErrors["emailIdErr"] = "Invalid email id.";
        }

        //DOB    
        if (!dob) {
            formIsValid = false;
            formErrors["dobErr"] = "Date of birth is required.";
        }
        else {

            var eighteenYearsAgo = moment().subtract(18, "years");
            var Years = moment().subtract(100, "years");
            var birthday = moment(dob);
            if (!eighteenYearsAgo.isAfter(birthday)) {
                formIsValid = false;
                formErrors["dobErr"] = "Invalid date of of birth..Age should be above 18 years..";
            }
            if (Years.isAfter(birthday)) {
                formIsValid = false;
                formErrors["dobErr"] = "Invalid date of of birth...Age sholud be less than or equals to 100";
            }

        }
        //Gender    
        if (gender === '' || gender === "select") {
            formIsValid = false;
            formErrors["genderErr"] = "Select gender.";
        }

        //Phone number    
        if (!phoneNumber) {
            formIsValid = false;
            formErrors["phoneNumberErr"] = "Phone number is required.";
        }
        else {
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
            if (!mobPattern.test(phoneNumber)) {
                formIsValid = false;
                formErrors["phoneNumberErr"] = "Invalid phone number.";
            }
        }
        //zipcode
        if (!zipcode) {
            formIsValid = false;
            formErrors["zipcodeErr"] = "Zip Code is required.";
        }
        else {
            var zipPattern = /^[1-9][0-9]{5}$/;
            if (!zipPattern.test(zipcode)) {
                formIsValid = false;
                formErrors["zipcodeErr"] = "Invalid zip code!";
            }
        }
        //City    
        if (city === '' || city === "select") {
            formIsValid = false;
            formErrors["cityErr"] = "Select city!!";
        }

        //country
        if (country === '' || country === "select") {
            formIsValid = false;
            formErrors["countryErr"] = "Select country!!";
        }

        //State
        if (State === '' || State === "select") {
            formIsValid = false;
            formErrors["stateErr"] = "Select State!!";
        }
        //profession
        if (profession === '' || profession === "select") {
            formIsValid = false;
            formErrors["professionErr"] = "Select profession!";
        }
        //address
        if (!address) {
            formIsValid = false;
            formErrors["addressErr"] = "Address is required!";
        }

        //password
if (!password) {
    formIsValid = false;
    formErrors["passwordErr"] = "password is required.";
}
else {
    var passwordPattern = /^(?=.{8,32}$)(?=.*[A-Z])(?=.*[@$!%?&])(?=.*[a-z])(?=.*[0-9]).*/;
    if (!passwordPattern.test(password)) {
        formIsValid = false;
        formErrors["passwordErr"] = "password should be atleast of length 8 and password should contain atleast one uppercase letter,one lowercase letter,one special character and one number.";
    }
}
//confirm password
if (!confirmpassword) {
    formIsValid = false;
    formErrors["confirmpasswordErr"] = "password is required.";
}
else {

    if (confirmpassword != password) {
        formIsValid = false;
        formErrors["confirmpasswordErr"] = "password not matched.";
    }
}

        //identityproof
        if (!identityproof) {
            formIsValid = false;
            formErrors["identityproofErr"] = "Identity proof is required.";
        } else {
            var filePath = identityproof;
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            if (!allowedExtensions.exec(filePath)) {

                formIsValid = false;
                formErrors["identityproofErr"] = "Invalid extension!!..upload only jpg/jpeg/png~.";
            }

        }
        this.setState({ formErrors: formErrors });
        return formIsValid;



    }

    handleChange = (e) => {

        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleIdProof = (e) => {
        if (e.target.files[0]) {
            this.setState({identityproof:""+e.target.value})
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { image } = this.state;
        if (this.handleFormValidation()) {
            const temp = this.state;
            const flag = await isEmailExist(this.state.emailId);
            if (flag) {
                setTimeout(()=>{this.setState({isEmailAlreadyExist:true})},0);
            }
            else {

                const uploadTask = storage.ref(`images/${image.name}`).put(image);
                uploadTask.on('state_changed',
                    (snapshot) => {
                        // progrss function ....
                        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        this.setState({ progress });
                    },
                    (error) => {
                        // error function ....
                        console.log(error);
                    },
                    () => {
                        // complete function ....
                        storage.ref('images').child(image.name).getDownloadURL().then(url => {
                            console.log(url);
                            console.log(this.state)
                            this.setState({ url });


                            console.log(this.state)
                            addRegistrationDetails(this.state, temp)
                        })
                    });
                      
                    setTimeout(()=> {this.setState({isRegistered:true})},0);
                    setTimeout(()=>{ this.props.history.push('/VolunteerLogin')},4000);

                    this.setState(this.initialState)
                    window.scrollTo(0, 0);
            }

        }
    }


    selectCountry(val) {
        this.setState({ country: val });
    }

    selectRegion(val) {
        this.setState({ State: val });
    }

    render() {

        const { studNameErr, lastNameErr, emailIdErr, dobErr, genderErr, phoneNumberErr, cityErr, addressErr, stateErr, countryErr, professionErr, zipcodeErr, identityproofErr, passwordErr, confirmpasswordErr } = this.state.formErrors;

        return (
            <>
             
            <div style={{ height: "320vh", marginTop: "4rem" }} className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                    <Link to="/" className="btn-flat waves-effect">
                    <h5><i className="material-icons left">keyboard_backspace</i>Back To Home</h5>
                            </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Register</b> below
                  </h4>
                            <p className="grey-text text-darken-1">
                                Already have an account? <Link to="/VolunteerLogin">Log in</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="formDiv">
                    <h3 style={{ textAlign: "center" }} >Volunteer Registration Form </ h3>
                    <div>
                        <Container>
                        {
                  this.state.isRegistered &&
                  
                  <div className="registered">
                      You are registered successfully<br/>
                      please wait directing you to login page.....
                  </div> 
            }
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <label htmlFor="studName"><b style={{ color: "darkgreen" }}>FirstName</b><b style={{ color: "red" }}>*</b></label>
                                    <input type="text" name="studName"
                                        value={this.state.studName}
                                        onChange={this.handleChange}
                                        placeholder="Your Firstname.."
                                        className={studNameErr ? ' showError' : ''} />
                                    {studNameErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>
                                    }

                                </div>

                                <div>
                                    <label htmlFor="lastName"><b style={{ color: "darkgreen" }}>LastName</b><b style={{ color: "red" }}>*</b></label>
                                    <input type="text" name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                        placeholder="Your lastname.."
                                        className={lastNameErr ? ' showError' : ''} />
                                    {lastNameErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{lastNameErr}</div>
                                    }

                                </div>
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
                                     {
                  this.state.isEmailAlreadyExist && <div style={{ color: "red", paddingBottom: 10}}>Email id Already exist</div>
              }

                                </div>
                                <div>
                                    <label htmlFor="text"><b style={{ color: "darkgreen" }}>Date of Birth</b><b style={{ color: "red" }}>*</b></label>
                                    <br/>
                        
                                    <input type="Date" name="dob"
                                        value={this.state.dob}
                                        onChange={this.handleChange}
                                        placeholder="DD/MM/YYYY.."
                                        className={dobErr ? ' showError' : ''} />
                                    {dobErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>
                                    }
                                </div>
                                <div>
                                    <label htmlFor="gender"><b style={{ color: "darkgreen" }}>Gender</b><b style={{ color: "red" }}>*</b></label>
                                    <select name="gender" onChange={this.handleChange}
                                        className={genderErr ? ' showError' : ''}
                                        value={this.state.gender} >
                                        <option value="select">--Select--</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {genderErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>
                                    }
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber"><b style={{ color: "darkgreen" }}>Phone Number</b><b style={{ color: "red" }}>*</b></label>
                                    <input type="text" name="phoneNumber"
                                        onChange={this.handleChange}
                                        value={this.state.phoneNumber}
                                        placeholder="Your phone number.."
                                        className={phoneNumberErr ? ' showError' : ''} />
                                    {phoneNumberErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>
                                    }
                                </div>


                                <div >
                                    <label htmlFor="Address"><b style={{ color: "darkgreen" }}>Address</b><b style={{ color: "red" }}>*</b></label>
                                    <input type="text" name="address"
                                        onChange={this.handleChange}
                                        value={this.state.address}
                                        placeholder="Your Address.."
                                        className={addressErr ? ' showError' : ''} />
                                    {addressErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{addressErr}</div>
                                    }

                                </div>
                                <div>
                                    <label htmlFor="country"><b style={{ color: "darkgreen" }}>Country</b><b style={{ color: "red" }}>*</b></label>

                                    <CountryDropdown
                                        value={this.state.country}
                                        onChange={(val) => this.selectCountry(val)} />
                                    {countryErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{countryErr}</div>
                                    }
                                </div>
                                <div>
                                    <label htmlFor="state"><b style={{ color: "darkgreen" }}>State</b><b style={{ color: "red" }}>*</b></label>

                                    <RegionDropdown
                                        country={this.state.country}
                                        value={this.state.State}
                                        onChange={(val) => this.selectRegion(val)} />
                                    {stateErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{stateErr}</div>
                                    }
                                </div>
                                <div>
                                    <label htmlFor="city"><b style={{ color: "darkgreen" }}>City</b><b style={{ color: "red" }}>*</b></label>
                                    <input name="city"
                                        type="text"
                                        onChange={this.handleChange}
                                        value={this.state.city} />


                                    {cityErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{cityErr}</div>
                                    }
                                </div>
                                <div>
                                    <label htmlFor="zipcode"><b style={{ color: "darkgreen" }}>Zip Code</b><b style={{ color: "red" }}>*</b></label>
                                    <input type="text" name="zipcode"
                                        onChange={this.handleChange}
                                        value={this.state.zipcode}
                                        placeholder="Your zipcode.."
                                        className={zipcodeErr ? ' showError' : ''} />
                                    {zipcodeErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{zipcodeErr}</div>
                                    }
                                </div>
                                <div>
                                    <label htmlFor="profession"><b style={{ color: "darkgreen" }}>Profession</b><b style={{ color: "red" }}>*</b></label>
                                    <select name="profession"
                                        value={this.state.profession}
                                        onChange={this.handleChange}
                                        className={professionErr ? ' showError' : ''} >
                                        <option value="select">--Select--</option>
                                        <option value="Medical Services">Medical Services</option>
                                        <option value="Assistance in Household">Assistance in Household</option>
                                        <option value="Transportation">Transportation</option>
                                    </select>
                                    {professionErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{professionErr}</div>
                                    }
                                </div>


                                <div >
                                    <b style={{ color: "darkgreen" }}>Identity Proof</b><b style={{ color: "red" }}>*</b>
                                    <br />
                                    <br />

                                    <input name="identityproof"
                                        onChange={this.handleIdProof}
                                        value={this.state.identityproof}
                                        type="file"
                                        className={identityproofErr ? ' showError' : ''} />
                                    {identityproofErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{identityproofErr}</div>
                                    }


                                </div>
                                <br />

                               
                                <div>
                                    <label htmlFor="password"><b style={{ color: "darkgreen" }}>Password</b><b style={{ color: "red" }}>*</b></label>
                                    <input type="Password" name="password"
                                        onChange={this.handleChange}
                                        value={this.state.password}
                                        placeholder="password.."
                                        className={passwordErr ? ' showError' : ''} />
                                    {passwordErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{passwordErr}</div>
                                    }

                                    <label  htmlFor="confirmpassword"><b style={{ color: "darkgreen" }}>Confirm Password</b><b style={{ color: "red" }}>*</b></label>
                                    <input type="Password" name="confirmpassword"
                                        onChange={this.handleChange}
                                        value={this.state.confirmpassword}
                                        placeholder="confirm password.."
                                        className={confirmpasswordErr ? ' showError' : ''} />
                                    {confirmpasswordErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{confirmpasswordErr}</div>
                                    }

                                </div>


                                <div style={{ textAlign: "center" }}>
                                    <input type="submit" value="Register" />
                                </div>
                            </form>
                        </Container>
                    </div>
                </div >
            </div>
</>
        )
    }
}

export default RegisterVolunteer;
