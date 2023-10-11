
import { NavLink } from 'react-router-dom'
import styles from "./NavPage.module.css"
import Logo from './Logo'

function NavPage() {
  return (
    <nav className={styles.nav}>
      <Logo/>
        <ul>
            <li><NavLink to="/pricing">Pricing</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to="/login" className={styles.ctaLink}>login</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavPage