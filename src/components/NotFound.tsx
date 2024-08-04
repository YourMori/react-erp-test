import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/components/notFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>Страница не найдена</h1>
      <p className={styles.message}>
        Извините, но запрашиваемая страница не существует.
      </p>
      <Link to="/" className={styles.homeLink}>
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
