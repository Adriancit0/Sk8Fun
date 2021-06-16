import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import InputSection from '../inputSection';
import StandardButton from '../button';

function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   function handleLogin() {
  //     event.preventDefault();
  //     const user = {
  //       email,
  //       password
  //     };
  //     dispatchEvent()
  //   }
  return (
    <section className="login">
      <h2>Register your school</h2>
      <form className="login__form">
        <InputSection htmlFor="email" type="text" id="email" value={email} functionName={setEmail} content="Email" />
        <InputSection htmlFor="password" type="password" id="password" value={password} functionName={setPassword} content="Password" />
        <Link to="/school">
          <StandardButton type="submit" content="Login" />
        </Link>
      </form>
    </section>
  );
}

export default login;
