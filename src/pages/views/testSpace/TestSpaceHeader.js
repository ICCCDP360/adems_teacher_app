import React, { useState } from "react";
import Setting from "../../../assets/images/setting.svg";
import logo1 from "../../../assets/avatar.svg";
import logo from "../../../assets/avatar.svg";
import key from "../../../assets/images/key.svg";
import switchacc from "../../../assets/images/switch.svg";
import { useNavigate } from "react-router";
import { Button, Modal } from "react-bootstrap";
import "./styles/TestSpace.scss";
import dashboardServices from "../../../services/dashboard";

function TestSpaceHeader() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const language = localStorage.getItem("lang") || "english";

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const other = localStorage.getItem("otherAccDetails");
  const otherDetails = JSON.parse(other);

  const user = localStorage.getItem("userDetails");
  const userDetail = JSON.parse(user);
  console.log(userDetail, "user");

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

  const name = JSON.parse(localStorage.getItem("otherAccDetails"))[0].name;
  const id = JSON.parse(localStorage.getItem("otherAccDetails"))[0]._id;

  const otherAcc = () => {
    let data = {
      name: name,
      _id: id,
    };

    navigate("/account_verify", {
      state: { id: data },
    });
  };

  const profileData = () => {
    return new Promise((resolve, reject) => {
      const datas = localStorage.getItem("userid");

      dashboardServices
        .profiledetails(JSON.parse(datas))

        .then((res) => {
          resolve(res);
          navigate("/profile", { state: { data: res } });

          // setParent(res.parentDetails);
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  const image = "";
  return (
    <div className="profile-header-main-container">
      <div className="task-header-container">
        <div className="task-head-text">
          <p className="profile-lang-1 mt-4">
            {language == "english" ? "Test Space" : "சோதனை பகுதி"}
          </p>
        </div>
        <div className="rightside-taskcontainer" style={{ cursor: "pointer" }}>
          <div>
            <img src={Setting} className="mt-2" />
          </div>
          <div>
            {image ? (
              <>
                <img
                  src={userDetail.dp}
                  width="40px"
                  height="40px"
                  style={{ borderRadius: "50%" }}
                  onClick={handleShow}
                />
              </>
            ) : (
              <>
                <img
                  src={logo}
                  style={{ width: "35px", height: "35px" }}
                  onClick={handleShow}
                />
              </>
            )}
          </div>
        </div>
      </div>
      <Modal className="modal-first-container" show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            {image ? (
              <>
                <img
                  src={userDetail.dp}
                  width="40px"
                  height="40px"
                  style={{ borderRadius: "50%" }}
                />
              </>
            ) : (
              <>
                <img src={logo} style={{ width: "20%" }} onClick={handleShow} />
              </>
            )}
          </div>
          <h6 className="d-flex justify-content-center mt-2">
            {language == "english" ? `${userDetail.name}` : "பாலா"}
          </h6>
          <h6 className="d-flex justify-content-center ">{userDetail.email}</h6>
          <Button
            onClick={profileData}
            className="modal-second-container mt-2"
            // variant="outline-primary "
            style={{
              backgroundColor: "white",
              color: "#9C1303",
              width: "88px",
              borderRaius: "10px",
              height: "45px",
              border: "1px solid #9C1303",
              marginLeft: "2%",
            }}
          >
            {language == "english" ? "View" : "பார்வை"}
          </Button>
          <hr className="horizontal-second" />
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
          ))}
          <div className="d-flex justify-content-center modal-four-container point">
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
          <hr className="horizontal-third" />
          <div className="d-flex justify-content-center point">
            <img src={switchacc} />
            <h6 className="mt-2 ms-3 " onClick={switchAccount}>
              {language == "english" ? "Switch Account" : "கணக்கு சேர்க்க"}
            </h6>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TestSpaceHeader;
