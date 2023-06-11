import React, { useState, useEffect } from "react";
import "./Accordion.css";
const mockData = [
  { id: 1, title: "Title 1", content: "Content 1" },
  { id: 2, title: "Title 2", content: "Content 2" },
  { id: 3, title: "Title 3", content: "Content 3" }
];
export default function Accordion() {
  const [data, setData] = useState([]);
  const [currItem, setCurrItem] = useState({});
  useEffect(() => {
    setData(mockData);
    //setCurrItem(mockData[0]);
  }, []);
  const handleClick = (item) => {
    setCurrItem(item);
  };
  return (
    <>
      <h4>Accordion</h4>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <button
              key={item.title}
              className={
                item.id === currItem.id ? "accordion active" : "accordion"
              }
              onClick={() => handleClick(item)}
            >
              {item.title}
            </button>
            <div
              key={item.content}
              className="panel"
              style={{ display: item.id === currItem.id ? "block" : "none" }}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </>
  );
}
