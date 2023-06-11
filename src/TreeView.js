import React, { useEffect, useState } from "react";
//import "./TreeView.css";

const mockData = [
  {
    type: "folder",
    id: 1,
    name: "Applications",
    children: [
      { id: 5, name: "Calendar", type: "file" },
      { id: 3, name: "Chrome", type: "file" },
      { id: 4, name: "Webstorm", type: "file" }
    ]
  },
  {
    type: "folder",
    id: 2,
    name: "Documents",
    children: [
      {
        id: 6,
        name: "MUI",
        type: "folder",
        children: [
          {
            id: 7,
            name: "src",
            type: "folder",
            children: [
              { id: 8, name: "index.js", type: "file" },
              { id: 9, name: "tree-view.js", type: "file" }
            ]
          }
        ]
      }
    ]
  }
];

export default function TreeView() {
  const [data, setData] = useState([]);
  const [expendOrCollapse, setExpendOrCollapse] = useState("collapse");
  useEffect(() => {
    setData(mockData);
  }, []);

  return (
    <>
      <h4>Tree View</h4>
      <button onClick={() => setExpendOrCollapse("expend")}>Expend all</button>
      <button onClick={() => setExpendOrCollapse("collapse")}>
        Collapse all
      </button>
      {data.map((ele) => (
        <TreeNode key={ele.id} ele={ele} expendOrCollapse={expendOrCollapse} />
      ))}
    </>
  );
}

function TreeNode({ ele, expendOrCollapse }) {
  const [isOpened, setIsOpened] = useState(true);
  const { id, name, children, type } = ele;
  useEffect(() => {
    if (expendOrCollapse === "collapse") {
      setIsOpened(false);
    } else {
      setIsOpened(true);
    }
  }, [expendOrCollapse]);
  const handleExpend = () => {
    if (type === "folder") setIsOpened(!isOpened);
  };
  return (
    <>
      <div onClick={handleExpend}>
        {type === "folder" && <span>{isOpened ? "⬆" : "⬇"}</span>}
        <span>{name}</span>
      </div>
      {children &&
        children.length &&
        isOpened &&
        children.map((ele) => (
          <TreeNode
            key={ele.id}
            ele={ele}
            expendOrCollapse={expendOrCollapse}
          />
        ))}
    </>
  );
}
