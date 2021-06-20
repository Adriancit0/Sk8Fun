import React from 'react';
import { Link } from 'react-router-dom';
import './headerStyle.scss';
import { useSelector } from 'react-redux';

function header() {
  const user = useSelector((store) => store.user);
  return (
    <section className="header">
      <Link to="/" className="header__title">
        FunnySk8
      </Link>
      <nav className="header__nav-bar">
        <Link className="nav-bar__logout" to="/user">Escuelas</Link>
        {
        user.token ? (
          <Link className="nav-bar__logout" to="/logout">LogOut</Link>
        ) : (
          <Link className="nav-bar__signup" to="signup">SignUp</Link>
        )
      }
      </nav>
    </section>
  );
}

export default header;
