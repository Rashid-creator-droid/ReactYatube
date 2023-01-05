import React from 'react';
import logo from "../images/logo.png";
import ButtonHeader from "./  UI/ButtonHeader";

const Header = () => {
    return (
        <nav className="navbar navbar-light" style={{backgroundColor: "lightskyblue"}}>
            <div className="container">
                <a className="navbar-brand" href="">
                    <img src={logo} style={{width: 30, height: 30}}  className="d-inline-block align-top" alt=""/>
                        <span style={{color: "red"}}>Ya</span>tube
                </a>
                <ul className="nav  nav-pills">
                    <ButtonHeader text={"Об авторе"} to={"/about"}/>
                    <ButtonHeader text={"Технологии"}/>
                    <ButtonHeader text={"Создать пост"}/>
                    <ButtonHeader text={"Список групп"}/>
                    <li>
                        Пользователь: leo
                    </li>
                    <ButtonHeader text={"Войти"}/>
                    <ButtonHeader text={"Выйти"}/>
                </ul>
            </div>
        </nav>

    );
};

export default Header;