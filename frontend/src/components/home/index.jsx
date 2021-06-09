import React from 'react';
import { Link } from 'react-router-dom';

function funnyHome() {
  return (
    <section>
      <h1>HOME</h1>
      <Link to="/school">SCHOOLS</Link>
      <Link to="/user">USERS</Link>
    </section>
  );
}

export default funnyHome;
