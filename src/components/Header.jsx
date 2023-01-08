import React from 'react';
import logo from "../images/logo.png";
import ButtonHeader from "./  UI/ButtonHeader";
import {NavLink, Link} from "react-router-dom";
import MainPage from "./MainPage";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";

const Header = () => {
    const [fetchHeader] = useFetching(async () => {
        const response = ""
    })
    return (
        <header className="navbar navbar-light" style={{backgroundColor: "lightskyblue"}}>
            <div className="container">
                <NavLink className="navbar-brand" to="/" >
                    <img src={logo} style={{width: 30, height: 30}}  className="d-inline-block align-top" alt=""/>
                        <span style={{color: "red"}}>Ya</span>tube
                </NavLink>
                <ul className="nav  nav-pills">
                    <ButtonHeader text='Об авторе' to="/about" />
                    <ButtonHeader text='Технологии' to="/technologies"/>
                    <ButtonHeader text='Создать пост' to='/addpost'/>
                    <ButtonHeader text='Список групп'/>
                    <li>
                        Пользователь: leo
                    </li>
                    <ButtonHeader text={"Войти"} to="/login"/>
                    <ButtonHeader text={"Выйти"}/>
                </ul>
            </div>
        </header>

    );
};

export default Header;