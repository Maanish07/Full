import React, { useState } from "react";
import Todotask from "./Todotask";

const Todo = () => {
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const handleInput = () => {
    setShowTask(true);
  };
  const datafromchild = (newTask) => {
    setTasks([newTask, ...tasks]);
    setShowTask(false);
  };
  console.log("tasks", tasks);
  const handleCheckboxChange = (index) => {
    if (!tasks[index].disabled) {
      const updatedTasks = [...tasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      if (updatedTasks[index].completed) {
        updatedTasks[index]["Completed at"] = new Date().toISOString();
      } else {
        updatedTasks[index]["Completed at"] = null;
      }
      updatedTasks[index].disabled = true;
      setTasks(updatedTasks);
    }
  };
  return (
    <>
      <h1>To Do List</h1>
      <button onClick={handleInput}>Add Task</button>
      {showTask && <Todotask datatoparent={datafromchild} />}

      <ul>
        {tasks.map((taskItem, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={taskItem.completed}
              onChange={() => handleCheckboxChange(index)}
              disabled={taskItem.disabled}
            />

            <span
              style={{
                textDecoration: taskItem.completed ? "line-through" : "none",
              }}
            >
              {taskItem.task} - {taskItem.taskCategory} - Created at -
              {new Date(taskItem["Created at"]).toLocaleString()}
            </span>
            {taskItem.completed && (
              <span>
                {" "}
                - Completed at:{" "}
                {new Date(taskItem["Completed at"]).toLocaleString()}
              </span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
