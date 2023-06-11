import React, { useEffect, useState } from "react";
import "./Tabs.css";
const mockData = [
  { id: 1, title: "Item 1", content: "content 1" },
  { id: 2, title: "Item 2", content: "content 2" },
  { id: 3, title: "Item 3", content: "content 3" }
];
export default function Tabs() {
  const [data, setData] = useState([]);
  const [toggleTab, setToggleTab] = useState({});
  useEffect(() => {
    setData(mockData);
    setToggleTab(mockData[0]);
  }, []);
  const handleClick = (tab) => {
    setToggleTab(tab);
  };
  return (
    <>
      <h4>Tabs</h4>
      <div className="tab">
        {data.map((item) => (
          <>
            <button
              key={item.id}
              className={
                toggleTab.id === item.id ? "tablinks activebtn" : "tablinks"
              }
              onClick={() => handleClick(item)}
            >
              {item.title}
            </button>
          </>
        ))}
      </div>
      <div>{toggleTab.content}</div>
    </>
  );
}
