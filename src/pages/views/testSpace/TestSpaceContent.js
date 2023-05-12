import React, { useState } from "react";
import "./styles/TestSpace.scss";

function TestSpaceContent() {
  const [step, setStep] = useState(0);
  const language = localStorage.getItem("lang") || "english";

  return (
    <div>
      <div className="full-subcontainer">
        <div className="task-topheader-container">
          <div className="inside-task-tabs">
            <div className="lefttabs">
              <p
                onClick={() => setStep(0)}
                className={step === 0 ? "selectDailyTask" : "dailyTask"}
              >
                {language == "english" ? "Science" : "அறிவியல்"}
              </p>
              <p
                onClick={() => setStep(1)}
                className={step === 1 ? "selectAllTask" : "dailyTask"}
              >
                {language == "english" ? "Mathematics" : "கணிதம்"}
              </p>
            </div>
          </div>
        </div>
      </div>
      {step === 0 ? (
        <div className="test-space-full-container">
          <div className="testspace-content">
            <div>
              <p className="left-test">
                Practice Name:{" "}
                <span className="right-test">Digestive System1</span>
              </p>
              <p className="left-test">
                Total Number of Questions:{" "}
                <span className="right-test">20</span>
              </p>
              <p className="left-test">
                Total Time: <span className="right-test">45 mins</span>
              </p>
            </div>
            <div>
              <button className="test-btn mt-4 me-4">Take Test</button>
            </div>
          </div>
        </div>
      ) : null}
      {step === 1 ? (
        <div>
          <div className="myTask-full-border"></div>
        </div>
      ) : null}
    </div>
  );
}

export default TestSpaceContent;
