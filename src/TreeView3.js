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
  const [tree, setTree] = useState([]);
  useEffect(() => {
    setTree(mockData);
  }, []);

  return (
    <>
      <h3>TreeView</h3>
      {tree.map((item, index) => {
        return <TreeNode item={item} key={item.id} />;
      })}
    </>
  );
}
const TreeNode = ({ item }) => {
  const [isShow, setIsShow] = useState(false);
  const { type, id, name, children } = item;
  const handleClick = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <>
      <div onClick={handleClick} style={{ display: isShow ? "block" : "none" }}>
        {type === "folder" ? ">  " + name : name}
      </div>
      {children &&
        children.length &&
        children.map((item) => {
          return <TreeNode key={item.id} item={item} />;
        })}
    </>
  );
};
