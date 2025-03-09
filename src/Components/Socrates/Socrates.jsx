import "./Socrates.css";
import { FcFactory } from "react-icons/fc";
import { CiSearch } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export const Socrates = () => {
  return (
    <div className="socrates">
      <div className="soc-top">
        <div className="soc-top-left">
          <FcFactory />
          <span>socrates</span>
        </div>
        <div className="soc-top-right">
          <CiSearch size={25}/>
          <FaArrowLeft size={25}/>
        </div>
      </div>
      <div className="soc-bottom">
        <button className="soc-bottom-button-1">
            <FaPlus/>
            <span>Add folder</span>
        </button>
        <button className="soc-bottom-button-2">
            <FaPlus/>
            <span>Create chat</span>
        </button>
      </div>
    </div>
  );
};
