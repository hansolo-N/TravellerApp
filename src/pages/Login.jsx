import LoginForm from "../ui/LoginForm";
import Logo from "../components/Logo";
import styled from "styled-components";

const PageContainer = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Login() {
  return (
    <PageContainer>
      <Logo />
      <LoginForm />
    </PageContainer>
  );
}

export default Login;
