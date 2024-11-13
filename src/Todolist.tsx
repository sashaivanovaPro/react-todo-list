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
};

export function TodoList(props: PropsType) {
  // debugger;
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };

  const onEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey && e.key === "Enter") {
      props.addTask(newTaskTitle);
      setNewTaskTitle("");
    }
  };

  const addTask = () => {
    props.addTask(newTaskTitle);
    setNewTaskTitle("");
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
        />
        <button onClick={addTask}>+</button>
        <ul>
          {props.tasks.map((task) => {
            const onRemoveHandler = () => {
              props.removeTask(task.id);
            };
            return (
              <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <button onClick={onRemoveHandler}>x</button>
              </li>
            );
          })}
          {/* <li>
            <input type="checkbox" checked={props.tasks[0].isDone} />
            <span>{props.tasks[0].title}</span>
          </li>
          <li>
            <input type="checkbox" checked={props.tasks[1].isDone} />
            <span>{props.tasks[1].title}</span>
          </li>
          <li>
            <input type="checkbox" checked={props.tasks[2].isDone} />
            <span>{props.tasks[2].title}</span>
          </li> */}
        </ul>
        <div>
          <button onClick={onAllClickHandler}>All</button>
          <button onClick={onActiveClickHandler}>Active</button>
          <button onClick={onCompletedClickHandler}>Completed</button>
        </div>
      </div>
    </div>
  );
}
