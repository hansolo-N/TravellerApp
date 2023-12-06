import styled from "styled-components";
import { useUser } from "../authentication/useUser";
import { Link, NavLink } from "react-router-dom";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
  transition: all 1s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translate3d(0, -5px, 0) scale(1.1);
    color: #58d68d;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

const Span = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 16px;
  text-transform: uppercase;
`;

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <Link to="/settings">
      <StyledUserAvatar>
        <Avatar
          src={avatar || "default-user.jpg"}
          alt={`avater of ${fullName}`}
        />

        <Span>{fullName}</Span>
      </StyledUserAvatar>
    </Link>
  );
}

export default UserAvatar;
