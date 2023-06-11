import React, { useState } from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
const data = {
  name: "Root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "Data",
          isFolder: true,
          items: [
            {
              name: "folderData.js",
              isFolder: false,
              items: []
            }
          ]
        },
        {
          name: "index.html",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "components",
          isFolder: true,
          items: [
            {
              name: "Folder.js",
              isFolder: false,
              items: []
            }
          ]
        },
        {
          name: "App.js",
          isFolder: false,
          items: []
        },
        {
          name: "index.js",
          isFolder: false,
          items: []
        },
        {
          name: "styles.css",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      name: "package.json",
      isFolder: false,
      items: []
    }
  ]
};

export default function Tree() {
  return (
    <>
      <TreeView>
        <TreeItem nodeId="1" label={data.name}>
          {data.items.map((item, index) => {
            return <TreeItem nodeId={index + 2} label={item.name} />;
          })}
        </TreeItem>

        <TreeItem nodeId="1" label="Applications">
          <TreeItem nodeId="2" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="5" label="Documents">
          <TreeItem label="SSO" />
          <TreeItem label="MUI"></TreeItem>
        </TreeItem>
      </TreeView>
      <h3>Tree View</h3>
      <TreeNode data={data} />
    </>
  );
}
const TreeNode = ({ data }) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div onClick={() => setExpand(!expand)}> {data.name}</div>
      <div style={{ display: expand ? "block" : "none", paddingLeft: "30px" }}>
        {data.items.map((item) => {
          return <TreeNode data={item} />; //show all
        })}
      </div>
    </>
  );
};
