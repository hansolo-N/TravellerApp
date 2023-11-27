import React from "react";
import Form from "../ui/Form";
import { useForm } from "react-hook-form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

function LoginForm() {
  const { login, isLoading } = useLogin();

  const { register, formState, handleSubmit } = useForm();

  const navigate = useNavigate();

  const { errors } = formState;

  function onSubmit({ password, email }) {
    login({ password, email });
  }

  function handleSignUp(e) {
    e.preventDefault();
    navigate("/signup");
  }

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="email">
          <Input
            type="text"
            id="email"
            {...register("email", { required: "this field is required" })}
          />
        </FormRow>

        <FormRow label="password">
          <Input
            type="password"
            id="password"
            {...register("password", { required: "this field is required" })}
          />
        </FormRow>
        <FormRow>
          <button>Login</button>
        </FormRow>
        <FormRow>
          <button onClick={handleSignUp}>SignUp</button>
        </FormRow>
      </Form>
    </LoginContainer>
  );
}

export default LoginForm;
