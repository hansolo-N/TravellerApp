import { NavLink } from "react-router-dom";
import styles from "./NavPage.module.css";
import Logo from "./Logo";
import styled from "styled-components";
import { useUser } from "../authentication/useUser";
import { useLogout } from "../authentication/useLogout";
import UserAvatar from "../ui/UserAvatar";

const StyledButton = styled.button`
  font-weight: 900;
  font-size: medium;
  text-transform: uppercase;
  transition: all 1s ease-in-out;
  &:hover {
    color: red;
  }
`;

function NavPage() {
  const { logout, isLoading: loggingOut } = useLogout();

  const { isAuthenticated } = useUser();

  function handleLogout() {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
    }
  }

  function Button() {
    return (
      <StyledButton disabled={loggingOut} onClick={handleLogout}>
        Logout
      </StyledButton>
    );
  }

  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        {isAuthenticated && (
          <li>
            <UserAvatar />
          </li>
        )}
        <li>
          <NavLink to="/destinations">Destinations</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        {isAuthenticated ? (
          <Button />
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavPage;
