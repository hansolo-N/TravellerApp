import styles from "./Login.module.css";
import NavPage from "../components/NavPage";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import { useForm } from "react-hook-form";
import { useSignUpUser } from "../hooks/useSignUpUser";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

export default function SignUp() {
  const { register, formState, handleSubmit, reset } = useForm();

  const { signUp, isLoading } = useSignUpUser();

  const { errors } = formState;

  function onSubmit({ email, password, fullName }) {
    signUp({ email, password, fullName });
  }

  return (
    <main className={styles.login}>
      <NavPage />
      <StyledForm className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="full Name" error={errors?.fullName?.message}>
          <Input
            type="text"
            id="fullName"
            {...register("fullName", { required: "this field is required" })}
          />
        </FormRow>

        <FormRow label="email" error={errors?.fullName?.message}>
          <Input
            type="email"
            id="email"
            {...register("email", { required: "this field is required" })}
          />
        </FormRow>

        <FormRow label="password" error={errors?.fullName?.message}>
          <Input
            type="password"
            id="password"
            {...register("password", { required: "this field is required" })}
          />
        </FormRow>

        <FormRow label="passwordConfirm" error={errors?.fullName?.message}>
          <Input
            type="password"
            id="passwordConfirm"
            {...register("passwordConfirm", {
              required: "this field is required",
            })}
          />
        </FormRow>
        <Button onClick={handleSubmit}>Sign Up</Button>
        <StyledLink to="/login">already a user?</StyledLink>
      </StyledForm>
    </main>
  );
}
