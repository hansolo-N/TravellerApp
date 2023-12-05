import LoginForm from "../ui/LoginForm";
import Logo from "../components/Logo";
import styled from "styled-components";

const PageContainer = styled.div`
  background-color: #2d3439;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div``;

function Login() {
  return (
    <PageContainer>
      <Logo />
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </PageContainer>
  );
}

export default Login;
