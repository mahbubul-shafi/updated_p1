import React from "react";
import "./Bigtext.css";
import cloud from "../../assets/images/cloud.svg"

export const Bigtext = () => {
  return (
    <div className="bigtext">
      <div className="bigtext-heading">
        <h1>Add Files to </h1>
        <div className="cloud-icon">
          <img src={cloud} alt="" />
        </div>
        <h1>Cloud Chat</h1>
      </div>
      <p>
        Your files will not be stored on our servers and no AI models will be
        trained.
      </p>
      <p>Supported File Types: .docx, .pdf, .equb and many textfile types</p>
    </div>
  );
};
