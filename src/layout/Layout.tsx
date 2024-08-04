import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import styles from "../styles/layout/layout.module.scss";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <main className={styles.main__right}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
