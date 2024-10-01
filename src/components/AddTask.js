import { useState } from "react";
import "./AddTask.css";

let currentId = 1;

export const AddTask = ({ tasks, setTasks }) => {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setTaskValue(e.target.value);
  };

  const handleReset = () => {
    setTaskValue("");
    setProgress(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskValue.trim()) {
      console.log("Task name is empty!");
      return;
    }

    const task = {
      id: currentId++,
      name: taskValue.trim(),
      completed: Boolean(progress),
    };

    setTasks([...tasks, task]);
    handleReset();
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task name:</label>
        <input
          onChange={handleChange}
          type="text"
          name="task"
          id="task"
          placeholder="enter your task..."
          maxLength={150}
          autoComplete="off"
          value={taskValue}
        />
        <select onChange={(e) => setProgress(e.target.value)} value={progress}>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};
