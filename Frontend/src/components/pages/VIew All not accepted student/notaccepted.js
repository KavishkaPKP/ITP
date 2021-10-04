import React, { Component } from "react";
import './notaccepted.css'
import icon from '../../Images/logo.png'
import trash from '../../Images/delete-16.png'
import editIcon from '../../Images/edit-2-16.png'
import ProfileIcon from '../../Images/project2.jpg'

import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Select from "react-select";
import { APIURL } from "../../API/environment";
import Navbar from '../Navibar';



class AddForum extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Sub: [],


    }
    this.onEnroll = this.onEnroll.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onUnenroll = this.onUnenroll.bind(this);



  }


  onEnroll(e, id) {

    let Enroll = {
      isAccepted: 1
    };

    axios
      .put(`${APIURL}/StudentRoute/updateEnrollDetails/${id}`, Enroll)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          alert("Enrolled !")
          toast.success(res.data.message);
          window.location.reload();
        } else {
          toast.error(res.data.message);
          alert("Enrolled !")
          window.location.reload();

        }
      });

  }

  onUnenroll(e, id) {

    let Enroll = {
      isAccepted: 2
    };

    axios
      .put(`${APIURL}/StudentRoute/updateEnrollDetails/${id}`, Enroll)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          alert("Enrolled !")
          toast.success(res.data.message);
          window.location.reload();
        } else {
          toast.error(res.data.message);
          alert("Unenrolled !")
          window.location.reload();

        }
      });

  }


  onDelete(e, id) {


    axios
      .delete(`${APIURL}/AnnouncementRoute/deleteUserDetails/${id}`)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          alert("Date Updated !")
          // toast.success(res.data.message);
          window.location.reload();
        } else {
          // toast.error(res.data.message);
          alert(res.data.message)
          window.location.reload();

        }
      });
  }


  componentDidMount() {


    axios.get(`${APIURL}/StudentRoute/getAllStudentNotaccepted`)

      .then(response => {
        this.setState({ Sub: response.data.data });
        console.log("Subjects:  ", this.state.Sub);
      })

  }
  render() {
    return (
      <>
        <Navbar />



        <div className="container">

          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Student ID</th>
                    <th scope="col">Student Fristname</th>
                    <th scope="col">Student Lastname</th>
                    <th scope="col">Date</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>

                  </tr>
                </thead>
                <tbody>





                  {this.state.Sub.length > 0 && this.state.Sub.map((item, index) => (
                    <tr>
                      <th scope="row">{item.uid}</th>
                      <td>{item.fname}</td>
                      <td>{item.lname}</td>
                      <td>{item.date}</td>
                      <td>{item.email}</td>
                      <td>
                        {/* {item.isEnroll == 0 && ( */}
                          <>

                            <button type="button" className="btn btn-primary"
                              onClick={e => this.onEnroll(e, item.uid)}>Accept</button>

                          </>
                      {/* )} */}

                        {/* {item.isEnroll == 1 && ( */}
                          <>

                            {/* <a href="/edit"> <button type="button" className="btn btn-warning">Update</button></a> */}

                            <button type="button" className="btn btn-danger" style={{ marginLeft: "10px" }}
                              onClick={e => this.onUnenroll(e, item.uid)}>Reject</button>
                          </>
                        {/* )} */}


                      </td>
                    </tr>

                  ))}




                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="containerer footerSt" style={{ marginTop: "420px" }}>
          <p>2021 CMC <i className="fa fa-copyright" aria-hidden="true" /></p>
        </div>
      </>
    );

  }
}


export default AddForum;