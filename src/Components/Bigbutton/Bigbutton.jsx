import React, { useState } from "react";
import { FaExclamation } from "react-icons/fa";
import './Bigbutton.css';

export const Bigbutton = () => {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Update tooltip position based on cursor
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="bigbutton">
      <button className="bigbutton1">Start</button>
      <span>or</span>
      <button className="bigbutton2">Start with Deep Dive</button>
      <div
        className="tooltip-container"
        onMouseMove={handleMouseMove}
      >
        <FaExclamation className="FaExclamation" />
        <div
          className="tooltip-text"
          style={{
            left: `${tooltipPosition.x + 10}px`, /* 10px offset from cursor */
            top: `${tooltipPosition.y + 10}px`, /* 10px offset from cursor */
          }}
        >
          Deep dive process documents section by section for "unlimited"
          context, enabling complete answers. Run once per chat to unlock
          table AI and prompts loops.
        </div>
      </div>
    </div>
  );
};