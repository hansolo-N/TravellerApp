import React from "react";
import styles from "./Sidebar.module.css";
import Destinations from "../pages/Destinations";
import { Outlet } from "react-router-dom";
import Logo from "./Logo";

function DestinationSidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <Destinations />
      <Outlet />
      <footer className={styles.footer}>
        <p>&copy; copyright {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default DestinationSidebar;
