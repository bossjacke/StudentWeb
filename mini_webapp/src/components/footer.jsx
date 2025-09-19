import React from 'react';
import './CSS/footer.css' // Optional styling
import {Link} from 'react-router-dom';



function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>student Management App</h3>
                    <p>Empowering students through clean code and smart design.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/student">Student</Link></li>
                        <li><Link to="/addstudent">Add Student</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: student@gmail.com</p>
                    <p>Phone: +91 98765 43210</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 student Management App. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
