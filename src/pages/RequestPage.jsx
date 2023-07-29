import React from "react";

function RequestPage() {
  return (
    <div className="mainPage">
      <div className="ReqPage">
        <div className="requestLeft">
          <h2>Request a quote</h2>
          <h5>
            Fill the form below and we will reply with a custom quote for your
            needs.{" "}
          </h5>
        </div>
        <div className="Form">
          <p>Describe your project</p>
          <textarea
            id="request"
            cols="60"
            rows="4"
            placeholder="Write all the details here..."
          ></textarea>
        </div>
        <button>
          <div className="shape_section1">
            <img src="./images/Shapebutton.png" alt="shape" />
          </div>
          Submit
        </button>
      </div>

      <div className="requestRight">
        <img src="./images/technology.jpg" alt="" />
      </div>
    </div>
  );
}

export default RequestPage;
