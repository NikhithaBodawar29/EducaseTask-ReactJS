import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card form-card">
        <h2 className="title">Signin to your PopX account</h2>

        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>

        <button className="btn primary" onClick={() => navigate("/account")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
