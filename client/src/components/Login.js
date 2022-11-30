import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    }
    else {
      window.alert("Login Successful");
      console.log("Login Sucessful");
      
      navigate("/");
    }
  }

  return (
    <div className="signup">
      <form method="POST" className="register-form" id="register-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            id="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            id="password"
          />
        </div>

        <div className="form-group form-button my-4">
          <input
            type="submit"
            name="sign-up"
            className="form-submit"
            onClick={loginUser}
          />
        </div>
      </form>
    </div>
  );
}
