import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import icon from '../Images/logo.png'

class NavBar extends Component {

  

    render() {
        return (
            <div>
                
                <nav className="navbar navbar-default border-0  navbar-fixed-top cnav">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <div className="navbar-brand" style={{ marginLeft: '5px', padding: '0px' }}>
                  <img src={icon} alt="Brand" style={{ width: '55px' }} />
                </div>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/">Add Student</a></li>
                  <li><a href="/viewallnotaccepted">Not Accepted Student</a></li>
                  <li><a href="/viewallaccepted">Accepted Student</a></li>
                  <li><a href="#">Page 3</a></li>
                  <li><a href="#">Page 4</a></li>
                  <a href="#"><button className="btn btn-info navbar-btn signUp">Sign Up</button></a>{/*
            */}<a href="#"><button className="btn btn-info navbar-btn login">Login</button></a>
                </ul>
              </div>
            </div>
          </nav>               
            </div>
        );
    }
}
export default NavBar;