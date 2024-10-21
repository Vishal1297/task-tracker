import React, { useLayoutEffect, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TaskList from "./components/TaskList";
import { Task } from "./model";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([
        ...tasks,
        { id: Date.now() * 1000, task: task, isDone: false },
      ]);
      setTask("");
    }
  };

  // Set document title to "Task Tracker"
  useLayoutEffect(() => {
    document.title = "Task Tracker";
  }, []);

  return (
    <div className="App">
      <span className="heading">Task Tracker</span>
      <InputField task={task} setTask={setTask} handleAdd={handleAddTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
