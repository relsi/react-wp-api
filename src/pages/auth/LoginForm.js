import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/form/Input';
import Button from '../../components/form/Button';
import useForm from '../../hooks/useForm';
import getToken from '../../api/endpoints/getToken';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validateField() && password.validateField()) {
      const { url, options } = getToken({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
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
