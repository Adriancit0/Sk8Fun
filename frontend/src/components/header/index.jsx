import React from 'react';
import { Link } from 'react-router-dom';
import './headerStyle.scss';

function header() {
  return (
    <section className="header">
      <h1>FunnySk8</h1>
      <Link className="header__nav--home" to="/">HOME</Link>
      <Link className="header__nav--school-list" to="/user">LIST</Link>
    </section>
  );
}

export default header;
