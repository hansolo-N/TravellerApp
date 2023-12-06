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
  border: none;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  background-color: #3a9679;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  border: none;
  border-radius: 5px;
  color: #152744;
  display: flex;
  justify-content: center;
  text-align: center;

  &:hover {
    text-decoration: underline;
    transform: scale(1.2);
  }
`;

const Button = styled.button`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  background-color: #a7cd78;
  padding: 0.3rem 0.3rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  text-align: center;
  transition: all 0.5s ease-in;

  &:hover {
    background-color: #01352c;
    transform: scale(1.1);
  }
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
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="email" error={errors?.passwordConfirm?.message}>
          <Input
            type="email"
            id="email"
            {...register("email", {
              required: "this field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "provide a valid email address",
              },
            })}
          />
        </FormRow>

        <FormRow label="password" error={errors?.passwordConfirm?.message}>
          <Input
            type="password"
            id="password"
            {...register("password", { required: "this field is required" })}
          />
        </FormRow>

        <Button disabled={isLoading}>Login</Button>

        <StyledLink to="/signup">want to sign up?!</StyledLink>
      </StyledForm>
    </LoginContainer>
  );
}

export default LoginForm;
