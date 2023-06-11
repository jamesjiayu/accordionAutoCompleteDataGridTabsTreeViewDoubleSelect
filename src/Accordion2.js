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
    // console.log(id);
    setCurrentItem(item);
  };
  return (
    <React.Fragment>
      <h3>Accordion</h3>
      <ul className="container2">
        {data.map((item, index) => {
          return (
            <li
              className="container2-li"
              key={item.id}
              onClick={() => {
                handleClick(item);
              }}
            >
              <div key={item.title}>{item.title}</div>
              <div
                key={item.content}
                style={{
                  display: item.id === currentItem.id ? "block" : "none"
                }}
              >
                {item.content}
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

// <div className={item.id ? "content " : "content-show"}>
//                 {item.content}
//               </div>

// {isShow && <div>{item.content}</div>}
