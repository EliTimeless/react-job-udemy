import React, { useState } from "react";
import { TaskCard } from "./TaskCard";
import "./TaskList.css";

export const TaskList = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <section className="tasklist">
      <ul>
        <div className="header">
          <h1>Task list </h1>
          <button className="trigger" onClick={() => setShow(!show)}>
            {show ? "Hide tasks" : "Show tasks"}
          </button>
        </div>

        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>
    </section>
  );
};
