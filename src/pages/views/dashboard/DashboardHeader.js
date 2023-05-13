import React, { useState } from "react";
import logo from "../../../assets/avatar.svg";
import key from "../../../assets/images/key.svg";
import switchacc from "../../../assets/images/switch.svg";
import { useNavigate } from "react-router-dom";
import "./styles/Dashboard.scss";
import { Button, Modal } from "react-bootstrap";

function DashboardHeader() {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const language = localStorage.getItem("lang") || "english";

  function Schoolprofile() {
    navigate("/profile");
  }

  const switchAccount = () => {
    navigate('/')
  };

  return (
    <div className="main-container-instructor">
      <div className="d-flex justify-content-between">
        <div className="instructor-header-main-container">
          <p
            className="para-teacher-instructor-header"
            // style={{
            //   fontSize: "24px",
            //   fontWeight: "700",
            //   color: "#333333",
            //   marginTop: "0px",
            //   marginBottom: "0px",
            // }}
          >
            Welcome, Arjun
          </p>
          <p
            className="para-total"
            // style={{
            //   fontSize: "16px",
            //   fontWeight: "500",
            //   marginTop: "0px",
            //   marginBottom: "0px",
            // }}
          >
            Last logged in: 18 Jan, 2023 06:00 pm
          </p>
        </div>
        <div className="instructor-header-main-container-1">
          <div>
            <img
              src={logo}
              width="30px"
              height="30px"
              className="school-img"
              style={{
                cursor: "pointer",
                marginTop: "0.35rem",
                borderRadius: "50%",
              }}
              onClick={handleShow}
            />
          </div>
        </div>
      </div>
      <Modal style={{width:'18%',marginLeft:'80%',marginTop:'2%'}} show={show} onHide={handleClose}>
        <Modal.Body style={{textAlign:'center'}}>
          <div className="d-flex justify-content-center">
                <img src={logo} style={{ width: "20%" }} />
          </div>
          <h6 className="d-flex justify-content-center ">
            {language == "english" ? `Teacher` : "பாலா"}
          </h6>
          <h6 className="d-flex justify-content-center ">
            teacher@gmail.com
          </h6>
          <Button
            onClick={Schoolprofile}
            className="modal-second-container mt-2"
            // variant="outline-primary "
            style={{
              backgroundColor: "white",
              color: "#9C1303",
              width: "88px",
              borderRaius: "10px",
              height: "40px",
              border: "1px solid #9C1303",
              marginLeft: "2%",
            }}
          >
            {language == "english" ? "View" : "பார்வை"}
          </Button>
          <hr className="horizantal-first mb-0 " />
{/* 
          {otherDetails.map((data, index) => (
            <>
              <div
                onClick={otherAcc}
                key={index}
                className="d-flex justify-content-center modal-third-container point"
              >
                <img src={logo1} className="logo-img" />
                <h6 className="mt-2 ms-3">{data.email}</h6>
              </div>
              <hr className="horizontal-second" />
            </>
          ))} */}
          <div style={{cursor:'pointer'}} className="d-flex justify-content-center modal-four-container point">
            <img src={key} />
            <h6
              className="mt-2 ms-3 "
              onClick={() => navigate("/change_password")}
            >
              {language == "english"
                ? "Change password"
                : "கடவுச்சொல்லை மாற்று"}
            </h6>
          </div>
          <hr
            className="horizontal-third mt-2 mb-0"
            // style={{
            //   border: "2px solid grey",
            //   marginBottom: "0%",
            //   marginTop: "0%",
            // }}
          />
          <div style={{cursor:'pointer'}} className="d-flex justify-content-center point">
            <img src={switchacc} />
            <h6 className="mt-2 ms-3 " onClick={switchAccount}>
              {language == "english" ? "Switch Account" : "கணக்கு சேர்க்க"}
            </h6>
          </div>
        </Modal.Body>
      </Modal>
      <hr />
    </div>
  );
}

export default DashboardHeader;
