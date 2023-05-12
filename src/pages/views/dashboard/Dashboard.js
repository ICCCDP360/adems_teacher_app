import React, { useEffect, useState } from "react";
import Heropic from "../../../assets/images/heropic.svg";
import Notepad from "../../../assets/images/notepad.svg";
import Trophy from "../../../assets/images/trophy.svg";
import Target from "../../../assets/images/target.svg";
import Clock from "../../../assets/images/clock.svg";
import "./styles/Dashbord.scss";
import ReactApexChart from "react-apexcharts";
import Modal from "react-bootstrap/Modal";
import logo1 from "../../../assets/avatar.svg";
import key from "../../../assets/images/key.svg";
import switchacc from "../../../assets/images/switch.svg";
import Star from "../../../assets/images/fullStar.svg";
import EmptyStar from "../../../assets/images/emptyStar.svg";
import HalfStar from "../../../assets/images/halfStar.svg";
import Setting from "../../../assets/images/setting.svg";
import "./styles/Dashbord.scss";
import img1 from "../../../assets/avatar.svg";

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import dashboardServices from "../../../services/dashboard";
import { CircularProgressbar } from "react-circular-progressbar";
function Dashboard() {
  const [show, setShow] = useState(false);
  const [graph, setGraph] = useState("science");

  // const [language, setLanguage] = useState("english");
  const language = localStorage.getItem("lang") || "english";

  const [setTaskRem] = useState([]);
  const detail = localStorage.getItem("userDetails");
  const userdetail = JSON.parse(detail);
  // console.log(userdetail, "kk");
  const other = localStorage.getItem("otherAccDetails");
  const otherDetails = JSON.parse(other);

  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const profileData = () => {
    return new Promise((resolve, reject) => {
      const datas = localStorage.getItem("userid");

      dashboardServices
        .profiledetails(JSON.parse(datas))

        .then((res) => {
          resolve(res);
          navigate("/profile", { state: { data: res } });
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  const demoValue = {
    series: [
      {
        data: [10, 50, 30, 80, 70],
      },
    ],
    options: {
      chart: {
        height: 500,
        type: "bar",
        toolbar: {
          show: false,
        },
        labels: ["Science"],
        events: {
          // click: function (chart, w, e) {
          // console.log(chart, w, e)
          // },
        },
      },

      plotOptions: {
        bar: {
          columnWidth: "10%",
          distributed: false,
        },
      },
      colors: ["#03C4AD"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [["Forces"], ["Energy"], ["Sound"], ["Light"], ["Heat"]],
        labels: {
          style: {
            // fontSize: "15px",
          },
        },
      },
    },
  };
  const demoValue1 = {
    series: [
      {
        data: [10, 50, 30, 80, 70],
      },
    ],
    options: {
      chart: {
        height: 500,
        type: "bar",
        toolbar: {
          show: false,
        },
        labels: ["Science"],
        events: {
          // click: function (chart, w, e) {
          // console.log(chart, w, e)
          // },
        },
      },

      plotOptions: {
        bar: {
          columnWidth: "10%",
          distributed: false,
        },
      },
      colors: ["#03C4AD"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [["சக்தி"], ["ஆற்றல்"], ["ஒலி"], ["ஒளி"], ["வெப்பம்"]],
        labels: {
          style: {
            // fontSize: "15px",
          },
        },
      },
    },
  };

  const demoValueMath = {
    series: [
      {
        data: [50, 30, 45, 20, 60],
      },
    ],
    options: {
      chart: {
        height: 500,
        type: "bar",
        toolbar: {
          show: false,
        },
        labels: ["Maths"],
        events: {
          // click: function (chart, w, e) {
          // console.log(chart, w, e)
          // },
        },
      },

      plotOptions: {
        bar: {
          columnWidth: "10%",
          distributed: false,
        },
      },
      colors: ["#03C4AD"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["Algebra"],
          ["Geometry"],
          ["Trigonometry"],
          ["Matrix"],
          ["Probability"],
        ],
        labels: {
          style: {
            // fontSize: "15px",
          },
        },
      },
    },
  };

  const demoValueMath1 = {
    series: [
      {
        data: [50, 30, 45, 20, 60],
      },
    ],
    options: {
      chart: {
        height: 500,
        type: "bar",
        toolbar: {
          show: false,
        },
        labels: ["Maths"],
        events: {
          // click: function (chart, w, e) {
          // console.log(chart, w, e)
          // },
        },
      },

      plotOptions: {
        bar: {
          columnWidth: "10%",
          distributed: false,
        },
      },
      colors: ["#03C4AD"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["இயற்கணிதம்"],
          ["வடிவியல்"],
          ["முக்கோணவியல்"],
          ["மேட்ரிக்ஸ்"],
          ["நிகழ்தகவு"],
        ],
        labels: {
          style: {
            fontSize: "10px",
          },
        },
      },
    },
  };

  // const donutCircle = {
  //   series: [44, 55],
  //   options: {
  //     chart: {
  //       type: 'donut',
  //     },
  //     responsive: [{
  //       breakpoint: 480,
  //       options: {
  //         chart: {
  //           width: 200,
  //           labels:['science,maths']
  //         },
  //         legend: {
  //           position: 'bottom'
  //         }
  //       }
  //     }]
  //   },
  // }

  useEffect(() => {
    dashboardServices.Dashboardcontent().then((res) => {
      setTaskRem(res.data);
    });
  }, []);

  const switchAccount = () => {
    return new Promise((resolve, reject) => {
      let data = {
        phone: JSON.parse(localStorage.getItem("parentDetails")).phone,
      };
      dashboardServices
        .DashboardSwitchAcc(data)
        .then((response) => {
          resolve(response);
          // console.log(response, "hhh");
          // localStorage.setItem("Acc");
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

  return (
    <div className="main-dashboard-container">
      <div className="d-none d-sm-block">
        <div className="header-container">
          <div className="header-leftside-container">
            <h2 className="heading-content">
              {language == "english" ? "Welcome" : "வரவேற்பு"},{" "}
              {userdetail?.name}
            </h2>
            <p className="header-sub-content">
              {language == "english"
                ? `${userdetail?.std}th Standard - Last logged in: 18 Jan, 2023 06:00 pm`
                : `${userdetail?.std}ஆம் வகுப்பு - கடைசியாக உள்நுழைந்தது: 18 ஜனவரி, 2023 மாலை 06:00 மணி`}
            </p>
          </div>
          <div
            className="header-rightside-container"
            style={{ cursor: "pointer" }}
          >
            <div>
              <img src={Setting} className="mt-2" />
            </div>
            <div>
              <img src={img1} onClick={handleShow} className="img-dp" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-sm-none">
        <div className="header-container">
          <div className="header-leftside-container">
            <h2 className="heading-content">
              {language == "english" ? "Welcome" : "வரவேற்பு"},{" "}
            {language == "english" ? "Bala" : "பாலா"}
              {/* {item.lang.welcome[0]} {userDetails.stu_name} */}
            </h2>
          </div>
          <div
            className="header-rightside-container"
            style={{ cursor: "pointer" }}
          >
            <img src={Setting} className="mt-2" />
            <div>
              <img className="img-dp" src={logo1} onClick={handleShow} />
            </div>
          </div>
        </div>
      </div>
      <hr className="header-border" />
      <div>
        <Modal
          className="modal-first-container"
          show={show}
          onHide={handleClose}
        >
          <Modal.Body>
            <div className="d-flex justify-content-around">
              <img
                src={img1}
                width="60px"
                height="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>

            <h6 className="d-flex justify-content-center ">
              {userdetail?.name}
            </h6>
            <h6 className="d-flex justify-content-center ">
              {userdetail?.email}
            </h6>
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
            {otherDetails.map((oacc) => (
              <>
                <hr className="horizantal-first" />
                <div
                  onClick={otherAcc}
                  className="d-flex justify-content-center modal-third-container point"
                >
                  <img
                    src={logo1}
                    className="logo-img"
                    height="35px"
                    width="35px"
                    style={{ borderRadius: "50%" }}
                  />
                  <h6 className="mt-2 ms-3">{oacc.email}</h6>
                </div>
              </>
            ))}
            <hr className="horizontal-second" />
            <div className="d-flex justify-content-center modal-four-container point">
              <img src={key} />
              <h6
                className="mt-2 ms-3 "
                onClick={() =>
                  navigate("/change_password", { state: { stuId: detail._id } })
                }
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
                {language == "english" ? "Switch Account" : "கணக்கை மாற்றவும்"}
              </h6>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      <div className="first-full-container">
        <div className="leftside-container">
          <div>
            <p
              className={
                language == "english"
                  ? "leftside-heading"
                  : "leftside-heading-tamil"
              }
            >
              {language == "english" ? "Task Reminder" : "பணி நினைவூட்டல்"}
            </p>
            <div className="sub-container">
              {userdetail?.std == 7 ? (
                <p className="subject-name">
                  {language == "english"
                    ? "Nutrition in Animals"
                    : "விலங்குகளின் ஊட்டச்சத்து"}
                  {/* {item.lang.subject} */}
                </p>
              ) : (
                <p className="subject-name">
                  {language == "english"
                    ? "Cardiac Cycle"
                    : "இதய இயக்க சுழற்சி"}
                  {/* {item.lang.subject} */}
                </p>
              )}

              <p
                className={
                  language == "english" ? "total-timing" : "total-timing-tamil"
                }
              >
                {language == "english"
                  ? "Total: 8 Chapter"
                  : "மொத்தம்: 8 அத்தியாயம்"}
                {/* {item.lang.total[0]}: 8 {item.lang.total[1]} */}
              </p>
            </div>
            <button
              className={
                language == "english" ? "leftside-btn" : "leftside-btn-tamil"
              }
              onClick={() => navigate("/content")}
            >
              {language == "english" ? "Start" : "தொடங்கு"}
              {/* {item.lang.total[2]} */}
            </button>
          </div>

          <div>
            <img className="task-remainder-img" src={Heropic} />
          </div>
        </div>

        <div className="rightside-notice-container">
          <div>
            <p
              className={
                language == "english" ? "notice-header" : "notice-header-tamil"
              }
            >
              {language == "english" ? "Notice Board" : "அறிவிப்பு பலகை"}
              {/* {item.lang.title} */}
            </p>
            <p className="notice-content">
              {/* {item.lang.content} */}
              {language == "english"
                ? "New video on thermodynamics was uploaded."
                : "வெப்ப இயக்கவியல் பற்றிய புதிய வீடியோ பதிவேற்றப்பட்டது."}
            </p>
            {/* <button
              className={
                language == "english" ? "notice-btn" : "notice-btn-tamil"
              }
              onClick={() => navigate("/content")}
            >
              {item.lang.total[2]}
              {language == "english" ? "Start" : "தொடங்கு"}
            </button> */}
          </div>
          <div>
            <img src={Notepad} className="notepad-img" />
          </div>
        </div>
        {/* );
        })} */}
      </div>
      {/* {taskRem.slice(2, 3).map((item, index) => {
        return ( */}
      <div className="second-full-container">
        <div className="standing-container">
          <div className="standing-inside-container">
            <img
              src={Trophy}
              className={language == "english" ? "" : "trophy-img"}
            />
            <div className="rightside-content-container">
              <p
                className={
                  language == "english"
                    ? "content-header"
                    : "content-header-tamil"
                }
              >
                {/* {item.lang.standing} */}
                {language == "english" ? "Standings" : "படிநிலை"}
              </p>
              <div className="subcontent-container">
                <p
                  className={
                    language == "english"
                      ? "divider-sider-content"
                      : "divider-sider-content-tamil"
                  }
                >
                  {language == "english" ? "Bronze" : "வெண்கலம்"}
                  {/* {item.lang.cup} */}
                </p>
              </div>
            </div>
            <div className="star-container">
              <img
                src={Star}
                className={language == "english" ? "" : "star-img"}
              />
              <img
                src={HalfStar}
                className={language == "english" ? "" : "star-img"}
              />
              <img
                src={EmptyStar}
                className={language == "english" ? "" : "star-img"}
              />
            </div>
          </div>
        </div>
        <div className="average-container-full">
          <div className="average-container">
            <div className="average-inside-container">
              <img
                src={Target}
                className={language == "english" ? "" : "target-img"}
              />
              <div className="average-content-container">
                <p
                  className={
                    language == "english"
                      ? "average-content"
                      : "average-content-tamil"
                  }
                >
                  {language == "english" ? "Percentage" : "சராசரி மதிப்பெண்"}
                  {/* {item.lang.avergescore} */}
                </p>
                <p
                  className={
                    language == "english"
                      ? "average-subcontent"
                      : "average-subcontent-tamil"
                  }
                >
                  68%
                </p>
              </div>
            </div>
          </div>
          <div className="average-container">
            <div className="average-inside-container">
              <img
                src={Clock}
                className={language == "english" ? "" : "target-img"}
              />
              <div className="average-content-container">
                <p
                  className={
                    language == "english"
                      ? "average-content"
                      : "average-content-tamil1"
                  }
                >
                  {language == "english"
                    ? "Total Time Spent"
                    : "செலவழித்த மொத்த நேரம்"}
                  {/* {item.lang.totaltimespent[0]} */}
                </p>
                <p
                  className={
                    language == "english"
                      ? "average-subcontent"
                      : "average-subcontent-tamil"
                  }
                >
                  112
                  {/* {item.lang.totaltimespent[1]} */}
                  {language == "english" ? "hrs" : "மணி"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* );
      })} */}
      <div className="third-full-container">
        {/* {taskRem.slice(4, 5).map((item, index) => {
          return ( */}
        <div className="circle-graph-container">
          <div className="d-flex justify-content-between">
            <p className="circle-graph-header">
              {/* {item.lang.title} */}
              {language == "english" ? "Total Topics" : "மொத்த தலைப்புகள்"}
            </p>
            <select
              className="graph-header-form"
              // aria-label="Default select example"
              value={graph}
              onChange={(e) => setGraph(e.target.value)}
            >
              <option value="science">
                {language == "english" ? "Science" : "அறிவியல்"}
              </option>
              <option value="maths">
                {language == "english" ? "Mathematics" : "கணிதம்"}
              </option>
            </select>
          </div>
          <div className="circle-graph-inside-container">
            {/* <table
              style={{ width: "100%" }}
              // bordered
              // responsive
              // style={{  border: "1px solid red" }}
            >
              <thead>
                <tr>
                  {language == "english" ? (
                    <>
                      <th>Subjects </th>
                      <th>Assigned </th>
                      <th>Completed</th>
                    </>
                  ) : (
                    <>
                      <th>பாடங்கள்</th>
                      <th>ஒதுக்கப்படும்</th>
                      <th>நிறைவு</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{language == "english" ? "Mathematics" : "கணிதம்"}</td>
                  <td>28</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>{language == "english" ? "Science" : "அறிவியல்"}</td>
                  <td>31</td>
                  <td>16</td>
                </tr>
              </tbody>
            </table> */}
            <div className="d-flex justify-content-between">
              <div>
                <CircularProgressbar
                  value={64}
                  text={"Assigned 23"}
                  className="mt-3"
                />
              </div>
              <div style={{marginTop:'25%'}}>
                <div className="d-flex">
                  <div style={{backgroundColor:'#263468',width:'12px',height:'12px',borderRadius:'100%',marginTop:'8px'}}></div>
                  <p className="mb-0 ms-2" style={{fontSize:'16px',fontWeight:'400'}}>Completed</p>
                </div>
                <div className="d-flex">
                  <div style={{backgroundColor:'lightgray',width:'12px',height:'12px',borderRadius:'100%',marginTop:'8px'}}></div>
                  <p className="mb-0 ms-2" style={{fontSize:'16px',fontWeight:'400'}}>Progress</p>
                </div>
              </div>
            </div>
            {/* <ReactApexChart options={donutCircle.options} series={donutCircle.series} type="donut" /> */}
          </div>
        </div>

        <div className="bar-graph-container">
          <div className="bar-graph-header">
            <p className="bar-graph-heading">
              {language == "english"
                ? "Performance Score"
                : "செயல்திறன் மதிப்பெண்"}
            </p>

            <select
              className="graph-header-form"
              // aria-label="Default select example"
              value={graph}
              onChange={(e) => setGraph(e.target.value)}
            >
              <option value="science">
                {language == "english" ? "Science" : "அறிவியல்"}
              </option>
              <option value="maths">
                {language == "english" ? "Mathematics" : "கணிதம்"}
              </option>
            </select>
          </div>
          {language == "english" ? (
            <div id="chart" className="bar-graph-chart">
              {graph == "science" ? (
                <ReactApexChart
                  options={demoValue.options}
                  series={demoValue.series}
                  type="bar"
                  height={180}
                />
              ) : (
                <ReactApexChart
                  options={demoValueMath.options}
                  series={demoValueMath.series}
                  type="bar"
                  height={180}
                />
              )}
              {/* <ReactApexChart
                options={demoValue.options}
                series={demoValue.series}
                type="bar"
                height={250}
              /> */}
            </div>
          ) : (
            <div id="chart" className="bar-graph-chart">
              {graph == "maths" ? (
                <ReactApexChart
                  options={demoValue1.options}
                  series={demoValue1.series}
                  type="bar"
                  height={180}
                />
              ) : (
                <ReactApexChart
                  options={demoValueMath1.options}
                  series={demoValueMath1.series}
                  type="bar"
                  height={180}
                />
              )}
              {/* <ReactApexChart
                options={demoValue1.options}
                series={demoValue1.series}
                type="bar"
                height={250}
              /> */}
            </div>
          )}
        </div>
        {/* );
        })} */}
      </div>
      {/* <div style={{ marginRight: "1%" }}>
        <Footer />
      </div> */}
    </div>
  );
}

export default Dashboard;
