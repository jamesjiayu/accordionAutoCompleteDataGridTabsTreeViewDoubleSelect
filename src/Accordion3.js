import React, { useState, useEffect } from "react";
import "./Accordion.css";
const mockData = [
  { id: 1, title: "Title 1", content: "Content 1" },
  { id: 2, title: "Title 2", content: "Content 2" },
  { id: 3, title: "Title 3", content: "Content 3" }
];
export default function Accordion() {
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  useEffect(() => {
    setData(mockData);
  }, []);
  const handleClick = (item) => {
    if (item.id === currentItem.id) {
      //{}.id===undefined
      setCurrentItem({});
    } else {
      setCurrentItem(item);
    }
  };
  return (
    <>
      <h4>Accordion3</h4>
      <ul className="container2">
        {data.map((item) => {
          return (
            <li
              className="container2-li"
              key={item.id}
              onClick={() => {
                handleClick(item);
              }}
            >
              <div className="container2-li-title">
                <span>{item.title}</span> <span>v</span>
              </div>
              <div
                style={{
                  display: currentItem.id === item.id ? "block" : "none"
                }}
              >
                {item.content}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
