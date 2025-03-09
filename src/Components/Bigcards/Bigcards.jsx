import drag_drop from "../../assets/images/drag-drop.svg"
import url from "../../assets/images/url.svg"
import dropbox from "../../assets/images/dropbox.svg"
import google_drive from "../../assets/images/google-drive.svg"
import './Bigcards.css'

export const Bigcards = () => {
  return (
    <div className="bigcards">
      <div className="bigcards-row1">
        <div className="card card-1">
          <img src={drag_drop} alt="" />
          <p>Drag & drop local files here, or click to select</p>
        </div>
        <div className="card card-2">
          <img src={url} alt="" />
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
          <img src={dropbox} alt="" />
          <p>Add files from dropbox</p>
        </div>
        <div className="card card-4">
          <img src={google_drive} alt="" />
          <p>Add files from google drive</p>
        </div>
      </div>
    </div>
  );
};
