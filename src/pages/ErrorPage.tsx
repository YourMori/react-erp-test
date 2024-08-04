import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/pages/errorPage.module.scss";

const ErrorPage: React.FC = () => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.title}>Что-то пошло не так!</h1>
      <p className={styles.message}>
        Произошла ошибка при загрузке страницы. Попробуйте еще раз позже.
      </p>
      <Link to="/" className={styles.homeLink}>
        Вернуться на главную
      </Link>
    </div>
  );
};

export default ErrorPage;
