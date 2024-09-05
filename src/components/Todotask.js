import React, { useEffect, useState } from "react";

const Todotask = ({ datatoparent }) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskCategory, setTaskCategory] = useState("Easy");
  const [showTask, setShowTask] = useState(true);
  const [date, setDate] = useState();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    if (task !== "") {
      datatoparent({
        task: task,
        Date: new Date(date),
        "Created at": new Date().toISOString(),
        taskCategory: taskCategory,
        completed: false,
      });

      setTask("");
    }
    setShowTask(false);
  };

  useEffect(() => {
    console.log("Task :", tasks);
  }, [tasks]);

  return (
    <>
      <input value={task} placeholder="Add new task" onChange={handleChange} />
      <input type="date" onChnage={(e) => setDate(e.target.value)} />

      <label>Task Category</label>
      <select
        value={taskCategory}
        onChange={(e) => setTaskCategory(e.target.value)}
      >
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <button onClick={handleSubmit}>Add</button>
    </>
  );
};

export default Todotask;
