import React from "react";

export function NewTask({newTask, handleNewTask, handleAllTask}) {
  return (
    <form onSubmit={handleAllTask} >
      
        <input name="title" placeholder="New Task" onChange={handleNewTask} value={newTask.title || ""} />
          <textarea placeholder="details" name="description" onChange={handleNewTask} value={newTask.description || ""} ></textarea>
          <button type="submit">Submit</button>
    </form>
  );
}
