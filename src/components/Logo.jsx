import styled from "styled-components";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const StyledLogo = styled.div`
  padding: 0.5rem 0.5rem;

  &:hover {
    transform: translate3d(0, 10px, 5px);
    background-color: #58d68d;
    border: none;
    border-radius: 5px;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <Link to="/">
        <img
          src="/logo-no-background.png"
          alt="WorldWise logo"
          className={styles.logo}
        />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
