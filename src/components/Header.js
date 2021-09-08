import React from 'react';

import { Link } from 'react-router-dom';

const message = () => {
  alert("Sorry, I didn't add Login/ Sign up Features in this :)");
 }

export default function Header() {
    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-dark  header">
  <div className="container-fluid header ">
    <Link className="navbar-brand" to="/"><span className="logo">TopShelf Learners</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/TopShelfLearners">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/about">About Us</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/courses">Our Courses</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/contact">Contact Us</Link>
        </li>
        
      </ul>
      
      <button type="button" className="btn btn-main" onClick={message}>Login / Signup</button>

    </div>
  </div>
</nav>
        </>
      )
}
