import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/shared/iconLink.module.scss";

interface IconLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
}

const IconLink: React.FC<IconLinkProps> = ({ to, icon, text }) => {
  return (
    <Link to={to} className={styles.link}>
      <div className={styles.icon}>{icon}</div>
      <span className={styles.text}>{text}</span>
    </Link>
  );
};

export default IconLink;
