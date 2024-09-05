import React, { useState } from "react";

const Expense = (props) => {
  const [newtitle, setNewtitle] = useState("");
  const [title, setTitle] = useState(props.title);
  const hanldeClick = (e) => {
    setTitle(newtitle);
    setNewtitle("");
  };
  const handleChange = (e) => {
    setNewtitle(e.target.value);
  };
  return (
    <>
      <div>
        <h1>Expense Track</h1>
        <div> {props.Date}</div>
        <h4>{title}</h4>
        <input value={newtitle} onChange={handleChange}></input>
        <button onClick={hanldeClick}>Change title</button>
      </div>
    </>
  );
};

export default Expense;
