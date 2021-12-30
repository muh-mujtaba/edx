import React from 'react';
import {NavLink} from 'react-router-dom';
const Commenpage=(props)=> {
    return (
      <>
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-5 m-5 p-5">
            <br/>
            <br/>
            <br/>
            <h4>{props.name} <br></br>with<strong> Edx</strong></h4>
            <p>we are the team of talented develper making websites</p>
            <NavLink to={props.visit}className="btn btn-outline-primary">{props.btn}</NavLink>
          </div>
          <div className="col-md-5 ml-6 mr-5 mt-3 mb-5 p-5">
          <img src={props.imgscr} className="img-fluid" alt="Responsive image"/>
          </div>
        </div>
        
      </div>
      </>
    );
  }

export default Commenpage;