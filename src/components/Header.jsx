import React from 'react';
import logo from "../images/logo.png";

const Header = () => {
    return (
        <nav className="navbar navbar-light" style={{backgroundColor: "lightskyblue"}}>
            <div className="container">
                <a className="navbar-brand" href="">
                    <img src={logo} style={{width: 30, height: 30}}  className="d-inline-block align-top" alt=""/>
                        <span style={{color: "red"}}>Ya</span>tube
                </a>
                <ul className="nav  nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="">
                            Об авторе
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">
                            Технологии
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">
                            Новая запись
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-light " href="">
                            Изменить пароль
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-light" href="">Выйти</a>
                    </li>
                    <li>
                        Пользователь: leo
                        </li>

                            <li className="nav-item">
                                <a className="nav-link link-light" href="">
                                    Войти
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-light " href="">Регистрация</a>
                            </li>
                </ul>
            </div>
        </nav>

    );
};

export default Header;