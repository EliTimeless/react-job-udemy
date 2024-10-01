import React from "react";
import "./TaskCard.css";
import styles from "./TaskCard.module.css";

export const TaskCard = ({ task, handleDelete }) => {
  return (
    <div className="taskcard">
      <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
        <span className={styles.title}>
          {task.id}. {task.name}
        </span>{" "}
        <button className="delete" onClick={() => handleDelete(task.id)}>
          Delete
        </button>
      </li>
    </div>
  );
};
