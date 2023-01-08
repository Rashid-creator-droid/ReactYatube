import React from "react";
import { useNavigate, NavLink } from "react-router-dom";



import styles from "./sign-in.module.css";
import {FormContainer} from "../  UI/form-container/form-container";
import {Input} from "reactstrap";
import {ButtonForm} from "../  UI/button-form/button-form";
import {getUser, loginUser} from "../../services/auth-heafer";
import {UserContext} from "../../utils/context";
import PostService from "../../API/PostService";

export const SignIn = ({ extraClass = "" }) => {
  const [userData, setUserData] = React.useState({});
  const [user, setUser] = React.useState();
  const [errorPassword, setErrorPassword] = React.useState("");
  const [errorLogin, setErrorLogin] = React.useState("");

  const history = useNavigate();

  const onChangeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
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
    const response = loginUser(userData.username, userData.password)

    checkValid() &&
      loginUser(userData.username, userData.password)
        .then((res) => {
            console.log(res)
            console.log(res.access)
          if (res && res.access) {
            getUser().then((res) => {
              if (res && res.id) {
                setUser({ id: res.id });
                history("/", { replace: true });
                console.log('Все норм')
              }
            });
          }
        })

        .catch((err) => {
          if (err.non_field_errors) {
            console.log("Неправильный логин или пароль");
          } else {
            console.log("Ошибка сервера");
          }
        });

  };

  return (
    <section className={`${styles.content} ${extraClass}`}>
      <img className={`${styles.logo} mb-16`}  alt="Логотип" />
      <h1
        className={`text text_type_h1 text_color_primary mb-10 ${styles.title}`}
      >
        Вход
      </h1>
      <p
        className={`text text_type_medium-20 text_color_input mb-20 ${styles.subtitle}`}
      >
        Войдите для доступа к Kittygram!
      </p>
      <FormContainer>
        <form className={styles.form}>
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
          <ButtonForm
            extraClass={styles.btn}
            text="Войти"
            onClick={handleSubmit}
          />
          <p className="text text_type_small text_color_input mt-5 mb-5">или</p>
        </form>
        <div className={styles.footer}>
          <NavLink
            to="/signup"
            className={`text text_type_medium-16 text_color_link ${styles.nav}`}
          >
            Ещё не зарегистрированы? Зарегистрируйтесь
          </NavLink>
        </div>
      </FormContainer>
    </section>
  );
};
