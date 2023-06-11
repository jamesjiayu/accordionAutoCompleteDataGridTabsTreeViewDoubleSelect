import { useEffect, useState } from "react";
const items = [
  {
    name: "apple",
    category: "fruit"
  },
  {
    name: "Cucumber",
    category: "vegetable"
  },
  {
    name: "Banana",
    category: "fruit"
  },
  {
    name: "Celery",
    category: "vegetable"
  },
  {
    name: "orange",
    category: "fruit"
  },
  {
    name: "sausage",
    category: "meat"
  },
  {
    name: "bacon",
    category: "meat"
  }
];
// const categories = [];
// const categoryObj = items.reduce((acc, curr) => {
//   if (acc[curr.category]) {
//     acc[curr.category].push(curr.name);
//   } else {
//     acc[curr.category] = [];
//     acc[curr.category].push(curr.name);
//     categories.push(curr.category);
//   }
//   return acc;
// }, {});
// {
//     "fruit": [
//         "apple",
//         "Banana",
//         "orange"
//     ],
//     "vegetable": [
//         "Cucumber",
//         "Celery"
//     ],
//     "meat": [
//         "sausage",
//         "bacon"
//     ]
// }
// categories = ["fruit",  "vegetable","meat",];
export default function DoubleSelect() {
  const [categories, setCategories] = useState([]);
  const [categoryObj, setCategoryObj] = useState({});
  const [cat, setCat] = useState("meat");
  const [item, setItem] = useState("sausage");
  useEffect(() => {
    const categories = [];
    const categoryObj = items.reduce((acc, curr) => {
      if (acc[curr.category]) {
        acc[curr.category].push(curr.name);
      } else {
        acc[curr.category] = [];
        acc[curr.category].push(curr.name);
        categories.push(curr.category);
      }
      return acc;
    }, {});
    setCategories(categories);
    setCategoryObj(categoryObj);
  }, []);
  return (
    <>
      <div>
        <h5>{item}</h5>
        <label htmlFor="cat">categories: </label>
        <select
          id="cat"
          value={cat}
          onChange={(e) => {
            console.log(e.target.value);
            setCat(e.target.value);
            setItem(categoryObj[e.target.value][0]);
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat + "1"}
            </option>
          ))}
        </select>
        <select
          value={item}
          onChange={(e) => {
            //console.log(e.target.value);
            setItem(e.target.value);
          }}
        >
          {categoryObj[cat]?.map((ele) => (
            <option key={ele} value={ele}>
              {ele}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
