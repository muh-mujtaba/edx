import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

const Contact=()=> {
const [data, setdata] = useState({
  name: "",
  phone: "",
  email: "",
  msg: ""
});

  const InputEvent =(event)=>{

    const{name, value} = event.target;

    setdata((preval)=>{
    return{
      ...preval,
      [name]:value
    };
    });
  };
  const submitedform =(e)=>{
    e.preventDefault();
    alert(`Name of user: = ${data.name} phone number: = ${data.phone} email: = ${data.email} and the message convey the user is: = ${data.msg}`);
  }


    return (
      <>
      <div className="container-fluid ">

        <div className="row justify-content-evenly">
          <div className='col-6 m-5 p-5'>
       <form onSubmit={submitedform}>  

          <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" 
  name="name"
  value={data.name}
  onChange={InputEvent}
  placeholder="Enter your name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" 
  name="phone"
  value={data.phone}
  onChange={InputEvent}
  placeholder="Enter your number"/>
</div>
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" 
  name="email"
  value={data.email}
  onChange={InputEvent}
  placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Massage</label>
  <textarea className="form-control"
  name="msg"
  value={data.msg}
  onChange={InputEvent}
  id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="submit" className="btn btn-outline-primary">Sumbit</button>

</form>

</div>

        </div>

      </div>
      </>
    );
  }

export default Contact;