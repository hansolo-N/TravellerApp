import React from "react";
import Form from "../ui/Form";
import { useForm } from "react-hook-form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLogin } from "../authentication/useLogin";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

function LoginForm() {
  const { login, isLoading } = useLogin();

  const { register, formState, handleSubmit } = useForm();

  const { errors } = formState;

  function onSubmit({ password, email }) {
    login({ password, email });
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
          <button disabled={isLoading}>Login</button>
        </FormRow>
        <FormRow>
          <Link to="/signup">SignUp</Link>
        </FormRow>
      </Form>
    </LoginContainer>
  );
}

export default LoginForm;
