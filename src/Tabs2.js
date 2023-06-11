import React, { useEffect, useState } from "react";
import styled from "styled-components";
const mockData = [
  { id: 1, title: "Item 1", content: "content 1" },
  { id: 2, title: "Item 2", content: "content 2" },
  { id: 3, title: "Item 3", content: "content 3" }
];
export default function Tabs() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState({});
  useEffect(() => {
    setData(mockData);
  }, []);

  const StyledDiv = styled.div`
    background: gray;
    height: 40px;
    width: 300px;
    flex-direction: row;
    justify-content: space-around;
    div {
      height: 100%;
      width: 100%;
    }
  `;
  const StyledH4 = styled.h4`
    background-color: ${(props) => props.bg || "yellow"};
  `;
  const StyledChild = styled(Child)`
    background-color: red;
  `; // HOC
  return (
    <>
      <StyledChild />
      <StyledH4 bg="red">Tabs</StyledH4>
      <StyledDiv className="tabs" style={{ display: "flex" }}>
        {data.map((ele) => (
          <div>
            <div
              className="tabItem"
              key={ele.id}
              onClick={() => {
                if (current.id === ele.id) {
                  setCurrent({});
                } else {
                  setCurrent(ele);
                }
              }}
            >
              {ele.title}
            </div>
            <div style={{ display: current.id === ele.id ? "block" : "none" }}>
              {ele.content}
            </div>
          </div>
        ))}
      </StyledDiv>
    </>
  );
}

function Child(props) {
  return <div className={props.className}>Child</div>;
}
