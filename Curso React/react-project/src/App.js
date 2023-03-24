import React, { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask]
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList 
        title="Pendente" 
        taskState={"Pendente"}
        onAddTask={addTask} 
        tasks={tasks.filter((t) => t.state === "Pendente")} 
        onTaskUpdate={updateTask} 
        onDeleteTask={deleteTask}
        />
        <TaskList 
        title="Em andamento" 
        taskState={"Em andamento"}
        onAddTask={addTask} 
        tasks={tasks.filter((t) => t.state === "Em andamento")} onTaskUpdate={updateTask}
        onDeleteTask={deleteTask}
        />
        <TaskList 
        title="Completa" 
        taskState={"Completa"}
        onAddTask={addTask} 
        tasks={tasks.filter((t) => t.state === "Completa")} 
        onTaskUpdate={updateTask}
        onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}