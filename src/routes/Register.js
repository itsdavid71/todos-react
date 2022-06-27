import styled from "styled-components";
import { useForm } from "react-hook-form";

const Field = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
`;
const Form = styled.form`
  padding: 10px;
  box-sizing: border-box;
  margin: 20px;
  width: 450px;
`;

const Button = styled.button`
  background: #fdc931;
  border: none;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
`;

const Error = styled.div`
  background: red;
  color: white;
  padding: 10px;
`;

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    // console.log(data);
  };

  console.log(isValid);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <Input
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          placeholder="Ваше имя"
        />
        {errors.name && (
          <>
            {errors.name.type === "required" && <Error>Заполни поле</Error>}
            {errors.name.type === "minLength" && (
              <Error>Надо больше трех</Error>
            )}
          </>
        )}
      </Field>
      <Field>
        <Input
          {...register("email", { required: true })}
          type="email"
          placeholder="Ваш email"
        />
        {errors.email && <Error>Заполни</Error>}
      </Field>
      <Field>
        <Input
          {...register("password", { required: true })}
          type="password"
          placeholder="Пароль"
        />
        {errors.password && <Error>Заполни</Error>}
      </Field>
      <Button type="submit" disabled={!isValid}>
        Зарегистрироваться
      </Button>
    </Form>
  );
}

export default Register;
