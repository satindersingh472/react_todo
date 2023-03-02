import { NewTask } from "./NewTask.js";
import React,{ useState } from "react";
import { AllTasks } from "./AllTasks.js";

export default function Todo() {
  const [newTask, setNewTask] = useState({});

  const handleNewTask = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({...prev, id: Date.now(), [name]: value}));
  };

  const [allTasks, setAllTasks] = useState([]);

  const handleAllTask = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };

  const handleDelete = (taskToRemove) => {
    setAllTasks((prev) => prev.filter(
        (task) => task.id !== taskToRemove
        ));
  };

  return (
    <div>
        <h1>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleNewTask={handleNewTask}
        handleAllTask={handleAllTask}
      />
      <AllTasks allTasks={allTasks} handleDelete={handleDelete} />
    </div>
  )
}
