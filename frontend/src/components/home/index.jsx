import { React, useState } from 'react';
import UserLogin from '../userLogin';

function funnyHome() {
  const [accessUser, setAccesUser] = useState(false);
  function handleUser() {
    setAccesUser(!accessUser);
  }
  return (
    <section>
      <h1>HOME</h1>
      {
        accessUser ? (
          <section>
            <UserLogin />
            <button type="button" onClick={handleUser}>Back</button>
          </section>
        ) : (
          <button type="button" onClick={handleUser}>Im User</button>
        )
      }

    </section>
  );
}

export default funnyHome;
