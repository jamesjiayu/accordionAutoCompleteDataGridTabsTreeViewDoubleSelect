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
  // const handleClick = (item) => {
  //   if (item.id === currentItem.id) {
  //     //{}.id===undefined
  //     setCurrentItem({});
  //   } else {
  //     setCurrentItem(item);
  //   }
  // };
  return (
    <>
      <h4>Accordion3</h4>
      <div
        className="container2"
        style={{
          //  border: "1px black solid",
          borderWidth: "1px 1px 0 0",
          borderStyle: "solid",
          borderColor: "black"
        }}
      >
        {data.map((item) => {
          return (
            <AccordionItem
              item={item}
              isCurrent={item.id === currentItem.id}
              setCurrent={setCurrentItem}
            />
          );
        })}
      </div>
    </>
  );
}

const AccordionItem = ({ item, isCurrent, setCurrent }) => {
  // const handleClick = () => {
  //   if (isCurrent) {
  //     setCurrent({});
  //   } else {
  //     setCurrent(item);
  //   }
  // };
  return (
    <>
      <div
        className="container2-li-title"
        onClick={() => {
          isCurrent ? setCurrent({}) : setCurrent(item);
        }}
        style={{
          justifyContent: "flex-start",

          borderWidth: " 0 0 1px 1px",
          borderStyle: "solid",
          borderColor: "black"
        }}
      >
        {isCurrent ? "⬇" : "▶"} <span>{item.title}</span>
      </div>
      <div
        style={{
          display: isCurrent ? "block" : "none"
        }}
      >
        {item.content}
      </div>
    </>
  );
};
