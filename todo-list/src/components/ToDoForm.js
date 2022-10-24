import React, { useState } from "react";
import style from "./ToDoForm.module.css";

const ToDoForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    };
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <input
                className={style.input}
                value={userInput}
                type="text"
                onChange={handleChange}
                placeholder="Enter task..."
            />
            <button className={style.button}>Add</button>
        </form>
    );
};

export default ToDoForm;
