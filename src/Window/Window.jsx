import React from "react";
import "./Window.css"; // Add styles here if needed

const Window = ({ onClose, content }) => {
  return (
    <div className="window-overlay">
      <div className="window-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Window;