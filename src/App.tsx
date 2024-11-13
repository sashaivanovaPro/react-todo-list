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

  let [filter, setFilter] = useState<FilterValuesType>("all");

  function removeTask(id: string) {
    let changedTasks = tasks.filter((task) => task.id !== id);
    console.log(changedTasks);
    setTasks(changedTasks);
  }

  function addTask(title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

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

  // let task2: Array<TaskType> = [
  //   { id: 1, title: "Terminator", isDone: true },
  //   { id: 2, title: "XXX", isDone: true },
  //   // { id: 3, title: "Gentlemen", isDone: true },
  // ];

  return (
    <div className="App">
      <TodoList
        title="What to learn"
        tasks={tasksForTodoList}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
      />
      {/* <TodoList title="Movies" tasks={task2} /> */}

      {/* <Accordion titleValue={"Menu"} stars={1} />
      <Accordion titleValue={"Users"} stars={5} /> */}
    </div>
  );
}

export default App;
