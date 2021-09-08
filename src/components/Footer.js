import "./Footer.css";
import { Link } from 'react-router-dom';

import React from 'react'


export default function Footer() {
    return (
        <footer>
            <div className="TopSection">
            <div className="footerlogo">  Top Shelf Learners </div>

                <div className="footermenu">
                <ul className="outerul">
                <Link to="/TopShelfLearners">  <h6>Home</h6> </Link>
                <Link to="/about"><h6>About Us</h6> </Link>
                <Link to="/contact"><h6>Contact Us</h6> </Link>
                <Link to="/courses" ><h6>Privacy Policy</h6> </Link>
                <Link to="/courses"><h6>Our Terms</h6> </Link>
                </ul>


                <div className="footer-menu-course-list">
                <h3> Our Courses</h3>
                <div className="footer-menu-course-list-menu">
                <ul>
                    <Link to="/courses"> <h6>Development</h6> </Link>
                   <Link to="/courses">  <h6>Designing</h6> </Link>
                    <Link to="/courses"> <h6>Marketing</h6> </Link>
                    <Link to="/courses"> <h6>Writing</h6> </Link>
                </ul>
                
                <ul>
                    <Link to="/courses"> <h6>Business</h6> </Link>
                    <Link to="/courses"> <h6>Life Style</h6> </Link>
                    <Link to="/courses"> <h6>Film & Production</h6> </Link>
                    <Link to="/courses"> <h6>Administration</h6> </Link>

                </ul>
                </div>
                </div>

                <ul className="outerul">
                   <Link to="/TopShelfLearners"> <h5>Become a Student</h5> </Link>
                   <Link to="/TopShelfLearners"> <h5>Become a Teacher</h5> </Link>
                   <Link to="/TopShelfLearners"> <h5>Become an Affliate</h5> </Link>
                </ul>

                </div>
            </div>

            <div className="BottomSection">
                
                <div className="copyright">© 2021 TopShelf Learners Inc. All rights reserved.</div>
                
            </div>
        </footer>
    )
}
