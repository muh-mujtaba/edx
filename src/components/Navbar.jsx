import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar =()=>{
    return(
        <>
        <div className="container-fluid ">
            <div className="row justify-content-evenly">
                <div className="col-11">
 <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid align-items-center">
    <NavLink className="navbar-brand" to="#"><h1>Edx</h1></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
                </div>
            </div>
        </div>



        </>
    );
}

export default Navbar;
