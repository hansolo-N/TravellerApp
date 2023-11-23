
import { NavLink } from 'react-router-dom'
import styles from "./NavPage.module.css"
import Logo from './Logo'

function NavPage() {
  return (
    <nav className={styles.nav}>
      <Logo/>
        <ul>
            <li><NavLink to="/pricing">Destinations</NavLink></li>
            <li><NavLink to="/product">About</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
            <li><NavLink to="/login" className={styles.ctaLink}>login</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavPage