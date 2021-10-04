import React, { Component } from "react";
// import './notaccepted.css'
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
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



class AddForum extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Sub: [],
      searchname: ""

    }
    this.onEnroll = this.onEnroll.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onUnenroll = this.onUnenroll.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onChange = this.onChange.bind(this);



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


    axios.get(`${APIURL}/StudentRoute/getAllStudentaccepted`)

      .then(response => {
        this.setState({ Sub: response.data.data });
        console.log("Subjects:  ", this.state.Sub);
      })

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log("search", this.state.searchname)
  }

  onSearch(event) {
    event.preventDefault();
    const name = this.state.searchname;
    console.log(name)

    axios.get(`${APIURL}/StudentRoute/searchDetails/${name}`)

      .then(response => {
        this.setState({ Sub: response.data.data });
        console.log("Subjects:  ", this.state.Sub);
      })

  }

  
  printDocument() {
    const input = document.getElementById('viewtable');
    html2canvas(input)
        .then((canvas) => {
            var imgWidth = 200;
            var pageHeight = 290;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4')
            var position = 0;
            var heightLeft = imgHeight;
            pdf.addImage(imgData, 'JPEG', 4, position, imgWidth, imgHeight);
            pdf.save("download.pdf");
        });
}
  render() {
    return (
      <>
        <Navbar />


        <form className="example" onSubmit={this.onSearch} style={{ marginTop: "90px", marginLeft: "90px", marginRight: "80px" }}>
          <input type="text" placeholder="Type Student Frist name..."
            name="searchname"
            value={this.state.searchname}
            onChange={this.onChange} />
          <button type="submit"><i className="fa fa-search" /></button>
        </form>

        <button type="button" className="btn btn-success btn-sm" style={{ marginLeft: "1200px", marginTop: "20px" }} onClick={this.printDocument}
        >Genarate Report</button>

        <div className="container" style={{ marginTop: "10px" }}>
        
          <div className="row" style={{ marginTop: "0px" }}>
            <div className="col-12" id="viewtable" >
            <h3 style={{ 'textAlign': 'center' }}>
                        All Accepted Students    
                    </h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Student ID</th>
                    <th scope="col">Student Fristname</th>
                    <th scope="col">Student Lastname</th>
                    <th scope="col">Date</th>
                    <th scope="col">Email</th>
                    <th scope="col">Birthday</th>
                    <th scope="col">User Type</th>


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
                      <td>{item.birthDate}</td>
                      <td>{item.uType}</td>


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