import React from 'react';
import {Link, NavLink} from "react-router-dom";

const ButtonHeader = ({
    isLogin = false,
    text = "",
    to = "/",
    extraClass = "",
}) => {
    return (
         <NavLink className="nav-link" to={to}>{text}</NavLink>
    );
};

export default ButtonHeader;