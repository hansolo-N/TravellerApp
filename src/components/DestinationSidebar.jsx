import React from "react";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";
import Logo from "./Logo";

function DestinationSidebar({ children }) {
  return (
    <div className={styles.sidebar}>
      {children}
      <footer className={styles.footer}>
        <p>&copy; copyright {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default DestinationSidebar;
