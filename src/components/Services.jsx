import React from 'react';
import {NavLink} from 'react-router-dom';
import Card from './Card'
import Carddata from './Carddata'

const Services=()=> {
    return (
      <>
      <div className="container-fluid">
        <div className='row justify-content-evenly text-center'>
        <h1>Our Services</h1>
        </div>
        <hr/>
        <div className="row justify-content-evenly text-center">
          
          {
            Carddata.map((val,index)=>
            {
              return <Card key={index} 
                imgscr = {val.imgscr}
                title = {val.title}
              />
            })
          }
    
        </div>
      </div>
      </>
    );
  }

export default Services;