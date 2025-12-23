import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import NavigationArrows from "./NavigationArrows";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Welcome to PopX</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <button
          className="btn primary"
          onClick={() => navigate("/create-account")}
        >
          Create Account
        </button>

        <button
          className="btn secondary"
          type="button"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
        <NavigationArrows />
      </div>
    </div>
  );
};

export default Welcome;
