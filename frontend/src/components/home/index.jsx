import { React, useState } from 'react';
import UserLogin from '../userLogin';
import SchoolLogin from '../schoolLogin';
import StandardButton from '../button';

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
            <StandardButton type="button" functionName={handleUser} content="Back" />
            <UserLogin />
          </section>
        ) : (
          <StandardButton type="button" functionName={handleUser} content="Im User" />
        )
        }
      </section>
      <section>
        {
        accessSchool ? (
          <section>
            <StandardButton type="button" functionName={handleSchool} content="Back" />
            <SchoolLogin />
          </section>
        ) : (
          <StandardButton type="button" functionName={handleSchool} content="Im School" />
        )
        }
      </section>
    </section>
  );
}

export default funnyHome;
