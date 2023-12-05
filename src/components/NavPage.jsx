import { NavLink } from "react-router-dom";
import styles from "./NavPage.module.css";
import Logo from "./Logo";
import styled from "styled-components";
import { useUser } from "../authentication/useUser";
import { useLogin } from "../authentication/useLogin";
import { useLogout } from "../authentication/useLogout";

function NavPage() {
  const { login, isLoading: LoggingIn } = useLogin();

  const { logout, isLoading: loggingOut } = useLogout();

  const { isAuthenticated, isLoading } = useUser();

  function Access() {
    if (isAuthenticated)
      return (
        <button disabled={loggingOut} onClick={logout}>
          Logout
        </button>
      );

    return (
      <button disabled={LoggingIn} onClick={login}>
        Login
      </button>
    );
  }

  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/destinations">Destinations</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            <Access />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavPage;
