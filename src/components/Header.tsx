import React from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import styles from "../styles/components/header.module.scss";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className={styles.header}>
      <div>Header</div>
      <div className={styles.auth}>
        <FaUser className={styles.icon} />
        <FaSignOutAlt className={styles.icon} onClick={handleLogout} />
      </div>
    </div>
  );
};

export default Header;
