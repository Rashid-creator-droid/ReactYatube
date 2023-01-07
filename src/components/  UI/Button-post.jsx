import React from 'react';
import {NavLink} from "react-router-dom";
import OnSecondPageButton from "../svyaz";

const ButtonPost = ({text, onClick, extraClass = "", ...rest}) => {
    return (
      <button onClick={() => (OnSecondPageButton)}>
        {text}
      </button>
    );
};

export default ButtonPost;