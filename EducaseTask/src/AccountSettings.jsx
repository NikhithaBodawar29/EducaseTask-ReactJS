import React from "react";
import "./AccountSettings.css";

const AccountSettings = () => {
  return (
    <div className="container">
      <div className="card account-card">
        <h3 className="account-title">Account Settings</h3>

        <div className="profile-section">
          <div className="avatar-wrapper">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="avatar"
            />
            <span className="camera-icon">📷</span>
          </div>

          <div className="profile-info">
            <h4>Marry Doe</h4>
            <p>Marry@gmail.com</p>
          </div>
        </div>

        <p className="bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam.
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;
