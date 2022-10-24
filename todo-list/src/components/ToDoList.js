import React from "react";
import ToDo from "./ToDo";
import style from "./ToDoList.module.css";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
    return (
        <div>
            <div className={style.listBody}>
                {toDoList.map((todo) => {
                    return <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />;
                })}
            </div>
            <button className={style.btn} onClick={handleFilter}>
                Clear Completed
            </button>
        </div>
    );
};

export default ToDoList;
