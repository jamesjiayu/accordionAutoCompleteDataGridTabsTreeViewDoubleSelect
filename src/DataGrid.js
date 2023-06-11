import React, { useEffect, useState } from "react";

const dataBackend = [
  {
    id: 1,
    firstname: "John",
    lastname: "Snow",
    age: 30,
    fullname: "John Snow"
  },
  {
    id: 2,
    firstname: "Jamine",
    lastname: "White",
    age: 25,
    fullname: "Jamine White"
  },
  {
    id: 3,
    firstname: "Arya",
    lastname: "Stark",
    age: 42,
    fullname: "Arya Stark"
  },
  {
    id: 4,
    firstname: "Ozzy",
    lastname: "Zhu",
    age: 50,
    fullname: "Ozzy Zhu"
  }
];
export default function DataGrid() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [ids, setIds] = useState([]);
  const [firstnames, setFirstnames] = useState([]);
  const [lastnames, setLastnames] = useState([]);
  const [ages, setAges] = useState([]);
  const [fullnames, setFullnames] = useState([]);
  const [id, setId] = useState("all");
  const [firstname, setFirstname] = useState("all");
  const [filterData, setFilterData] = useState(data);
  const [searchInput, setSearchInput] = useState("");
  const [sortValue, setSortValue] = useState("");
  useEffect(() => {
    setData(dataBackend);
  }, []);
  useEffect(() => {
    let columnsSet = new Set();
    let idsSet = new Set();
    let firstnamesSet = new Set();
    let lastnamesSet = new Set();
    let agesSet = new Set();
    let fullnamesSet = new Set();
    dataBackend.forEach((row) => {
      idsSet.add(row.id);
      firstnamesSet.add(row.firstname);
      lastnamesSet.add(row.lastname);
      agesSet.add(row.age);
      fullnamesSet.add(row.fullname);
      Object.keys(row).forEach((ele) => {
        columnsSet.add(ele);
      });
    });
    setColumns([...columnsSet]);
    setIds(["all", ...idsSet]);
    setFirstnames(["all", ...firstnamesSet]);
    setLastnames(["all", ...lastnamesSet]);
    setAges(["all", ...agesSet]);
    setFullnames(["all", ...fullnamesSet]);
  }, [dataBackend]);
  useEffect(() => {
    let newData = data
      .filter((row) => {
        if (id === "all") return true;
        return row.id === +id;
      })
      .filter((row) => {
        if (firstname === "all") return true;
        return row.firstname === firstname;
      });
    setFilterData(newData);
  }, [id, firstname, data]);
  const handleIdSelect = (e) => {
    //  console.log("e.target.value", e.target.value);
    setId(e.target.value);
  };
  const handleFirstnameSelect = (e) => {
    setFirstname(e.target.value);
  };
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  useEffect(() => {
    if (searchInput) {
      const newData = [...data].filter((row) => {
        let arr = Object.values(row);
        return arr.some((ele) => {
          if (typeof ele === "string") return ele.includes(searchInput);
          if (typeof ele === "number")
            return ele.toString().includes(searchInput);
        });
      });
      setFilterData(newData);
    }
  }, [searchInput, data]);
  const handleSort = (e) => {
    setSortValue(e.target.innerHTML); //target.getAttribute("name");
  };
  useEffect(() => {
    if (sortValue === "id" || sortValue === "age") {
      const newData = [...data].sort((a, b) => a[sortValue] - b[sortValue]);
      setFilterData(newData);
    } else {
      const newData = [...data].sort((a, b) => {
        const nameA = a[sortValue]; //.toUpperCase(); // ignore upper and lowercase
        const nameB = b[sortValue]; //.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0; // names must be equal
      });
      setFilterData(newData);
    }
  }, [sortValue, data]);
  return (
    <>
      <h2>Data Grid</h2>
      <input
        type="search"
        placeholder="search"
        value={searchInput}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            {columns.map((column, i) => (
              <th key={column} onClick={handleSort}>
                {column}
              </th>
            ))}
          </tr>
          <tr>
            <th></th>
            <th>
              <select value={id} onChange={handleIdSelect}>
                {ids.map((ele) => (
                  <option key={ele} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </th>
            <th>
              <select value={firstname} onChange={handleFirstnameSelect}>
                {firstnames.map((ele) => (
                  <option key={ele} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((row) => (
            <tr key={row.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{row.id}</td>
              <td>{row.firstname}</td>
              <td>{row.lastname}</td>
              <td>{row.age}</td>
              <td>{row.fullname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
