import React, { useState } from "react";
import "./styles/forum.scss";

// import Rank from "../../../assets/images/rank.svg";
import Profile from "../../../assets/avatar.svg";
import logo from "../../../assets/avatar.svg";
// import up from "../../../assets/images/like.svg";
// import down from "../../../assets/images/dislike.svg";
// import time from "../../../assets/images/time.svg";
// import Language from "../../../assets/images/language.svg";
// import popup from "../../../assets/images/popup.svg";
import key from "../../../assets/images/key.svg";
import switchacc from "../../../assets/images/switch.svg";
import { useNavigate } from "react-router";
import { Button, Modal } from "react-bootstrap";
import logos from "../../../assets/avatar.svg";
// import {
//   DashboardSwitchAcc,
//   profiledetails,
// } from "../../../services/dashboard";
import dashboardServices from "../../../services/dashboard";

function Forum() {
  const [step, setStep] = useState(0);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const language = localStorage.getItem("lang") || "english";

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const switchAccount = () => {
    return new Promise((resolve, reject) => {
      let data = {
        phone: JSON.parse(localStorage.getItem("parentDetails")).phone,
      };
      dashboardServices
        .DashboardSwitchAcc(data)
        .then((response) => {
          resolve(response);
          navigate("/sign_in", {
            state: { id: response, number: data.phone },
          });
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  function Schoolprofile() {
    navigate("/profile");
  }

  // const englishLang = () => {
  //   localStorage.setItem("lang", "english");
  //   window.location.reload();
  // };

  // const tamilLang = () => {
  //   localStorage.setItem("lang", "tamil");
  //   window.location.reload();
  // };

  return (
    <div className="forum-main-container">
      <div className="task-header-container">
        <div className="task-head-text">
          <p
            style={{
              marginBottom: "0px",
              marginTop: "10%",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            {language == "english" ? "Q&A" : "கேள்வி பதில்"}
          </p>
        </div>
        <div className="rightside-taskcontainer" style={{ cursor: "pointer" }}>
          <div>
            <img
              src={logos}
              onClick={handleShow}
              style={{ width: "35px", height: "35px",marginLeft:'100%' }}
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
      <hr className="horizontal_inner" />
      <div className="main-contain">
        <div className="full-subcontainer">
          <div className="task-topheader-container-forum">
            <p
              onClick={() => setStep(0)}
              className={step === 0 ? "selectDailyTaskforum" : "dailyTaskforum"}
            >
              {language == "english" ? "My Questions" : "என் கேள்விகள்"}
            </p>
            <p
              onClick={() => setStep(1)}
              className={step === 1 ? "selectAllTaskforum" : "dailyTaskforum"}
            >
              {language == "english" ? "Open Questions" : "கேள்விகள்"}
            </p>
          </div>
        </div>
        {step === 0 ? (
          <div className="mytask-full-container-forum">
            <div className="questions">
              <div>
                <img
                  src={Profile}
                  className="mt-2"
                  style={{ width: "35px", height: "35px" }}
                />
              </div>

              <div className="d-flex justify-content-between w-100">
                <div>
                  <p className="ms-3 para-one">
                    {language == "english" ? "Bala" : "பாலா"}
                  </p>
                  <p className="ms-3 para-two">
                    17 {language == "english" ? "Jan" : "ஜனவரி"} 2023
                  </p>
                </div>

                <p className="para-three">01.00</p>
              </div>
            </div>
            <div>
              <h6 className="para-head">
                {language == "english"
                  ? "A mother is twice as old as her son. If 20 years ago, the age of the mother was 10 times the age of the son, what is the present age of the mother?"
                  : "ஒரு தாய் தன் மகனை விட இரண்டு மடங்கு வயதானவள். 20 ஆண்டுகளுக்கு முன்பு, தாயின் வயது மகனின் வயதை விட 10 மடங்கு என்றால், அம்மாவின் தற்போதைய வயது என்ன?"}
              </h6>
            </div>
            <div className="d-flex">
              <div>
                <img src={logo} className="mt-2 logo-one" />
              </div>

              <div className="d-flex justify-content-between w-100">
                <div className="mt-1">
                  <p className="ms-3 para-one">
                    {language == "english"
                      ? "Content Admin1"
                      : "உள்ளடக்க நிர்வாகி1"}{" "}
                    16:05
                  </p>
                  <p className="ms-3 para-two ">
                    17 {language == "english" ? "Jan" : "ஜனவரி"} 2023
                  </p>
                </div>

                <p className="para-three">16:05</p>
              </div>
            </div>
            {language == "english" ? (
              <div className="para-four">
                <p className="para">Let the age of son = X years </p>
                <p className="para"> Age of mother would be =2X </p>
                <p className="para"> As per question 20 years ago;</p>
                <p className="para">10 (X -20) = 2X - 20 </p>
                <p className="para">
                  {" "}
                  10X - 200 = 2X - 20 10X - 2X= - 20 + 200
                </p>
                <p className="para">8X = 180 </p>
                <p className="para"> X== 22.5 years</p>
                <p className="para">Age of mother = 22.5 * 2 = 45 years</p>
              </div>
            ) : (
              <div className="para-four">
                <p className="para">மகனின் வயது = X ஆண்டுகள் </p>
                <p className="para"> தாயின் வயது =2X </p>
                <p className="para"> 20 ஆண்டுகளுக்கு முந்தைய கேள்வியின்படி;</p>
                <p className="para">10 (X -20) = 2X - 20 </p>
                <p className="para">
                  {" "}
                  10X - 200 = 2X - 20 10X - 2X= - 20 + 200
                </p>
                <p className="para">8X = 180 </p>
                <p className="para"> X== 22.5 ஆண்டுகள்</p>
                <p className="para">தாயின் வயது = 22.5 * 2 = 45 ஆண்டுகள்</p>
              </div>
            )}

            {/* <div className="d-flex justify-content-between mt-1 para-main">
              <img src={up} className="logo-one" />
              <img src={down} className="logo-one" />
              <p className="mt-2">
                {language == "english" ? "Reply" : "பதில்"}
              </p>
              <img src={time} className="logo-one" />
              <p className="mt-2">
                3 {language == "english" ? "days ago" : "நாட்களுக்கு முன்பு"}
              </p>
            </div> */}
            <hr className="horizontal-inner-data" />
            <div className="d-flex">
              <div>
                <img
                  src={Profile}
                  className="mt-2 logo-one"
                  style={{ width: "35px", height: "35px" }}
                />
              </div>

              <div className="w-100 justify-content-between d-flex">
                <div>
                  <p className="ms-3 para-one">
                    {language == "english" ? "Bala" : "பாலா"}
                  </p>
                  <p className="ms-3 para-two">
                    17 {language == "english" ? "Jan" : "ஜனவரி"} 2023
                  </p>
                </div>

                <p className="para-three">01.00</p>
              </div>
            </div>
            <div>
              <h6 className="para-head">
                {language == "english"
                  ? ` A monoatomic ideal gas expanded isothermally to double its
                initial volume. It then expanded adiabatically to double the
                volume again. Find the final pressure if the initial pressure of
                the gas was 2x10 Pa`
                  : `ஒரு மோனோஅடோமிக் இலட்சிய வாயு சமவெப்பமாக அதன் இருமடங்காக விரிவடைந்தது
                ஆரம்ப தொகுதி. பின்னர் அது இருமடங்காக விரிவடைந்தது
                மீண்டும் தொகுதி. ஆரம்ப அழுத்தம் என்றால் இறுதி அழுத்தத்தைக் கண்டறியவும்
                வாயு 2x10 Pa`}
              </h6>
            </div>
            <div className="d-flex">
              <div>
                <img src={logo} className="mt-2 logo-one" />
              </div>

              <div className="d-flex justify-content-between w-100">
                <div className="mt-1">
                  <p className="ms-3 para-one">
                    {language == "english"
                      ? "Content Admin1"
                      : "உள்ளடக்க நிர்வாகி1"}{" "}
                    16:05
                  </p>
                  <p className="ms-3 para-two">
                    17 {language == "english" ? "Jan" : "ஜனவரி"} 2023
                  </p>
                </div>

                <p className="para-three">16:05</p>
              </div>
            </div>

            {language == "english" ? (
              <div className="para-four">
                <p className="para">Let the age of son = X years </p>
                <p className="para"> Age of mother would be =2X </p>
                <p className="para"> As per question 20 years ago;</p>
                <p className="para">10 (X -20) = 2X - 20 </p>
                <p className="para">
                  {" "}
                  10X - 200 = 2X - 20 10X - 2X= - 20 + 200
                </p>
                <p className="para">8X = 180 </p>
                <p className="para"> X== 22.5 years</p>
                <p className="para">Age of mother = 22.5 * 2 = 45 years</p>
              </div>
            ) : (
              <div className="para-four">
                <p className="para">மகனின் வயது = X ஆண்டுகள் </p>
                <p className="para"> தாயின் வயது =2X </p>
                <p className="para"> 20 ஆண்டுகளுக்கு முந்தைய கேள்வியின்படி;</p>
                <p className="para">10 (X -20) = 2X - 20 </p>
                <p className="para">
                  {" "}
                  10X - 200 = 2X - 20 10X - 2X= - 20 + 200
                </p>
                <p className="para">8X = 180 </p>
                <p className="para"> X== 22.5 ஆண்டுகள்</p>
                <p className="para">தாயின் வயது = 22.5 * 2 = 45 ஆண்டுகள்</p>
              </div>
            )}
            {/* <div className="d-flex justify-content-between mt-1 para-main">
              <img className="logo-one" src={up} />
              <img className="logo-one" src={down} />
              <p className="mt-2">
                {language == "english" ? "Reply" : "பதில்"}
              </p>
              <img className="logo-one" src={time} />
              <p className="mt-2">
                3 {language == "english" ? "days ago" : "நாட்களுக்கு முன்பு"}
              </p>
            </div> */}
            <hr className="horizontal-inner-data" />
          </div>
        ) : null}
        {step === 1 ? (
          <div className="all-full-container">
            <div className="d-flex">
              <div>
                <img
                  src={Profile}
                  className="mt-2 logo-one"
                  style={{ width: "35px", height: "35px" }}
                />
              </div>

              <div className="d-flex justify-content-between w-100">
                <div>
                  <p className="ms-3 para-one ">
                    {language == "english" ? "Bala" : "பாலா"}
                  </p>
                  <p className="ms-3 para-two">
                    17 {language == "english" ? "Jan" : "ஜனவரி"} 2023
                  </p>
                </div>

                <p className="para-three">01.00</p>
              </div>
            </div>
            <div>
              <h6 className="para-head">
                {language == "english"
                  ? "Find work done in moving a particle of mass 0.5 kg from x = 0 to x = 2. V = 3x2 +4"
                  : "0.5 கிலோ எடையுள்ள ஒரு துகளை x = 0 இலிருந்து நகர்த்துவதில் செய்யப்பட்ட வேலையைக் கண்டறியவும்  x = 2. V = 3x2 +4"}
              </h6>
            </div>

            {/* <div
              className="d-flex justify-content-between mt-1 para-main"
              // style={{ width: "20%" }}
            >
              <img src={up} className="logo-one" />
              <img src={down} className="logo-one" />
              <p className="mt-2">
                {language == "english" ? "Reply" : "பதில்"}
              </p>
              <img src={time} className="logo-one" />
              <p className="mt-2">
                3 {language == "english" ? "days ago" : "நாட்களுக்கு முன்பு"}
              </p>
            </div> */}
            <hr
              className="header-border"
              style={{ borderTop: "2px solid grey" }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Forum;
