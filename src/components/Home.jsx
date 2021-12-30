import React from 'react';
import {NavLink} from 'react-router-dom';
import web from '../images/rocket.jpg'
import Commenpage from './Commenpage'
const Home=()=> {
    return (
      <>
      <Commenpage 
      name ="Grow your business "
      imgscr ={web}
      visit ="/services"
      btn = "Get started"
      />
      </>
    );
  }

export default Home;