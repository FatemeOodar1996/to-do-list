import React from "react";
import style from "./Header.module.css";

const Header = () => {
    return (
        <header>
            <h1 className={style.header}>To Do List</h1>
        </header>
    );
};

export default Header;
