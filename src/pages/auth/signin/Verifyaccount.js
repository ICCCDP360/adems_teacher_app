import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/verifyaccount.scss";
import profile from "../../../assets/images/Ellipse 160.svg";
import logo from "../../../assets/logo.svg";
import { VerifyData } from "../../../services/verifyacc";
import Language from "../../../assets/images/language.svg";

import { Dropdown } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
function Verifyaccount() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [accountSlide, setAccountSlide] = useState(true);
  // const [passcode, setPasscode] = useState("");
  // const [confirmPasscode, setConfirmPasscode] = useState("");
  const [availableState, setAvailableState] = useState([]);
  const language = localStorage.getItem("lang") || "english";

  const formik = useFormik({
    initialValues: {
      passcode: "",
      confirm_passcode: "",
      student_id: "",
    },
    validationSchema: Yup.object({
      passcode: Yup.string().required("Password is required"),
      confirm_passcode: Yup.string().required("Confirm Password is required"),
      student_id: Yup.string().required("Student id is required"),
    }),
    onSubmit: (values) => {
      slideChange(values?.passcode);
      slideChange(values?.confirm_passcode);
    },
  });

  function slideChange(id, values) {
    // let datas = {
    //   passcode: passcode,
    //   confirm_passcode: confirmPasscode,
    //   student_id: id,
    // };
    let datas = {
      passcode: values,
      confirm_passcode: values,
      student_id: id,
    };
    // setConfirmPasscode("");
    // setPasscode("");
    if (state["overall"]) {
      if (availableState && availableState.length > 0) {
        var dataState = availableState.filter((state_data) => {
          return state_data["_id"] !== state["id"]["_id"];
        });
        setAvailableState(dataState);

        if (dataState && dataState.length > 0) {
          let ste = {
            id: dataState[0],
            overall: dataState,
            index: 0,
          };

          VerifyData(datas).then(() => {
            navigate("/verify_account", {
              state: ste,
            });
          });
        } else {
          VerifyData(datas).then(() => {
            navigate("/dashboard");
          });
        }
      }
    }
  }

  const englishLang = () => {
    localStorage.setItem("lang", "english");
    window.location.reload();
  };

  const tamilLang = () => {
    localStorage.setItem("lang", "tamil");
    window.location.reload();
  };
  useEffect(() => {
    setAvailableState(state["overall"]);
  }, []);

  return (
    <div className="signIn-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "98%",
        }}
      >
        <div>
          <img src={logo} className="mt-3 ms-4" />
        </div>
        <div>
          <div style={{ marginTop: "30%" }}>
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "transparent",
                  border: "transparent",
                }}
              >
                <img src={Language} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={englishLang}>
                  {language == "english" ? "English" : "ஆங்கிலம்"}
                </Dropdown.Item>
                <Dropdown.Item onClick={tamilLang}>
                  {language == "english" ? "Tamil" : "தமிழ்"}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="center-container-1">
          {accountSlide === true ? (
            <div className="verify-container-2">
              <h4 className="ms-3">Student Details</h4>
              <div className="d-flex justify-content-center mt-4">
                <img src={profile} />
              </div>

              <div className=" ms-3 mt-2">
                <p className="user">Name</p>
                <input
                  className="student-input-box-1"
                  value={state?.overall[state.index]?.name}
                />
              </div>
              <div className=" ms-3 mt-1 ">
                <p className="user">Userid</p>
                <input
                  className="student-input-box-1"
                  value={state?.overall[state.index]?._id.slice(0, 5)}
                />
              </div>

              <div className=" ms-3 mt-1 ">
                <div className="d-flex">
                  <div className="user-id">
                    <p className="user">Standard</p>
                    <input
                      className="student-input-dropbox-1"
                      value={state.id.std}
                    />
                  </div>
                  <div className="user-id ms-3">
                    <p className="user">Section</p>

                    <input
                      className="student-input-dropbox-1"
                      value={state.id.sec}
                    />
                  </div>
                </div>
              </div>
              <div className=" ms-3 mt-1 ">
                <p className="user">Create Password</p>
                <input
                  // value={passcode}
                  value={formik.values.passcode}
                  name="passcode"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="student-input-box-2"
                  placeholder="Password"
                />
              </div>
              {formik.touched.passcode && formik.errors.passcode ? (
                <div className="text-danger">{formik.errors.passcode}</div>
              ) : null}
              <div className=" ms-3 mt-1 ">
                <p className="user">Confirm Password</p>
                <input
                  // value={confirmPasscode}
                  className="student-input-box-2"
                  placeholder="Password"
                  name="confirm_passcode"
                  value={formik.values.confirm_passcode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // onChange={(event) => setConfirmPasscode(event.target.value)}
                />
              </div>
              {formik.touched.confirm_passcode &&
              formik.errors.confirm_passcode ? (
                <div className="text-danger">
                  {formik.errors.confirm_passcode}
                </div>
              ) : null}
              <button
                className="btn-verify ms-3"
                onClick={() => slideChange(state?.overall[state.index]._id)}
                type="submit"
              >
                Verify & Next
              </button>
            </div>
          ) : null}
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "1%" }}
        >
          <div
            onClick={() => setAccountSlide(true)}
            className={accountSlide == true ? "first-dot" : "first-dot-null"}
          ></div>
          <div
            onClick={() => setAccountSlide(false)}
            className={accountSlide == false ? "first-dot" : "second-dot-null"}
          ></div>
        </div>
      </form>
    </div>
  );
}

export default Verifyaccount;
