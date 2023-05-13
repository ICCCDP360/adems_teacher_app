import React from "react";
import logo from "../../../assets/avatar.svg";
import "./styles/Profilepage.scss";

function ProfileHeader() {
  const language = localStorage.getItem("lang") || "english";

  return (
    <div className="profile-header-main-container">
      <div className="task-header-container">
        <div className="task-head-text">
          <p className="profile-lang-1">
            {language == "english" ? "Profile" : "சுயவிவரம்"}
          </p>
        </div>
        <div className="rightside-taskcontainer" style={{ cursor: "pointer" }}>
          <div>
            <img
              src={logo}
              style={{ width: "35px", height: "35px",marginLeft:'100%' }}
              // className="user-details-img-dp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
