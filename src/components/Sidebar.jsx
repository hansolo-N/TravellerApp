import React from 'react'
import styles from "./Sidebar.module.css"
import Logo from './Logo'
import AppNav from './AppNav'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <Logo/>
        <AppNav/>
        <p>list of cities</p>
        <footer className={styles.footer}>
            <p>&copy; copyright {new Date().getFullYear()}</p>
        </footer>
    </div>
  )
}

export default Sidebar