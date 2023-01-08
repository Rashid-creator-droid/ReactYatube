import React, {useContext, useState} from 'react';
import {getUser, loginUser} from "../API/PostService";
import Input from "./Input";
import {useNavigate} from "react-router-dom";
import ButtonHeader from "./  UI/ButtonHeader";

const SignIn = ({ extraClass = "" }) => {
    const [userData, setUserData] = useState("");
    const [user, setUser] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");
    const history = useNavigate()


    const onChangeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    console.log(setUserData)
  };

    const checkValid = () => {
    if (!userData.username) {
      setErrorLogin("Поле с именем является обязательным");
      return false;
    }
    if (!userData.password) {
      setErrorPassword("Поле с паролем является обязательным");
      return false;
    }
    return true;
  };

    const handleSubmit = () => {
    errorLogin && setErrorLogin("");
    errorPassword && setErrorPassword("");



    checkValid() &&
      loginUser(userData.username, userData.password)
        .then((res) => {
          if (res && res.auth_token) {
            getUser().then((res) => {
              if (res && res.id) {
                setUser({ id: res.id });
                history.replace("/");
              }
            });
          }
        })
        .catch((err) => {
          if (err.non_field_errors) {
            setErrorPassword("Неправильный логин или пароль");
          } else {
            setErrorPassword("Ошибка сервера");
          }
        });
  };

    return (
        <div>
        <form>
          <Input
            name="username"
            type="text"
            id={1}
            placeholder="Имя"
            onChange={onChangeInput}
            error={errorLogin}
          />
          <Input
            name="password"
            type="password"
            id={2}
            placeholder="Пароль"
            onChange={onChangeInput}
            error={errorPassword}
          />
            <ButtonHeader
            text="Войти"
            onClick={handleSubmit}
          />
          <p className="text text_type_small text_color_input mt-5 mb-5">или</p>
        </form>

        </div>
    );
};

export default SignIn;