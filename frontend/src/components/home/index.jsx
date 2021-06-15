import { React, useState } from 'react';
import UserLogin from '../userLogin';
import SchoolLogin from '../schoolLogin';

function funnyHome() {
  const [accessUser, setAccesUser] = useState(false);
  const [accessSchool, setAccesSchool] = useState(false);
  function handleUser() {
    setAccesUser(!accessUser);
  }
  function handleSchool() {
    setAccesSchool(!accessSchool);
  }
  return (
    <section>
      <h1>HOME</h1>
      <section>
        {
        accessUser ? (
          <section>
            <button type="button" onClick={handleUser}>Back</button>
            <UserLogin />
          </section>
        ) : (
          <button type="button" onClick={handleUser}>Im User</button>
        )
        }
      </section>
      <section>
        {
        accessSchool ? (
          <section>
            <button type="button" onClick={handleSchool}>Back</button>
            <SchoolLogin />
          </section>
        ) : (
          <button type="button" onClick={handleSchool}>Im School</button>
        )
        }
      </section>
    </section>
  );
}

export default funnyHome;
