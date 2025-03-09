import React from "react";
import { AiOutlineDrag } from "react-icons/ai";
import { FaGoogleDrive, FaDropbox } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import './Bigcards.css'

export const Bigcards = () => {
  return (
    <div className="bigcards">
      <div className="bigcards-row1">
        <div className="card card-1">
          <AiOutlineDrag size={35}/>
          <p>Drag & drop local files here, or click to select</p>
        </div>
        <div className="card card-2">
          <FiLink size={35}/>
          <div className="card-2-search">
            <p>Enter in a public URL:</p>
            <div className="card-2-search-input">
              <input type="text" placeholder="https://example.com/file.pdf"/>
              <button>Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bigcards-row2">
      <div className="card card-3">
          <FaDropbox size={35}/>
          <p>Add files from dropbox</p>
        </div>
        <div className="card card-4">
          <FaGoogleDrive size={35}/>
          <p>Add files from google drive</p>
        </div>
      </div>
    </div>
  );
};
