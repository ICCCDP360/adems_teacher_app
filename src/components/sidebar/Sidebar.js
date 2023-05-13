import React, { useState, useEffect } from "react";
import "./styles/Sidebar.scss";
import studentBlack from '../../assets/images/student.svg'
import dashboardWhite from "../../assets/images/dashboardWhite.svg";
import dashboardBlack from "../../assets/images/dashboardBlack.svg";
import contentWhite from "../../assets/images/contentWhite.svg";
import contentBlack from "../../assets/images/contentBlack.svg";
import forumWhite from "../../assets/images/forumWhite.svg";
import forumBlack from "../../assets/images/forumBlack.svg";
import LogoutIcon from "../../assets/images/logoutIcon.svg";
import RightArrow from "../../assets/images/rightArrow.svg";
import Glope from '../../assets/images/glope.svg'
import Ques from '../../assets/images/ques.svg'
import Noti from '../../assets/images/noti.png'
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import logo1 from "../../assets/images/smallLogo.png";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const stepCount = 0;
  const language = localStorage.getItem("lang") || "english";
  const [slide, setSlide] = useState(true);

  const [schoolDetails, SetschoolDetails] = useState([]);
  console.log(schoolDetails);

  useEffect(() => {
    SetschoolDetails(JSON.parse(localStorage.getItem("schoolDetails")));
  }, []);

  const dashboardPage = () => {
    navigate("/dashboard");
  };

  const studentPage = () => {
    navigate("/student");
  };

  const contentPage = () => {
    navigate("/content");
  };

  const forumPage = () => {
    navigate("/forum");
  };

  const testSpace=()=>{
    navigate('/testspace')
  }

  const newsArticle=()=>{
    navigate('/news/articles')
  }

  const notificationPage=()=>{
    navigate('/notification')
  }

  const logouts = () => {
    localStorage.removeItem("lang");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("schoolDetails");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("userid");
    localStorage.removeItem("parentDetails");
    localStorage.removeItem("otherAccDetails");
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      {slide ? (
        <div className="sidebar-full-container">
          <div>
            <div
              className="header-logo-container"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/dashboard")}
            >
              <img
                src={logo}
                width="100px"
                height="100px"
                style={{ borderRadius: "50%" }}
                className="header-logo "
              />
            </div>
            <div className="header-divider-container">
              <hr className="divider-line" />
            </div>
            <div className="sidecontent-container">
              <div
                className={
                  location.pathname === "/dashboard"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={dashboardPage}
              >
                  <img src={dashboardBlack} />
                <p className="sidetext-content">
                  {language == "english" ? "Dashboard" : "தகவல்பலகை"}
                </p>
              </div>
              <div
                className={
                  location.pathname === "/student"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={studentPage}
              >
                  <img src={studentBlack} />
                <p className="sidetext-content">
                  {language == "english" ? "Student" : "தகவல்பலகை"}
                </p>
              </div>
              <div
                className={
                  location.pathname === "/content"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={contentPage}
              >
                  <img src={contentBlack} />
                <p className="sidetext-content">
                  {language == "english" ? "Course" : "பாடப்பகுதி"}
                </p>
              </div>
              <div
                className={
                  location.pathname === "/forum"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={forumPage}
              >
                  <img src={Ques} />
                <p className="sidetext-content">
                  {language == "english" ? "Q&A" : "கேள்வி&பதில்"}
                </p>
              </div>



              <div
                className={
                  location.pathname === "/testspace"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={testSpace}
              >
                  <img src={forumBlack} />
                <p className="sidetext-content">
                  {language == "english" ? "Test Space" : "சோதனை பகுதி"}
                </p>
              </div>
              <div
                className={
                  location.pathname === "/news/articles"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={newsArticle}
              >
                  <img src={Glope} />
                <p className="sidetext-content">
                  {language == "english" ? "News & Articles" : "செய்திகள் & கட்டுரைகள்"}
                </p>
              </div>
              <div
                className={
                  location.pathname === "/notification"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={notificationPage}
              >
                {stepCount === 1 ? (
                  <img src={forumWhite} />
                ) : (
                  <img src={forumBlack} />
                )}
                <p className="sidetext-content">
                  {/* {item.lang.qna} */}
                  {language == "english" ? "Notification" : "அறிவிப்பு"}
                </p>
              </div>
            </div>
            <div className="end-divider-container">
              <hr className="end-divider-line" />
            </div>
          </div>
          <div className="logout-main-container">
            <button className="logout-btn">
              <div className="logout-btn-container">
                <img
                  src={LogoutIcon}
                  className={
                    language == "english" ? "logout-img" : "logout-img-tamil"
                  }
                />
                <p
                  className={
                    language == "english" ? "logout-text" : "logout-text-tamil"
                  }
                  onClick={logouts}
                >
                  {language == "english" ? "Logout" : "வெளியேறு"}
                </p>
              </div>
            </button>
            <div className="slide-btn-container">
              <button onClick={() => setSlide(false)} className="slide-btn">
                <img src={RightArrow} className="slide-img" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar-full-container-sm">
          <div>
            <div
              className="header-logo-container"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/dashboard")}
            >
              {/* <img src={schoolDetails.logo} className="header-logo" /> */}
              <img src={logo1} className="header-logo" />
            </div>
            <div className="header-divider-container">
              <hr className="divider-line" />
            </div>
            <div className="sidecontent-container">
              <div
                className={
                  location.pathname === "/dashboard"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={dashboardPage}
              >
                {stepCount === 1 ? (
                  <img src={dashboardWhite} />
                ) : (
                  <img src={dashboardBlack} />
                )}
              </div>
              <div
                className={
                  location.pathname === "/content"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={contentPage}
              >
                {stepCount === 1 ? (
                  <img src={contentWhite} />
                ) : (
                  <img src={contentBlack} />
                )}
              </div>
              <div
                className={
                  location.pathname === "/forum"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={forumPage}
              >
                  <img src={Ques} />
              </div>
              <div
                className={
                  location.pathname === "/testspace"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={testSpace}
              >
                  <img src={forumBlack} />
              </div>
              <div
                className={
                  location.pathname === "/news/articles"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={newsArticle}
              >
                  <img src={Glope} />
              </div>
              <div
                className={
                  location.pathname === "/notification"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={notificationPage}
              >
                  <img src={Noti} />
              </div>
            </div>
            <div className="end-divider-container">
              <hr className="end-divider-line" />
            </div>
          </div>
          <div className="logout-main-container">
            <button className="logout-btn">
              <div onClick={logouts} className="logout-btn-container">
                <img
                  src={LogoutIcon}
                  className={
                    language == "english" ? "logout-img" : "logout-img-tamil"
                  }
                />
              </div>
            </button>
            <div className="slide-btn-container">
              <button onClick={() => setSlide(true)} className="slide-btn">
                <img src={RightArrow} className="slide-img" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ); */}
      {/* })} */}
    </>
  );
}

export default Sidebar;
