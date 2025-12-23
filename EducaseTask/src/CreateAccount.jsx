import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";
import NavigationArrows from "./NavigationArrows";

const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card form-card">
        <h2 className="title">Create your PopX account</h2>

        <div className="form-group">
          <label>Full Name*</label>
          <input type="text" placeholder="Marry Doe" />
        </div>

        <div className="form-group">
          <label>Phone number*</label>
          <input type="text" placeholder="Marry Doe" />
        </div>

        <div className="form-group">
          <label>Email address*</label>
          <input type="email" placeholder="Marry Doe" />
        </div>

        <div className="form-group">
          <label>Password*</label>
          <input type="password" placeholder="Marry Doe" />
        </div>

        <div className="form-group">
          <label>Company name</label>
          <input type="text" placeholder="Marry Doe" />
        </div>

        <div className="radio-group">
          <p>Are you an Agency?*</p>
          <label>
            <input type="radio" name="agency" /> Yes
          </label>
          <label>
            <input type="radio" name="agency" /> No
          </label>
        </div>

        <button
          type="button"
          className="btn primary"
          onClick={() => navigate("/account")}
        >
          Create Account
        </button>
        <NavigationArrows />
      </div>
    </div>
  );
};

export default CreateAccount;
