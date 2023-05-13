import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/avatar.svg";
import key from "../../../assets/images/key.svg";
import switchacc from "../../../assets/images/switch.svg";
import "./styles/StudentContent.scss";
import { Button, Modal } from "react-bootstrap";

const StudentsHeader = () => {

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const language = localStorage.getItem("lang") || "english";

  const switchAccount = () => {
    navigate('/')
  };

  function Schoolprofile() {
    navigate("/profile");
  }

  return (
    <div>
      <div className="student-Header-main">
        <div className="student-subheader">
          <p className="student-header-para-student">Students</p>
          <p className="student-header-para-total">
            Total Number of Students: 1395
          </p>
        </div>
        <div className="student-subheader-container-2">
          <div>
            <img
              src={logo}
              width="30px"
              height="30px"
              className="student-head-img-2"
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
};

export default StudentsHeader;
