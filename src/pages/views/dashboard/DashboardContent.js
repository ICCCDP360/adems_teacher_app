import React from "react";
import Up from "../../../assets/images/principalup.svg";
import "react-circular-progressbar/dist/styles.css";
// import "react-calendar/dist/Calendar.css";
import "./styles/Dashboard.scss";
import ReactApexChart from "react-apexcharts";
import { ProgressBar } from "react-bootstrap";

function DashboardContent() {
  const demoValue = {
    series: [
      {
        data: [82, 65, 45, 100],
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
      colors: ["#263468"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [["100-80"], ["79-60"], ["59-35"], [">35"]],
        labels: {
          style: {
            // fontSize: "15px",
          },
        },
      },
    },
  };

  const perform = [
    {
      num: 1,
      name: "Balakarthikeyan",
      last: "6.30 pm",
      average: 99.3,
      time: 3.5,
    },
    {
      num: 2,
      name: "Kalai",
      last: "5.25 pm",
      average: 98.8,
      time: 3.7,
    },
    {
      num: 3,
      name: "Vimal",
      last: "6.20 am",
      average: 98.2,
      time: 3.1,
    },
    {
      num: 4,
      name: "Naveen",
      last: "6.32 pm",
      average: 99.3,
      time: 3.5,
    },
    {
      num: 5,
      name: "Hari Haran",
      last: "9.33 pm",
      average: 94.3,
      time: 3.3,
    },
    {
      num: 6,
      name: "Prasanth",
      last: "5.25 pm",
      average: 94.1,
      time: 3.3,
    },
    {
      num: 7,
      name: "Kousi Krishnan",
      last: "10.00 pm",
      average: 93.6,
      time: 4.2,
    },
    {
      num: 8,
      name: "Varun",
      last: "4.30 am",
      average: 90,
      time: 3.5,
    },
    {
      num: 9,
      name: "Kousi Krishnan",
      last: "10.00 pm",
      average: 93.6,
      time: 4.2,
    },
    {
      num: 10,
      name: "Varun",
      last: "4.30 am",
      average: 90,
      time: 3.5,
    },
  ];

  return (
    <div>
      <div className="teach-main-container">
        <div className="teach-1st-row d-flex justify-content-between">
          <div className="assigned-box">
            <p className="mb-0 head-text">
              Number of
              <br /> Students Assigned
            </p>
            <p className="mb-0 subhead-text">123</p>
          </div>
          <div className="assigned-box">
            <p className="mb-0 head-text">
              Total
              <br /> Time Spent (in hours)
            </p>
            <p className="mb-0 subhead-text">123</p>
          </div>
          <div className="assigned1-box">
            <div className="textside">
              <p className="mb-0 head-text">
                Number of
                <br /> Class Assigned
              </p>
              <p className="mb-0 subhead-text">123</p>
            </div>
            <div className="left-border"></div>
            <div>
              <p className="classtext">Classes</p>
              <p className="mb-0 subclassstext">7 - B</p>
              <p className="mb-0 subclassstext">8 - C</p>
            </div>
          </div>
          <div className="assigned1-box">
            <div className="textside">
              <p className="mb-0 head-text">
                Number of
                <br />
                Subjects Assigned
              </p>
              <p className="mb-0 subhead-text">123</p>
            </div>
            <div className="left-border"></div>
            <div>
              <p className="classtext">Classes</p>
              <p className="mb-0 subclassstext">Maths</p>
            </div>
          </div>
        </div>
        <div className="mt-4 teach-2nd-row">
          <select className="w-25 p-2">
            <option>7 - B - Mathematics</option>
            <option>8 - B - Mathematics</option>
          </select>
          <p className="mb-0 mt-2 no-of-std">Number of Students: 61</p>
        </div>
        <div className="mt-4 teach-3nd-row">
          <div className="subtopicsbox">
            <p className="mb-0 headtext1">Time Spent</p>
            <p className="mb-0 subheadtext1">(in hours)</p>
            <p className="counttext mb-0">55 </p>
          </div>
          <div className="subtopicsbox">
            <p className="mb-0 headtext1">Assigned Videos</p>
            <p className="counttext">55 </p>
          </div>
          <div className="subtopicsbox">
            <p className="mb-0 headtext1">Assigned PDF</p>
            <p className="counttext">55 </p>
          </div>
          <div className="subtopicsbox">
            <p className="mb-0 headtext1">Assigned Practice</p>
            <p className="counttext">55 </p>
          </div>
          <div className="subtopicsbox">
            <p className="mb-0 headtext1">Assigned Assessment</p>
            <p className="counttext">55 </p>
          </div>
        </div>
        <div className="mt-4 teach-4th-row">
          <div className="leftside">
            <div className="full-average">
              <div className="average-container">
                <p className="mb-0 average-text">Average Performance</p>
                <p className="average-percent">95%</p>
                <p className="average-upgrade">+2%</p>
                <img src={Up} className="upimg" />
              </div>
              <div>
                <ReactApexChart
                  options={demoValue.options}
                  series={demoValue.series}
                  type="bar"
                  height={250}
                />
              </div>
            </div>
            <div className="mt-3 content-container">
              <div className="heading">
                <p className="mb-0 content-text">Content</p>
                <select className="w-25 p-0 dropdown-chapter">
                  <option>Chapter 1</option>
                  <option>Chapter 2</option>
                  <option>Chapter 3</option>
                  <option>Chapter 4</option>
                </select>
              </div>
              <div className="mt-4 progress-1st">
                <div className="box-progress">
                  <p className="mb-2 progress-text">12 Videos</p>
                  <ProgressBar
                    className="video-progress"
                    now={60}
                    variant="info"
                  />
                </div>
                <div className="box-progress">
                  <p className="mb-2 progress-text">12 PDF</p>
                  <ProgressBar
                    className="video-progress"
                    now={60}
                    variant="info"
                  />
                </div>
              </div>
              <div className="mt-4 progress-1st">
                <div className="box-progress">
                  <p className="mb-2 progress-text">12 Practice</p>
                  <ProgressBar
                    className="video-progress"
                    now={60}
                    variant="info"
                  />
                </div>
                <div className="box-progress">
                  <p className="mb-2 progress-text">12 Assessment</p>
                  <ProgressBar
                    className="video-progress"
                    now={60}
                    variant="info"
                  />
                </div>
              </div>
              <div className="mt-3 completed">
                <div className="d-flex">
                  <div className="selected-dot"></div>
                  <p className="mb-0 complet-text">
                    Number of students completed
                  </p>
                </div>
                <div className="d-flex">
                  <div className="selected-dot1"></div>
                  <p className="mb-0 complet-text">
                    Number of students completed
                  </p>
                </div>
              </div>
              <hr className="line-tag" />
              <div className="d-flex">
                <div>
                  <p className="mb-0 time-taken">Average Time Taken:</p>
                  <p className="mb-0 minutes">per students in minutes</p>
                </div>
                <div>
                  <p className="mb-0 time-count">45</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rightside">
            <div className="header-container">
              <p className="mb-0 top-performer">Top 10 Performers</p>
              <select className="w-25 ms-5">
                <option>7</option>
                <option>8</option>
              </select>
              <select className="w-25">
                <option>January</option>
                <option>Feburary</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div className="mt-3 table-header">
              <div className="d-flex">
                <p className="mb-0 rank">
                  Go Adem
                  <br /> Rank
                </p>
                <p className="mb-0 name">Name</p>
                <p className="mb-0 average">
                  Average
                  <br /> in %
                </p>
                <p className="mb-0 time">
                  Time
                  <br /> in Hrs
                </p>
              </div>
            </div>
            <div className="subtable-container">
              {perform.map((data, index) => {
                const isLast = perform.length - 1 === index;
                return (
                  <>
                    <div className="d-flex pt-2 pb-2">
                      <div className="rank-container">
                        <p className="mb-0 dark-text">{data.num}</p>
                        <div className="d-flex justify-content-center">
                          <p className="mb-0 color-text">2</p>
                          <img src={Up} className="uparrow" />
                        </div>
                      </div>
                      <div className="name-container">
                        <p className="mb-0 dark-text">{data.name}</p>
                        <p className="mb-0 light-text">
                          Last logged in {data.last}
                        </p>
                      </div>
                      <div className="average-container">
                        <p className="mb-0 mt-2 dark-text">{data.average}</p>
                      </div>
                      <div className="average-container">
                        <p className="mb-0 mt-2 dark-text">{data.time}</p>
                      </div>
                    </div>
                    {!isLast && <hr className="mt-2 mb-0 " />}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
