import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/signin.scss";
import logo from "../../../assets/logo.svg";
import Slideshow from "../../views/components/Slider/SliderShow";
import { SliderData } from "../../views/components/Slider/SliderData";
// import { SelectAccount } from "../../../services/selectaccount";
import { useFormik } from "formik";
import selectServices from "../../../services/selectaccount";
import * as yup from "yup";
import Language from "../../../assets/images/language.svg";

import { Dropdown } from "react-bootstrap";
import { toast } from "react-toastify";

function Signin() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const language = localStorage.getItem("lang") || "english";

  const [selectId, setSelectId] = useState("");

  const formik = useFormik({
    initialValues: {
      list: "",
    },
    validationSchema: yup.object({
      list: yup.string().required(""),
    }),
    onSubmit: (values) => {
      slideChange(values?.list);
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

  const slideChange = () => {
    return new Promise((resolve, reject) => {
      let data = {
        stu_id: selectId,
      };
      selectServices
        .SelectAccount(data)
        .then((response, result) => {
          if (result) {
            resolve(result.id);
          }
          navigate("/account_verify", {
            state: { id: response },
          });
          toast.success("user name successfully");
        })
        .catch((err) => {
          if (err) {
            console.log(err, "err");
            reject(false);
          }
        });
    });
  };

  function handleCreatePassword(data) {
    navigate("/verify_account", { state: { id: data } });
  }

  return (
    <div>
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
              <p className="header-center-content">Student</p>
            </div>
            <div className="center-inner-full-container">
              <div className="leftside-container-main">
                <div className="innerside">
                  <form onSubmit={formik.handleSubmit}>
                    <h1 className="signin-header">Sign in</h1>

                    <p className="signin-number">Mobile Number</p>
                    <div className="number-container">
                      <p className="default-content">+91</p>
                      <input
                        className="input-field-number"
                        type="number"
                        value={state.number}
                      />
                    </div>
                    <div>
                      {state.id.map((data) => (
                        <>
                          <div className="d-flex">
                            <input
                              onClick={() => {
                                setSelectId(data._id);
                              }}
                              type="radio"
                              // id="radiocheck"
                              id={data._id}
                              name="list"
                              // value="Kalai"
                              className="mt-4"
                              style={{ cursor: "pointer" }}
                              value={formik.values.list}
                              onChange={formik.handleChange}
                            />
                            {}
                            <label
                              htmlFor={data._id}
                              className="signin-id mt-4"
                              style={{ cursor: "pointer" }}
                            >
                              {data.name.charAt(0).toUpperCase() +
                                data.name.slice(1)}{" "}
                              ( {data.std}th std )
                            </label>

                            <br />
                            {data.verify === true ? (
                              <></>
                            ) : (
                              <>
                                {" "}
                                <div className="create-password ms-3">
                                  <p
                                    className="para-create"
                                    onClick={() => handleCreatePassword(data)}
                                  >
                                    Create Password
                                  </p>
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      ))}
                      {formik.errors.list ? (
                        <div className="text-danger">{formik.errors.list}</div>
                      ) : null}
                    </div>
                    {/* <p className="err-msg">{error}</p> */}
                    <button
                      className="signin-btn"
                      type="submit"
                      onClick={slideChange}
                    >
                      Next
                    </button>
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
    </div>
  );
}

export default Signin;
