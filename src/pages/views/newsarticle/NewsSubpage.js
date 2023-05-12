import React from "react";
import NewsHeader from "./NewsHeader";
import rect from "../../../assets/Rectangle 602.png";
import rect1 from "../../../assets/Rectangle 603.svg";
function NewsSubpage() {
  return (
    <div className="main-container-profilemain">
      <NewsHeader />
      <hr className="hr-main-sub-container" />
      <div
        className="mt-2 ms-3"
        style={{
          width: "97.5%",
          borderRadius: "10px",
          padding: "2%",
          overflow: "hidden",
          background: "white",
        }}
      >
        <div>
          <p style={{ fontWeight: "400" }}>News & Articles Blog Title 1</p>{" "}
        </div>
        <div>
          <h5>Blog Title 1</h5>
          <div className="d-flex" style={{ width: "100%" }}>
            <div className="mt-2" style={{ width: "60%" }}>
              <img src={rect} />
              <p className="mt-3" style={{ width: "100%" }}>
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus. Curabitur
                tempor quis eros tempus lacinia. Nam bibendum pellentesque quam
                a convallis. Sed ut vulputate nisi. Integer in felis sed leo
                vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat
                ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus
                lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit
                amet magna non ligula vestibulum eleifend. Nulla varius volutpat
                turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed
                nec ante dictum sem condimentum ullamcorper quis venenatis nisi.
                Proin vitae facilisis nisi, ac posuere leo.
              </p>
            </div>
            <div style={{ width: "30%", marginLeft: "7%" }}>
              <h6>Related Articles</h6>
              <div className="d-flex">
                <div>
                  <img src={rect1} style={{ width: "70%", height: "100px" }} />
                </div>
                <div className="mt-3">
                  <h6>Edu Related Blog 1</h6>
                  <p>May 2023</p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <img src={rect1} style={{ width: "70%", height: "100px" }} />
                </div>
                <div className="mt-3">
                  <h6>Edu Related Blog 2</h6>
                  <p>May 2023</p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <img src={rect1} style={{ width: "70%", height: "100px" }} />
                </div>
                <div className="mt-3">
                  <h6>Edu Related Blog 2</h6>
                  <p>May 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* <img src={im1} style={{ width: "100%", height: "200px" }} /> */}
        </div>
      </div>
    </div>
  );
}

export default NewsSubpage;
