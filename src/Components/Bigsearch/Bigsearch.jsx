import React from "react";
import { FaFile, FaExclamation, FaTimes } from "react-icons/fa";
import './Bigsearch.css'

export const Bigsearch = () => {
  return (
    <div className="bigsearch">
      <div className="bigsearch-1">
        <FaFile />
        <span>Report_File.pdf</span>
        <input type="checkbox" />
        <span>Force OCR</span>
        <FaExclamation />
        <FaTimes />
      </div>
      <div className="bigsearch-2">
        <FaFile />
        <span>Articles.docs</span>
        <input type="checkbox" />
        <span>Force OCR</span>
        <FaExclamation />
        <FaTimes />
      </div>
    </div>
  );
};
