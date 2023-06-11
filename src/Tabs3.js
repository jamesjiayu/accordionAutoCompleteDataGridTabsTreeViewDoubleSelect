import React, { useState } from "react";
import "./Tabs.css";
export default function Tabs() {
  const [toggleTab, setToggleTab] = useState(1);
  const handleClick = (flag) => {
    setToggleTab(flag);
  };
  return (
    <>
      <h4>Tabs</h4>
      <div className="tab">
        <button
          className={toggleTab === 1 ? "tablinks activebtn" : "tablinks"}
          onClick={() => handleClick(1)}
        >
          London
        </button>
        <button
          className={toggleTab === 2 ? "tablinks activebtn" : "tablinks"}
          onClick={() => handleClick(2)}
        >
          Paris
        </button>
        <button
          className={toggleTab === 3 ? "tablinks activebtn" : "tablinks"}
          onClick={() => handleClick(3)}
        >
          Tokyo
        </button>
      </div>

      <div
        id="London"
        className={toggleTab === 1 ? "tabcontent activecontent" : "tabcontent"}
      >
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div
        id="Paris"
        className={toggleTab === 2 ? "tabcontent activecontent" : "tabcontent"}
      >
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div
        id="Tokyo"
        className={toggleTab === 3 ? "tabcontent activecontent" : "tabcontent"}
      >
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </>
  );
}
