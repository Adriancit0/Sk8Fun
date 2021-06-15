import { React, useState } from 'react';

function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <section className="login">
      <form className="login__form">
        <label htmlFor="email" className="form__label--email">
          email:
          <input
            type="text"
            id="email"
            value={email}
            onChange={(createEvent) => setEmail(createEvent.target.value)}
          />
        </label>
        <label htmlFor="password" className="form__label--password">
          email:
          <input
            type="text"
            id="password"
            value={password}
            onChange={(createEvent) => setPassword(createEvent.target.value)}
          />
        </label>
      </form>
    </section>
  );
}

export default login;
