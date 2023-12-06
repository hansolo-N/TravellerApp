import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { useEffect } from "react";
import Spinner from "../components/Spinner";
import styled from "styled-components";

const PageSpinner = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isAuthenticated, isLoading } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        // navigate("/login");
      }
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <PageSpinner>
        <Spinner />
      </PageSpinner>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;

export { PageSpinner };
