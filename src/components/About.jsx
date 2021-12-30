import React from 'react';
import {NavLink} from 'react-router-dom';
import web from '../images/rocket2.jpg'
import Commenpage from './Commenpage'

const About=()=> {
    return (
      <>
      <Commenpage 
      name ="Learn to earn "
      imgscr ={web}
      visit ="/contact"
      btn = "Contact now"
      />
      </>
    );
  }

export default About;