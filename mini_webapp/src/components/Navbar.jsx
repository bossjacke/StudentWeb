import React from "react";
import {Link} from 'react-router-dom';
import './CSS/style.css'



function Navbar() {
    return (
      <div className="home">
        <nav className="nav">
          <ul>
            <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/education-logo.jpg" alt="logo" className="logo" />
            <li className="navbarhome"><Link to="/home">Home</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/addstudent">AddStudent</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Navbar;