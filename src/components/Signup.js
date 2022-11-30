import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// import Form from "react-bootstrap/Form";

// import Button from "react-bootstrap/Button";

export default function Login() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name:"", email:"", phone:"", password:"", cpassword:""
  })
  let name, value;

  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();
 
    const { name, email, phone, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, password, cpassword
      })
    })

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else {
      window.alert("Registration Sucessful");
      console.log("Registration Sucessful");
      navigate("/login");
    }
  }

  return (
    <div className="signup">
      <form method="POST" className="register-form" id="register-form">
        
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={user.name} onChange={handleInputs} id="name"/>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={user.email} onChange={handleInputs} id="email"/>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="number" name="phone" value={user.phone} onChange={handleInputs} id="phone"/>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={user.password} onChange={handleInputs} id="password"/>
        </div>

        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" name="cpassword" value={user.cpassword} onChange={handleInputs} id="cpassword"/>
        </div>

        <div className="form-group form-button my-4">
          <input type="submit" name="sign-up" className="form-submit" onClick={PostData}/>
        </div>
      </form>
    </div>
  );
}
