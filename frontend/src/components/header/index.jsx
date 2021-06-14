import React from 'react';
import { Link } from 'react-router-dom';
import './headerStyle.scss';

function header() {
  return (
    <section className="header">
      <h1 className="header__title">FunnySk8</h1>
      <nav className="header__nav-bar">
        <Link className="nav-bar__home" to="/">HOME</Link>
        <Link className="nav-bar__school-list" to="/user">LIST</Link>
      </nav>
    </section>
  );
}

export default header;
