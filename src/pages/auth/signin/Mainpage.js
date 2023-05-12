import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/mainpage.scss";
import logo from "../../../assets/logo.svg";
import Slideshow from "../../views/components/Slider/SliderShow";
import { SliderData } from "../../views/components/Slider/SliderData";
// import { CheckAccount } from "../../../services/checkaccount";
import { useFormik } from "formik";
import * as yup from "yup";
import Language from "../../../assets/images/language.svg";

import { Dropdown } from "react-bootstrap";
import checkServices from "../../../services/checkaccount";
import loginverifyServices from "../../../services/login";
import { toast } from "react-toastify";

import { useEffect } from "react";
function Mainpage() {
  const navigate = useNavigate();
  const language = localStorage.getItem("lang") || "english";

  // const [setError] = useState("");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    loginverifyServices.useAuth().then((result) => {
      if (result) {
        setAuth(result);
      }
    });
  }, [auth]);

  const formik = useFormik({
    initialValues: {
      number: "",
    },
    validationSchema: yup.object().shape({
      number: yup.number().required("Mobile Number Is Required"),
    }),
    // onSubmit,
    onSubmit: (values) => {
      slideChange(values?.number);
      // alert(JSON.stringify(values, null, 2));
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
      let datas = {
        phone: values,
      };
      checkServices
        .checkaccount(datas)
        .then((response, result) => {
          if (result) {
            resolve(result.id);
          }
          if (response) {
            toast.success("Login is successfully");

            setTimeout(() => {
              navigate("/sign_in", {
                state: { id: response, number: datas?.phone },
              });
            }, 1000);
          }
        })
        .catch(() => {
          // if (err?.response?.data?.message == "not verify") {
          reject(false);
          //   navigate("/verification_page", {
          //     state: { number: datas?.phone },
          //   });
          // } else if (err?.response?.data?.message == "account not found") {
          //   setError("Account not found");
          // } else {
          //   setError("This mobile number is unverified.Please verified");
          //   // navigate("/verification_page", {
          //   //   state: { number: datas?.phone },
          //   // });
          // }
          toast.error("Incorrect Mobilenumber");
        });
    });
  };

  // if (!auth) {
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
            <p className="header-center-content">Student</p>
          </div>
          <div className="center-inner-full-container">
            <div className="leftside-container-main">
              <div className="innerside">
                <form onSubmit={formik.handleSubmit} autoComplete="off">
                  <h1 className="signin-header">Sign in</h1>
                  {process.env.BackendUrl}

                  <p className="signin-number">Mobile Number</p>

                  <div className="number-container">
                    <p className="default-content">+91</p>
                    <input
                      // onChange={(e) => setNumber(e.target.value)}
                      className="input-field-number "
                      type="number"
                      placeholder="Mobile number"
                      name="number"
                      // minLength={9}
                      // maxLength="10"
                      value={formik.values.number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.number && formik.errors.number ? (
                    <div className="text-danger">{formik.errors.number}</div>
                  ) : null}
                  {/* <p className="err-msg">{error}</p> */}

                  <button
                    className="signin-btn"
                    // onClick={slideChange}
                    type="submit"
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
  );
}
//  else if (auth) {
//   return <Navigate to="/dashboard" />;
// }
// }

export default Mainpage;
