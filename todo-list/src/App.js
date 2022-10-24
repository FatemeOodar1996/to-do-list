import React, { useState } from "react";
import data from "./assets/data.json";
//components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

import "./App.css";

function App() {
    const [toDoList, setToDoList] = useState(data);

    const handleToggle = (id) => {
        let mapped = toDoList.map((task) => {
            return task.id == id ? { ...task, complete: !task.complete } : { ...task };
        });
        setToDoList(mapped);
    };

    const handleFilter = () => {
        let filtered = toDoList.filter((task) => {
            return !task.complete;
        });
        setToDoList(filtered);
    };

    const addTask = (userInput) => {
        let newTask = [...toDoList];
        newTask = [...newTask, { id: toDoList.length + 1, task: userInput, complete: false }];
        setToDoList(newTask);
    };

    return (
        <div className="App">
            <Header /> <ToDoForm addTask={addTask} />
            <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
        </div>
    );
}

export default App;
