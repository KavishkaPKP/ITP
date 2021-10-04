import React, { Component } from "react";
import './main.css'
import Select from "react-select";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";
import Navbar from '../Navibar';

const initialState = {  
  fname: "",
  lname: "",
  email: "",
  date: "",
  birthDate:"",
};

class AddStudent extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onGenderOptionSelected(e) {
    this.state.items = e.label;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    console.log(this.state.displaycheckItems);

    let studentDetails = {
      fname: this.state.fname,
      lname:  this.state.lname,
      email:  this.state.email,
      date:  this.state.date,
      birthDate:this.state.birthDate,
    };



    console.log("classApplications Details: ", studentDetails);

    axios
      .post(`${APIURL}/StudentRoute/addStudent`, studentDetails)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          alert("Date Inserted !")
          // toast.success(res.data.message);
          window.location.reload();
        } else {
          // toast.success(res.data.message);
          alert(res.data.message)
          window.location.reload();
        }
      });


  }

  render() {


    return (
      <>
        <Navbar />
        <div>
          <div className="container">
            <h1 style={{ marginLeft: "450px" }}>Student Applicantion</h1>
            <form method="POST" onSubmit={this.onSubmit} style={{ marginTop: "20px" }}>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="fname">Firstname</label>
                </div>
                <div className="col-75">
                  <input type="text" id="fname" name="firstname" placeholder="Firstname is..."
                    name="fname"
                    value={this.state.fname}
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
              <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-25">
                  <label htmlFor="lname">Lastname</label>
                </div>
                <div className="col-78">
                  <input type="text" id="fname" name="firstname" placeholder="Lastname is...."
                    name="lname"
                    value={this.state.lname}
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>

              <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-25">
                  <label htmlFor="lname">Email</label>
                </div>
                <div className="col-75">
                  <input type="text" id="fname" name="firstname" placeholder="Email is...."
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
              <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-25">
                  <label htmlFor="lname">BirthDate</label>
                </div>
                <div className="col-75">
                  <input type="date" id="fname" 
                    name="birthDate"
                    value={this.state.birthDate}
                    onChange={this.onChange}
            
                  />
                </div>
              </div>

              <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-25">
                  <label htmlFor="lname">Registation Date</label>
                </div>
                <div className="col-75">
                  <input type="date" id="fname" 
                    name="date"
                    value={this.state.date}
                    onChange={this.onChange}
            
                  />
                </div>
              </div>
              <div className="row">
                <button className="subButton" style={{ marginLeft: "950px", marginTop: "20px" }}>Apply</button>
              </div>
            </form>
          </div>
        </div>

        <div className="containerer footerSt" style={{ marginTop: "120px" }}>
          <p>2021 CMC <i className="fa fa-copyright" aria-hidden="true" /></p>
        </div>
      </>
    );

  }
}


export default AddStudent;