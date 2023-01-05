import React from 'react';
import { NavLink } from "react-router-dom";

const ButtonHeader = ({
    isLogin = false,
    text = "",
    to = "/",
    extraClass = "",
    ...rest
}) => {
    return (
        <div {...rest}>
            <li className="nav-item">
                <a className="nav-link" href={to}>
                    {text}
                </a>
            </li>
        </div>
    );
};

export default ButtonHeader;