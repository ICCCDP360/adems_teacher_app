import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";

import "../styles/accountVerification.scss";
import Slideshow from "../../views/components/Slider/SliderShow";
import { SliderData } from "../../views/components/Slider/SliderData";
// import { Signinpage } from "../../../services/signin";
import { useFormik } from "formik";
import * as yup from "yup";
import Language from "../../../assets/images/language.svg";
import signinServices from "../../../services/signin";
import { Dropdown } from "react-bootstrap";
import { toast } from "react-toastify";

function AccountVerification() {
  const navigate = useNavigate();
  // const [error, setError] = useState("");
  // const { state } = useLocation();
  const [passwordType, setPasswordType] = useState("password");

  const language = localStorage.getItem("lang") || "english";

  const formik = useFormik({
    initialValues: {
      password: "",
    },

    validationSchema: yup.object().shape({
      password: yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      slideChange(values?.password);
    },
  });

  const englishLang = () => {
    localStorage.setItem("lang", "english");
    window.location.reload();
  };

  const tamilLang = () => {
    localStorage.setItem("lang", "tamil");
    window.location.reload();
  };

  const slideChange = (values) => {
    return new Promise((resolve, reject) => {
      let trigger = {
        stu_id: '645e30675eb7496691de0f78',
        passcode: values,
      };

      signinServices
        .Signinpage(trigger)
        .then((res) => {
          localStorage.setItem("accessToken", JSON.stringify(res.token));
          localStorage.setItem("userDetails", JSON.stringify(res.StudentFound));
          localStorage.setItem(
            "schoolDetails",
            JSON.stringify(res.schoolFound)
          );
          localStorage.setItem("otherAccDetails", JSON.stringify(res.otherACC));
          localStorage.setItem(
            "parentDetails",
            JSON.stringify(res.parentFound)
          );
          localStorage.setItem(
            "userid",
            JSON.stringify(res?.StudentFound?._id)
          );
          toast.success("login successfully");
          navigate("/dashboard");
        })
        .catch((err) => {
          toast.error("wrong password");
          if (err) {
            console.log(err);
            reject(false);
          }
        });
    });
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  // const forgotData = () => {
  //   navigate("/forgot_password", {
  //     state: { name: state.id.name, number: state.id.phone },
  //   });
  // };
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
      <div className="center-container-main">
        <div className="whole-color-border">
          <div className="center-heading">
            <p className="header-center-content">Teacher</p>
          </div>
          <div className="center-inner-full-container">
            <div className="leftside-container-main">
              <div className="innerside">
                <form onSubmit={formik.handleSubmit} autoComplete="off">
                  <h1 className="signin-header">Sign in</h1>

                  <p className="signin-username">Username</p>
                  <div className="user-container">
                    <input
                      className="input-field-user"
                      type="text"
                      // value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <p className="signin-username">Password</p>
                  <div className="user-container">
                    <input
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      className="input-field-user"
                      type={passwordType}
                      placeholder="Password"
                    />
                    {/* {eye ? ( */}
                    <div className="password-eye-icon">
                      {passwordType === "password" ? (
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXu5FHSNEqOqzqyArTuuJTUh8oAkB1Gw6pQCFIt-g&s"
                          // style={{
                          //   width: "6%",
                          //   marginLeft: "44%",
                          //   marginTop: "-1%",
                          // }}
                          className="eye-close"
                          onClick={togglePassword}
                        />
                      ) : (
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/159/159078.png"
                          // style={{
                          //   width: "6%",
                          //   marginLeft: "44%",
                          //   marginTop: "-1%",
                          // }}
                          className="eye-close"
                          onClick={togglePassword}
                        />
                      )}
                    </div>

                    {/* )} */}
                  </div>
                  {formik.errors.password ? (
                    <div className="text-danger">{formik.errors.password}</div>
                  ) : null}

                  {/* <p className="err-msg">{error}</p> */}
                  <p
                    className="d-flex justify-content-end"
                    style={{ color: "#0395C4", cursor: "pointer" }}
                    // onClick={forgotData}
                  >
                    Forgot Password ?
                  </p>
                  <button className="signin-btn">Next</button>
                </form>
              </div>
            </div>
            <div className="center-line"></div>
            <div className="rightside-container-main">
              <Slideshow slides={SliderData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountVerification;
