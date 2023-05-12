import React from "react";
import "./styles/TaskContinue.scss";
// import Funnel from "../../../assets/images/funnel.svg";
// import Amoeba from "../../../assets/images/amoeba.svg";
// import Intro from "../../../assets/images/Intro.svg";
// import Digestive from "../../../assets/images/Digestive.svg";
// import Mouth from "../../../assets/images/Mouth.svg";
// import Stomach from "../../../assets/images/Stomach.svg";
// import Intestine from "../../../assets/images/Intestine.svg";
// import Ors from "../../../assets/images/ors.svg";
// import Animal from "../../../assets/images/animals.svg";
import Telescope from "../../../assets/images/telescope.svg";
import Search from "../../../assets/images/search.svg";
import Pdf from "../../../assets/images/pdfsample.svg";
import { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate, useLocation } from "react-router-dom";
// import { pdfdata, videodata } from "../../../services/videosection";
import videoServices from "../../../services/videosection";
// import { PracticeContent } from "../../../services/PractiseContent";
import assesemnetServices from "../../../services/assesmentContent";
// import { AssesmentContent } from "../../../services/assesmentContent";
import practiseServices from "../../../services/PractiseContent";
function MyTaskContinuePage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const { state } = useLocation();

  const [videoData, setVideoData] = useState([]);
  const [pdfData, setPdfData] = useState([]);
  const [practiseData, setPractiseData] = useState([]);
  const [assesmentData, setAssesmentData] = useState([]);

  const language = localStorage.getItem("lang") || "english";

  const videoPlayer = (id, data, user) => {
    navigate("/exam", { state: { id: id, data: data, user: user } });
  };

  const pdfPlayer = (id, data, user) => {
    navigate("/exam", { state: { id: id, data: data, user: user } });
  };

  const practisePlayer = (id, data, title, user) => {
    navigate("/exam", {
      state: { id: id, data: data, title: title, user: user },
    });
  };

  const assesmentPlayer = (id, data, title, user) => {
    navigate("/exam", {
      state: { id: id, data: data, title: title, user: user },
    });
  };

  useEffect(() => {
    videoServices.videodata(state.id).then((res) => {
      setVideoData(res.data.videos);
    });
  }, []);

  const pdfSlidePage = (id) => {
    setStep(1);
    videoServices.pdfdata(id).then((res) => {
      setPdfData(res.data);
    });
  };

  const practiseSlidePage = (id) => {
    return new Promise((resolve, reject) => {
      setStep(2);
      practiseServices
        .PracticeContent(id)
        .then((res) => {
          resolve(res.data);
          setPractiseData(res.data);
        })
        .catch((err) => {
          reject(false);
          console.log(err);
        });
    });
  };

  const assesmentSlidePage = (id) => {
    return new Promise((resolve, reject) => {
      setStep(3);
      assesemnetServices
        .AssesmentContent(id)
        .then((res) => {
          resolve(res.data);
          setAssesmentData(res.data);
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  return (
    <div>
      <div className="taskcontinue-full-container">
        <div className="size-varient">
          <p className="subject-name">{state.category}</p>
          <p className="sub-subject-name">{state.name}</p>
        </div>
        <div className="d-none d-sm-block tele-contain">
          <img src={Telescope} className="tele-img" />
        </div>
      </div>

      <div className="task-continue-header-container">
        <div className="task-continue-container">
          <div className="task-continue-container-inside">
            <p
              onClick={() => setStep(0)}
              className={step === 0 ? "selectVideo" : "dailyVideo"}
            >
              {language == "english" ? "Video" : "காணொளி"}
            </p>
            <p
              onClick={() => pdfSlidePage(state.id)}
              className={step === 1 ? "selectVideo" : "dailyVideo"}
            >
              {language == "english" ? "PDF" : "பீடிஎஃப்"}
            </p>
            <p
              onClick={() => practiseSlidePage(state.id)}
              className={step === 2 ? "selectVideo" : "dailyVideo"}
            >
              {language == "english" ? "Practice" : "பயிற்சி"}
            </p>
            <p
              onClick={() => assesmentSlidePage(state.id)}
              className={step === 3 ? "selectVideo" : "dailyVideo"}
            >
              {language == "english" ? "Assessment" : "மதிப்பீடு"}
            </p>
          </div>
          <div className="d-none d-sm-block search-task">
            <img src={Search} className="search-img" />
            <input className="search-input" placeholder="Search for topics" />
          </div>
        </div>
      </div>
      <>
        <div className="taskcontinue-full-container2">
          {step === 0 ? (
            <div style={{ width: "100%" }}>
              {videoData.map((data, index) => (
                <div
                  key={index}
                  className="video-full-container"
                  onClick={() => videoPlayer("video", data.videoUrl, state.id)}
                >
                  <div>
                    <img src={data.videoThumnail} className="video-main-img" />
                  </div>
                  <div>
                    <p className="video-header-content mb-2">
                      {data.videoTitle}
                    </p>

                    <div className="video-progress-container">
                      <ProgressBar
                        className="video-progress"
                        now={data.videoCompletedPercentage}
                        variant="info"
                      />
                      {data.videoCompletedPercentage}%{" "}
                      {language == "english" ? "Complete" : "முடிந்தது"}
                    </div>
                    <p className="mb-0 mt-2" style={{fontSize:'14px',fontWeight:'500'}}>Time: 25m</p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          {step === 1 ? (
            <div>
              {pdfData.map((data, index) => (
                <div
                  key={index}
                  onClick={() => pdfPlayer("pdf", data.pdfUrl, state.id)}
                  // className={
                  //   data.able ? "video-full-container" : "ableRead"
                  // }
                  className="other-full-container"
                >
                  <div className="d-flex">
                    <img src={Pdf} className="video-main-img" />
                    <div className="ms-4">
                      <p
                        className="video-header-content mt-2 mb-0"
                        style={{ width: "150px" }}
                      >
                        {data.pdfTitle}
                      </p>
                      <p>24 Pages</p>
                    </div>
                  </div>
                  <div className="pdf-progress-container">
                    <button className="pdf-btn">
                      {language == "english" ? "Read" : "படி"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          {step === 2 ? (
            <div>
              {practiseData.map((data, index) => (
                <div
                  key={index}
                  onClick={() =>
                    practisePlayer(
                      "practise",
                      data.practiceQuestions,
                      data.practiceTitle,
                      state.id
                    )
                  }
                  className="other-full-container"
                  // className={
                  //   data.able ? "video-full-container" : "ableRead"
                  // }
                >
                  <div style={{ fontSize: "16px", fontWeight: "400" }}>
                    <p className="mb-0">
                      Practice Name{" "}
                      <span style={{ color: "white" }}> Expected vii</span> :
                      <span style={{ fontWeight: "500" }}>
                        {" "}
                        {data.practiceTitle}
                      </span>
                    </p>
                    <p className="mb-0">
                      Total Number of Questions :
                      <span style={{ fontWeight: "500" }}> 20</span>
                    </p>
                    <p className="mb-0">
                      Expected Time{" "}
                      <span style={{ color: "white" }}> Expected vii</span> :
                      <span style={{ fontWeight: "500" }}> 45 mins</span>
                    </p>
                  </div>

                  <div className="pdf-progress-container">
                    <button className="practise-btn">
                      {language == "english" ? "Practice" : "பயிற்சி"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          {step === 3 ? (
            <div>
              {assesmentData.map((data, index) => (
                <div
                  key={index}
                  onClick={() =>
                    assesmentPlayer(
                      "assesment",
                      data.assessmentQuestions,
                      data.assessmentTitle,
                      state.id
                    )
                  }
                  className="other-full-container"
                >
                  <div style={{ fontSize: "16px", fontWeight: "400" }}>
                    <p className="mb-0">
                      Practice Name{" "}
                      <span style={{ color: "white" }}> Expected vii</span> :
                      <span style={{ fontWeight: "500" }}>
                        {" "}
                        {data.assessmentTitle}
                      </span>
                    </p>
                    <p className="mb-0">
                      Total Number of Questions :
                      <span style={{ fontWeight: "500" }}> 20</span>
                    </p>
                    <p className="mb-0">
                      Expected Time{" "}
                      <span style={{ color: "white" }}> Expected vii</span> :
                      <span style={{ fontWeight: "500" }}> 45 mins</span>
                    </p>
                  </div>
                  <div className="pdf-progress-container">
                    <button className="practise-btn">
                      {language == "english" ? "Take Test" : "சோதனை"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </>
    </div>
  );
}

export default MyTaskContinuePage;
