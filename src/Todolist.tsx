import React, { ChangeEvent, useState } from "react";
import { FilterValuesType } from "./App";

// function sum(a: number, b: number) {
//   alert(a + b);
// }

// sum(12, 14);

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskId: string) => void;
  changeFilter: (value: FilterValuesType) => void;
  addTask: (title: string) => void;
  changeTaskStatus: (taskId: string, isDone: boolean) => void;
  filter: FilterValuesType;
};

export function TodoList(props: PropsType) {
  // debugger;
  let [newTaskTitle, setNewTaskTitle] = useState("");
  let [error, setError] = useState<string | null>(null);

  const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };

  const addTask = () => {
    if (newTaskTitle.trim() !== "") {
      props.addTask(newTaskTitle);
      setNewTaskTitle("");
    } else {
      setError("Field is required");
    }
  };

  const onEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.key === "Enter") {
      addTask();
    }
  };

  const onAllClickHandler = () => {
    props.changeFilter("all");
  };

  const onActiveClickHandler = () => {
    props.changeFilter("active");
  };

  const onCompletedClickHandler = () => {
    props.changeFilter("completed");
  };

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={newTaskTitle}
          type="text"
          onChange={onTitleChangeHandler}
          onKeyDown={onEnterKeyDown}
          className={error ? "error" : ""}
        />
        <button onClick={addTask}>+</button>
        {error && <div className="error-message">{error}</div>}
        <ul>
          {props.tasks.map((task) => {
            const onRemoveHandler = () => {
              props.removeTask(task.id);
            };
            const onDoneStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
              props.changeTaskStatus(task.id, e.currentTarget.checked);
            };
            return (
              <li key={task.id} className={task.isDone ? "is-done" : ""}>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={onDoneStatusHandler}
                />
                <span>{task.title}</span>
                <button onClick={onRemoveHandler}>x</button>
              </li>
            );
          })}
        </ul>
        <div>
          <button
            className={props.filter === "all" ? "active-filter" : ""}
            onClick={onAllClickHandler}
          >
            All
          </button>
          <button
            className={props.filter === "active" ? "active-filter" : ""}
            onClick={onActiveClickHandler}
          >
            Active
          </button>
          <button
            className={props.filter === "completed" ? "active-filter" : ""}
            onClick={onCompletedClickHandler}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
}
