import React from "react";
// import "./styles/TestSpace.scss";
import article from "../../../assets/Group 109.png";
// import { Form } from "react-bootstrap";
// import child from "../../../assets/child.svg"
import im1 from "../../../assets/Rectangle 602 (1).svg";
import im2 from "../../../assets/Rectangle 602 (2).svg";
import im3 from "../../../assets/Rectangle 602 (3).svg";
import im4 from "../../../assets/Rectangle 602 (4).svg";
import im5 from "../../../assets/Rectangle 602 (5).svg";
import im6 from "../../../assets/Rectangle 602.svg";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@material-ui/icons";
import "./styles/newarticle.scss"


function NewsArticleContent() {
  const navigate= useNavigate()
  // const language = localStorage.getItem("lang") || "english";'
  const content = () =>{
    navigate("/NewsSubpage")
  }

  return (
    <div>
      <img className="ms-2" src={article} style={{ width: "99%",height:"200px" }} />
     
      <div
        className="ms-3 mt-3"
        style={{
          width: "97.5%",
          borderRadius: "10px",
          padding: "2%",
          overflow: "hidden",
          background: "white",
        }}
      >
        <div className="d-flex justify-content-between">
          <h6>Featured Articles/News/Blogs</h6>
         <div className="rightsearch">
              <div className="searchs">
                <SearchOutlined className="search-icon" />
                <input
                  className="inputs"
                  placeholder="Search for topics"
                />
              </div>
            </div>
        </div>

        <div style={{ display: "flex", width: "100%", marginTop: "8%" }}>
          <div style={{ width: "30%",cursor:"pointer" }} onClick={content}>
            <img src={im1} />
            <h6 className="mt-3">Blog Title 1</h6>
            <p style={{ width: "90%" }}>
              Qorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p style={{ fontWeight: "bold" }}>May 2023</p>
          </div>
          <div style={{ width: "30%", marginLeft: "5%",cursor:"pointer" }} onClick={content}>
            <img src={im2} />
            <h6 className="mt-3">Blog Title 2</h6>
            <p style={{ width: "90%" }}>
              Qorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p style={{ fontWeight: "bold" }}>May 2023</p>
          </div>
          <div style={{ width: "30%", marginLeft: "5%" ,cursor:"pointer"}} onClick={content}>
            <img src={im3} />
            <h6 className="mt-3">Blog Title 3</h6>
            <p style={{ width: "90%" }}>
              Qorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p style={{ fontWeight: "bold" }}>May 2023</p>
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", marginTop: "8%" }}>
          <div style={{ width: "30%" ,cursor:"pointer"}} onClick={content}>
            <img src={im4} />
            <h6 className="mt-3">Blog Title 4</h6>
            <p style={{ width: "90%" }}>
              Qorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p style={{ fontWeight: "bold" }}>May 2023</p>
          </div>
          <div style={{ width: "30%", marginLeft: "5%",cursor:"pointer" }} onClick={content}>
            <img src={im5} />
            <h6 className="mt-3">Blog Title 5</h6>
            <p style={{ width: "90%"}}>
              Qorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p style={{ fontWeight: "bold" }}>May 2023</p>
          </div>
          <div style={{ width: "30%", marginLeft: "5%" ,cursor:"pointer"}} onClick={content}>
            <img src={im6} />
            <h6 className="mt-3">Blog Title 6</h6>
            <p style={{ width: "90%" }}>
              Qorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p style={{ fontWeight: "bold" }}>May 2023</p>
          </div>
        </div>
      </div>
      <div style={{marginTop:"10%"}}>

      </div>
    </div>
  );
}

export default NewsArticleContent;
