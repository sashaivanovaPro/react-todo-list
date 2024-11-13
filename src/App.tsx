import React, { useState } from "react";
import "./App.css";
import { TodoList, TaskType } from "./Todolist";
import { v1 } from "uuid";
import { title } from "process";
// import { Accordion } from "./Accordion";

export type FilterValuesType = "all" | "completed" | "active";

function App() {
  // let initTasks = [
  //   { id: 1, title: "CSS", isDone: true },
  //   { id: 2, title: "JS", isDone: true },
  //   { id: 3, title: "React", isDone: false },
  //   { id: 4, title: "Redux", isDone: false },
  // ];

  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), title: "CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: false },
    { id: v1(), title: "Redux", isDone: false },
  ]);

  // console.log(tasks);

  function removeTask(id: string) {
    let changedTasks = tasks.filter((task) => task.id !== id);
    // console.log(changedTasks);
    setTasks(changedTasks);
  }

  function addTask(title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  function changeStatus(taskId: string, isDone: boolean) {
    let task = tasks.find((task) => task.id === taskId);
    if (task) {
      task.isDone = isDone;
    }
    setTasks([...tasks]);
  }

  let [filter, setFilter] = useState<FilterValuesType>("all");

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  let tasksForTodoList = tasks;
  if (filter === "completed") {
    tasksForTodoList = tasks.filter((task) => task.isDone === true);
  }

  if (filter === "active") {
    tasksForTodoList = tasks.filter((task) => task.isDone === false);
  }

  return (
    <div className="App">
      <TodoList
        title="What to learn"
        tasks={tasksForTodoList}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeTaskStatus={changeStatus}
        filter={filter}
      />
    </div>
  );
}

export default App;
