import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/form/Input';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:10003/api/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input name="username" id="password" type="text" label="Username" />
        <Input name="password" id="password" type="password" label="Password" />

        <button>Login</button>
      </form>
      <Link to="/login/register">Register</Link>
    </section>
  );
};

export default LoginForm;
