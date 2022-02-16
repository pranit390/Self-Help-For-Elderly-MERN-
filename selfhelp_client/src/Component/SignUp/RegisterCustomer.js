import {  Container} from 'react-bootstrap';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../css/signup_login/signup-login.css'
import APIHelper from "../../ApiHelper/customerApiHelper"
import { storage } from "../../firebase";
import moment from 'moment'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';




class RegisterCustomer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            dob: '',
            gender: 'select',
            phoneNumber: '',
            image: null,
            url: '',
            progress: 0,
            address: '',
            country: '',
            state: '',
            city: '',
            idProof: '',
            zipCode: '',
            nomineeFname: '',
            nomineeLname: '',
            relation: '',
            nomineePnumber: '',
            password: '',
            password2: '',
            isRegistered:false,
            isEmailAlreadyExist:false,
            formErrors: {}
        };

        this.handleIdProof = this
            .handleIdProof
            .bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


        this.initialState = this.state;
    }


    handleFormValidation() {
        const { firstName, lastName, emailId, dob, gender, phoneNumber, idProof,img, address, country, state, city, zipCode, nomineeFname, nomineeLname, relation, nomineePnumber, password, password2 } = this.state;
        let formErrors = {};
        let formIsValid = true;

        //customer first name     
        if (!firstName) {
            formIsValid = false;
            formErrors["firstNameErr"] = "First Name is required.";
        } else if (!(/^[A-Za-z]+$/.test(firstName))) {

            formIsValid = false;
            formErrors["firstNameErr"] = "first name should contain only alphabets.";
        }
        else if (firstName.length < 3) {
            formIsValid = false;
            formErrors["firstNameErr"] = "First name should contain three or morecharacters.";
        }

        //customer last name     
        if (!lastName) {
            formIsValid = false;
            formErrors["lastNameErr"] = "Last Name is required.";
        } else if (!(/^[A-Za-z]+$/.test(lastName))) {

            formIsValid = false;
            formErrors["lastNameErr"] = "last name should contain only alphabets.";
        }

        //Email    
        if (!emailId) {
            formIsValid = false;
            formErrors["emailIdErr"] = "Email id is required.";
        }
        else if (!(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(emailId))) {

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
                formErrors["dobErr"] = "Invalid date of of birth...Age should be less than or equals to 100";
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
        } if(phoneNumber==nomineePnumber){
            formIsValid = false;
                formErrors["phoneNumberErr"] = "customer and nominee cannot have same phone number.";
        }

        //id proof
        if (!idProof) {    
            formIsValid = false;    
            formErrors["idProofErr"] = "id proof is required.";    
        }else{
            var filePath = idProof; 
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i; 
            if (!allowedExtensions.exec(filePath)) { 

                formIsValid = false;    
            formErrors["idProofErr"] = "Invalid extension..upload only jpg/jpeg/png.";    
            }  

        }

        //address
        if (!address) {
            formIsValid = false;
            formErrors["addressErr"] = "address is required.";
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
        if (state === '' || state === "select") {
            formIsValid = false;
            formErrors["stateErr"] = "Select State!!";
        }

        //zipcode
        if (!zipCode) {
            formIsValid = false;
            formErrors["zipCodeErr"] = "zipCode is required.";
        }
        else {
            var zipPattern = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
            if (!zipPattern.test(zipCode)) {
                formIsValid = false;
                formErrors["zipCodeErr"] = "invalid Zip code.";
            }
        }
        //nominee first name
        if (nomineeFname && !(/^[A-Za-z]+$/.test(nomineeFname))) {
            formIsValid = false;
            formErrors["nomineeFnameErr"] = "First name should contain only alphabets.";
        } else if (nomineeFname && nomineeFname.length <= 3) {
            formIsValid = false;
            formErrors["nomineeFnameErr"] = "First name should contain three or more characters.";
        }

        //nominee last name
        if (nomineeLname && !(/^[A-Za-z]+$/.test(nomineeLname))) {
            formIsValid = false;
            formErrors["nomineeLnameErr"] = "Last name should contain only alphabets.";
        } 
        //relation
        if (relation && !(/^[A-Za-z]+$/.test(relation))) {
            formIsValid = false;
            formErrors["relationErr"] = "Invalid Relation.";
        }

        //nominee phone number
        if (nomineePnumber && !(/^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/.test(nomineePnumber))) {
            formIsValid = false;
            formErrors["nomineePnumberErr"] = "Invalid phone number.";
        }else{
            if(nomineePnumber&&phoneNumber==nomineePnumber){
                formIsValid = false;
            formErrors["nomineePnumberErr"] = "customer and nominee cannot have same phone number.";
            }
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
        if (!password2) {
            formIsValid = false;
            formErrors["password2Err"] = "password is required.";
        }
        else {

            if (password2 != password) {
                formIsValid = false;
                formErrors["password2Err"] = "password not matched.";
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
           this.setState({idProof:""+e.target.value})
            const image = e.target.files[0];
          
            this.setState(() => ({ image }));
        }
    }



    handleSubmit = async (e) => {

        e.preventDefault();
        const { image } = this.state;

        if (this.handleFormValidation()) { 
        const temp = this.state;
        const flag = await APIHelper.isEmailExist(this.state.emailId);
        if (flag) {
            setTimeout(()=>{this.setState({isEmailAlreadyExist:true})},0);
        }
        else {
            //Storing identity proof in firebase    
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


                        this.setState({ url })

                        APIHelper.createTodo(this.state, temp);

                    })
                });
                setTimeout(()=> {this.setState({isRegistered:true})},0);
                setTimeout(()=>{ this.props.history.push('/Login')},4000);
                this.setState(this.initialState);
                window.scrollTo(0, 0);
        }
        }  
       


    }
    selectCountry (val) {
        this.setState({ country: val });
      }

    selectRegion (val) {
        this.setState({ state: val });
      }

    render() {

        const { firstNameErr, lastNameErr, emailIdErr, dobErr, genderErr, phoneNumberErr, idProofErr, addressErr, countryErr, stateErr, cityErr, zipCodeErr, nomineeFnameErr, nomineeLnameErr, relationErr, nomineePnumberErr, passwordErr, password2Err } = this.state.formErrors;

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
                                Already have an account? <Link to="/Login">Log in</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="formDiv">

                    <h3 style={{ textAlign: "center" }} >Customer Registration Form </ h3>
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
                                <div  >
                                    <h5 style={{ color: "yellowgreen" }}>
                                        <b>Personal details</b>
                                    </h5>

                                </div>
                                <div>
                                    <label htmlFor="firstName"><b style={{ color: "darkgreen" }}>First Name</b><b style={{ color: "red" }}>*</b></label>
                                    <input type="text" name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.handleChange}
                                        placeholder="Your First name.."
                                        className={firstNameErr ? ' showError' : ''} />
                                    {firstNameErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{firstNameErr}</div>
                                    }
                                </div>

                                <div>
                                    <label htmlFor="lastName"><b style={{ color: "darkgreen" }}>Last Name</b><b style={{ color: "red" }}>*</b></label>
                                    <input type="text" name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                        placeholder="Your Last name.."
                                        className={firstNameErr ? ' showError' : ''} />
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
                                    <label htmlFor="text"><b style={{ color: "darkgreen" }}>Date Of Birth</b><b style={{ color: "red" }}>*</b></label>
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
                                    <b style={{ color: "darkgreen" }}>Identity Proof</b><b style={{ color: "red" }}>*</b>
                                    <br />
                                    <br />
                                    <input name="idProof"
                                        onChange={this.handleIdProof}
                                       value={this.state.idProof}
                                         type="file"
                                        className={idProofErr ? ' showError' : ''} />
                                    {idProofErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{idProofErr}</div>
                                    }
                                </div>
                                <br />
                                <div>
                                    <div>
                                        <label htmlFor="address"><b style={{ color: "darkgreen" }}>Address</b><b style={{ color: "red" }}>*</b></label>
                                        <input type="text" name="address"
                                            onChange={this.handleChange}
                                            value={this.state.address}
                                            placeholder="Your address.."
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
                                           value={this.state.state}
                                          onChange={(val) => this.selectRegion(val)} />
                                        {stateErr &&
                                            <div style={{ color: "red", paddingBottom: 10 }}>{stateErr}</div>
                                        }  
                                    </div>
                                    <div>
                                        <label htmlFor="city"><b style={{ color: "darkgreen" }}>City</b><b style={{ color: "red" }}>*</b></label>
                                        <input name="city" type="text"
                                            onChange={this.handleChange}
                                            value={this.state.city}/>
                                            
                                    
                                        {cityErr &&
                                            <div style={{ color: "red", paddingBottom: 10 }}>{cityErr}</div>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="zipCode"><b style={{ color: "darkgreen" }}>Zip Code</b><b style={{ color: "red" }}>*</b></label>
                                    <input type="text" name="zipCode"
                                        onChange={this.handleChange}
                                        value={this.state.zipCode}
                                        placeholder="Your Zip Code.."
                                        className={zipCodeErr ? ' showError' : ''} />
                                    {zipCodeErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{zipCodeErr}</div>
                                    }
                                </div>
                                <div  >
                                    <h5 style={{ color: "purple" }}>
                                        <b>Nominee details</b>
                                    </h5>
                                </div>

                                <div>
                                    <label htmlFor="nomineeFname"><b style={{ color: "darkgreen" }}>First Name</b></label>

                                    <input type="text" name="nomineeFname"
                                        onChange={this.handleChange}
                                        value={this.state.nomineeFname}
                                        placeholder="Nominee First Name.."
                                        className={nomineeFnameErr ? ' showError' : ''} />
                                    {nomineeFnameErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{nomineeFnameErr}</div>
                                    }

                                </div>
                                <div>
                                    <label htmlFor="nomineeLname"><b style={{ color: "darkgreen" }}>Last Name</b></label>

                                    <input type="text" name="nomineeLname"
                                        onChange={this.handleChange}
                                        value={this.state.nomineeLname}
                                        placeholder="Nominee Last Name.."
                                        className={nomineeLnameErr ? ' showError' : ''} />
                                    {nomineeLnameErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{nomineeLnameErr}</div>
                                    }

                                </div>
                                <div>
                                    <label htmlFor="relation"><b style={{ color: "darkgreen" }}>Relation</b></label>

                                    <input type="text" name="relation"
                                        onChange={this.handleChange}
                                        value={this.state.relation}
                                        placeholder="relation..."
                                        className={relationErr ? ' showError' : ''} />
                                    {relationErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{relationErr}</div>
                                    }

                                </div>
                                <div>
                                    <label htmlFor="nomineePnumber"><b style={{ color: "darkgreen" }}>Phone Number</b></label>

                                    <input type="text" name="nomineePnumber"
                                        onChange={this.handleChange}
                                        value={this.state.nomineePnumber}
                                        placeholder="Phone Number.."
                                        className={nomineePnumberErr ? ' showError' : ''} />
                                    {nomineePnumberErr &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{nomineePnumberErr}</div>
                                    }

                                </div>

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

                                    <div/>
                                   
                                   
                                    <div>
                                    <label htmlFor="password2"><b style={{ color: "darkgreen" }}>Confirm Password</b><b style={{ color: "red" }}>*</b></label>
                                    <input type="Password" name="password2"
                                        onChange={this.handleChange}
                                        value={this.state.password2}
                                        placeholder="confirm password.."
                                        className={password2Err ? ' showError' : ''} />
                                    {password2Err &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{password2Err}</div>
                                    }
                                  </div>
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

export default RegisterCustomer;