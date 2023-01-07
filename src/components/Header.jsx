import React from 'react';
import logo from "../images/logo.png";
import ButtonHeader from "./  UI/ButtonHeader";
import {NavLink} from "react-router-dom";
import MainPage from "./MainPage";

const Header = () => {
    return (
        <header className="navbar navbar-light" style={{backgroundColor: "lightskyblue"}}>
            <div className="container">
                <NavLink className="navbar-brand" to="/" onClick={MainPage}>
                    <img src={logo} style={{width: 30, height: 30}}  className="d-inline-block align-top" alt=""/>
                        <span style={{color: "red"}}>Ya</span>tube
                </NavLink>
                <ul className="nav  nav-pills">
                    <ButtonHeader text={"Об авторе"} to="/about"/>
                    <ButtonHeader text={"Технологии"} to="/technologies"/>
                    <ButtonHeader text={"Создать пост"}/>
                    <ButtonHeader text={"Список групп"}/>
                    <li>
                        Пользователь: leo
                    </li>
                    <ButtonHeader text={"Войти"}/>
                    <ButtonHeader text={"Выйти"}/>
                </ul>
            </div>
        </header>

    );
};

export default Header;