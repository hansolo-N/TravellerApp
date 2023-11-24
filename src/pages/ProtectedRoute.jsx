import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isAuthenticated } = useUser();

  console.log(isAuthenticated);

  return children;
}

export default ProtectedRoute;
