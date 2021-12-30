import React from 'react';
import {NavLink} from 'react-router-dom';



const Card=(props)=> {
    return (
      <>
      <div className='col-md-4'>
          <div className="card m-5 p-3" >
            <img className="card-img-top" src={props.imgscr} alt="Card image cap"/>
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk   of the card's content.</p>
          <NavLink to="/" className="btn btn-primary">Read more</NavLink>
        </div>
          </div>
          </div>
      </>
    );
  }

export default Card;