import React from "react";
import Camp from "../../../assets/images/rank.svg";
import "./styles/Profilepage.scss";
import logo1 from "../../../assets/avatar.svg";
// import { useEffect } from "react";
function ProfileContent() {
  const language = localStorage.getItem("lang") || "english";

  // useEffect(() => {}, [state]);

  return (
    <div className="main-container-profilecontent">
      <div className="sub-container-content-1">
        <div>
          <img className="user-details-img-dp" src={logo1} />
        </div>
        <div>
          <p className="user-details-stu-name">Teacher </p>
        </div>
        <div className="d-flex justify-content-center">
          <img src={Camp} alt="camp" />
          <p className="profile-content-point">{/* {userDetails.points} */}</p>
        </div>
      </div>
      <div className="sub-container-content-2">
        <p className="personal-para-info">
          {language == "english" ? "Personal Info" : "தனிப்பட்ட தகவல்"}
        </p>
        <div className="d-flex justify-content-between w-100">
          <div className="w-100">
            <p className="eng-para-1">
              {language == "english" ? "Name" : "பெயர்"}
            </p>
            <input
              value="Teacher"
              className="stu-name-input-field"
              type="text"
            />
          </div>
          <div className="w-100">
            <p className="eng-para-1">
              {language == "english" ? "Mobile Number" : "கைபேசி எண்"}
            </p>
            <input
              className="stu-name-input-field "
              value="9678536757"
              type="number"
            />
          </div>
        </div>
        <div className="d-flex justify-content-beetween w-100">
          <div className="w-100">
            <p className="eng-para-1">
              {language == "english" ? "Email" : "மின்னஞ்சல்"}
            </p>
            <input
              className="stu-name-input-field "
              value="teacher@gmail.com"
              type="text"
            />
          </div>
          <div className="w-100">
            <p className="eng-para-1">
              {language == "english" ? "Date of Birth" : "பிறந்த தேதி"}
            </p>
            <input
              className="stu-name-input-field"
              value="15/02/1993"
              type="text"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="w-100">
            <p className="eng-para-1">
              {language == "english" ? "Gender" : "பாலினம்"}
            </p>
            <input className="stu-name-input-field" value="Male" type="text" />
          </div>
          <div className="w-100">
            <p className="eng-para-1">
              {language == "english" ? "City" : "நகரம்"}
            </p>
            <input
              className="stu-name-input-field"
              value="Chennai"
              type="text"
            />
          </div>
        </div>
        <p className="personal-para-info">
          {language == "english" ? "School Info" : "பள்ளி தகவல்"}
        </p>
        <div className="d-flex justify-content-between w-100">
          <div className="w-100">
            <p className="eng-para-1">
              {language == "english" ? "School Name" : "பள்ளி பெயர்"}
            </p>
            <input
              className="stu-name-input-field"
              value="Sri Ramana Vidyalaya"
              type="text"
            />
          </div>
          <div className="w-100">
            <p className="eng-para-1">
              {language == "english" ? "School Id" : "பள்ளி Id"}
            </p>
            <input className="stu-name-input-field" value="001" type="text" />
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="w-100">
            <p className="eng-para-1">
              {language == "english" ? "School Address" : "பள்ளி முகவரி"}
            </p>
            <input
              className="stu-name-input-field"
              value="Ramana Nagar"
              type="text"
            />
          </div>
          <div className="w-100">
            <p className="eng-para-1">
              {language == "english" ? "City" : "நகரம்"}
            </p>
            <input
              className="stu-name-input-field"
              value="chennai"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
