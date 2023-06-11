import React, { useEffect, useState } from "react";

// console.log([11,2,3].sort((a,b)=>{
//   console.log('a:',a,'b:',b)
//   return a-b
// }))//backend, frontend
// const data = ["delta", "alpha", "charlie", "bravo"];

// // temporary array holds objects with position and sort-value
// const mapped = data.map((v, i) => {
//   return { i, value: v };
// });
// console.log(mapped);
// // sorting the mapped array containing the reduced values
// mapped.sort((a, b) => {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   return 0;
// });

// const result = mapped.map((v) => data[v.i]);

const mockData = [
  { id: 1, firstName: "Jon", lastName: "Snow", age: 35 },
  { id: 2, firstName: "Cersei", lastName: "Lanister", age: 42 },
  { id: 3, firstName: "Jaime", lastName: "Lanister", age: 45 },
  { id: 4, firstName: "Arya", lastName: "Stalk", age: 16 },
  { id: 5, firstName: "Daenerys", lastName: "Targaryan", age: 30 }
];
// console.log(
//   [...mockData].sort((a, b) => {
//     //   if (a.firstName.toUpperCase() > b.firstName.toUpperCase()) {
//     //     return -1;
//     //   }
//     //   if (a.firstName.toUpperCase() < b.firstName.toUpperCase()) {
//     //     return 1;
//     //   }
//     //   return 0;
//     return a.firstName.localeCompare(b.firstName);
//   })
// );

const strSort = new Set(["firstName", "lastName"]); //"fullName"
const intSort = new Set(["id", "age"]);

export default function DataGrid() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setData(mockData);
  }, []);
  useEffect(() => {
    if (searchInput) {
      const newfilteredData = data.filter((item) => {
        for (let val of intSort) {
          if (item[val].toString().includes(searchInput)) return true;
        }
        for (let val of strSort) {
          if (item[val].toLowerCase().includes(searchInput.toLowerCase()))
            return true;
        }
        return false;
        // var x = 1;//shortcut
        // true || (x = 2) // true
        // x // 1
        // return (
        //   item.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
        //   item.lastName.toLowerCase().includes(searchInput.toLowerCase()) ||
        //   item.id.toString().includes(searchInput) ||
        //   item.age.toString().includes(searchInput)
        // );
      });
      setFilteredData(newfilteredData);
    } else {
      setFilteredData(data);
    }
  }, [searchInput, data]);
  //   const handleSort = (e) => {
  //     const sortBy = e.target.getAttribute("name");
  //     setFilteredData((data) => {
  //       return [...data].sort((a, b) => {
  //         if (strSort.has(sortBy)) return a[sortBy].localeCompare(b[sortBy]);
  //         else if (intSort.has(sortBy)) return a[sortBy] - b[sortBy];
  //         return a > b;
  //       });
  //     });
  //   };
  const handleSort = (e) => {
    let sortBy = e.target.getAttribute("name");
    setFilteredData((mockData) => {
      return [...mockData].sort((a, b) => {
        if (strSort.has(sortBy)) {
          return a[sortBy].localeCompare(b[sortBy]);
        } else if (intSort.has(sortBy)) {
          return a[sortBy] - b[sortBy];
        }
        return a > b; //?why {}>{} ?
      });
    });
    // for (let val of intSort) {
    //   console.log(val); //val=id, val=age
    //   setFilteredData((filteredData) =>
    //     [...filteredData].sort((a, b) => a[val] - b[val])
    //   );
    // }
  };
  return (
    <>
      <h3>
        Data Grid search{" "}
        <input
          type="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </h3>
      <table>
        <thead>
          <tr onClick={(e) => handleSort(e)}>
            <th>
              <input type="checkbox" />
            </th>
            <th name="id">ID</th>
            <th name="firstName">First Name</th>
            <th name="lastName">Last Name</th>
            <th name="age">Age</th>
            <th name="fullName">Full Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>{item.firstName + " " + item.lastName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

// import { useEffect, useState } from "react";
// const data = [
//   { id: 1, firstName: "Jon", lastName: "Snow", age: 35 },
//   { id: 2, firstName: "Cersei", lastName: "Lanister", age: 42 },
//   { id: 3, firstName: "Jaime", lastName: "Lanister", age: 45 },
//   { id: 4, firstName: "Arya", lastName: "Stalk", age: 16 },
//   { id: 5, firstName: "Daenerys", lastName: "Targaryan", age: 30 }
// ];
// const strSort = new Set(["firstName", "lastName", "fullName"]);
// const intSort = new Set(["id", "age"]);

// function DataGrid() {
//   const [myData, setMyData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchInput, setSearchInput] = useState("");

//   useEffect(() => {
//     setMyData(
//       data.map((x) => ({ ...x, fullName: `${x.firstName} ${x.lastName}` }))
//     );
//   }, []);

//   useEffect(() => {
//     setFilteredData(myData);
//   }, [myData]);

//   useEffect(() => {
//     if (!searchInput) setFilteredData(myData);
//     else {
//       const newFilteredData = myData.filter((person) => {
//         for (const str of strSort) {
//           if (person[str].includes(searchInput)) return true;
//         }
//         for (const num of intSort) {
//           if (person[num].toString().includes(searchInput)) return true;
//         }
//         return false;
//       });
//       setFilteredData(newFilteredData);
//     }
//   }, [searchInput, myData]);

//   const handleSort = (e) => {
//     const sortBy = e.target.getAttribute("name");
//     setFilteredData((data) => {
//       return [...data].sort((a, b) => {
//         if (strSort.has(sortBy)) return a[sortBy].localeCompare(b[sortBy]);
//         else if (intSort.has(sortBy)) return a[sortBy] - b[sortBy];
//         return a > b;
//       });
//     });
//   };

//   const handleSearch = (e) => {
//     setSearchInput(e.target.value);
//   };

//   return (
//     <div>
//       <input placeholder="Search" value={searchInput} onChange={handleSearch} />
//       <table>
//         <thead>
//           <tr onClick={handleSort}>
//             <th name="id">ID</th>
//             <th name="firstName">First Name</th>
//             <th name="lastName">Last Name</th>
//             <th name="age">Age</th>
//             <th name="fullName">Full Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((person) => (
//             <tr>
//               <td>{person.id}</td>
//               <td>{person.firstName}</td>
//               <td>{person.lastName}</td>
//               <td>{person.age}</td>
//               <td>{person.fullName}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default DataGrid;
