import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/form/Input';
import Button from '../../components/form/Button';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../context/userContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validateField() && password.validateField()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          name="username"
          id="password"
          type="text"
          label="Username"
          {...username}
        />
        <Input
          name="password"
          id="password"
          type="password"
          label="Password"
          {...password}
        />

        <Button>Login</Button>
      </form>
      <Link to="/login/register">Register</Link>
    </section>
  );
};

export default LoginForm;
