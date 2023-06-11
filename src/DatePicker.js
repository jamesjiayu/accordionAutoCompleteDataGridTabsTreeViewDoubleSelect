import React, { useState } from "react";
export default function DatePicker() {
  const [date, setDate] = useState("");
  const handleDate = (e) => {
    //  console.log(e.target.value);
    setDate(e.target.value);
  };
  return (
    <>
      <label htmlFor="DatePicker">
        <h3>pick a date : </h3>
      </label>{" "}
      <br />
      <input id="DatePicker" type="date" value={date} onChange={handleDate} />
      <br />
      <label htmlFor="DateUpdater">Updated date : </label> <br />
      <input type="text" value={date} disabled />
    </>
  );
}
