import styles from "./Login.module.css";
import NavPage from "../components/NavPage";
import Button from "../components/StyledButton";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import { useForm } from "react-hook-form";
import { useSignUpUser } from "../hooks/useSignUpUser";

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
      <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          label="full Name"
          className={styles.row}
          error={errors?.fullName?.message}
        >
          <Input
            type="text"
            id="fullName"
            {...register("fullName", { required: "this field is required" })}
          />
        </FormRow>

        <FormRow
          label="email"
          className={styles.row}
          error={errors?.fullName?.message}
        >
          <Input
            type="email"
            id="email"
            {...register("email", { required: "this field is required" })}
          />
        </FormRow>

        <FormRow
          label="password"
          className={styles.row}
          error={errors?.fullName?.message}
        >
          <Input
            type="password"
            id="password"
            {...register("password", { required: "this field is required" })}
          />
        </FormRow>

        <FormRow
          label="passwordConfirm"
          className={styles.row}
          error={errors?.fullName?.message}
        >
          <Input
            type="password"
            id="passwordConfirm"
            {...register("passwordConfirm", {
              required: "this field is required",
            })}
          />
        </FormRow>

        <FormRow>
          <Button onClick={handleSubmit}>Sign Up</Button>
        </FormRow>
      </Form>
    </main>
  );
}
