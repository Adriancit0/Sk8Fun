/* eslint-disable no-debugger */
import { React, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import InputSection from '../inputSection';
import StandardButton from '../button';
import './userLoginStyle.scss';
import { logIn } from '../../redux/actions/actionsCreators';

function loginPage() {
  const { role } = useParams();
  const [isLoged, setIsLoged] = useState(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function loginUser(event) {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setIsLoged(true);
  }

  return (
    <section className="login">
      { !isLoged ? (
        <form className="login__form" onSubmit={loginUser}>
          <InputSection htmlFor="email" type="text" id="email" value={email} functionName={setEmail} content="Email" />
          <InputSection htmlFor="password" type="password" id="password" value={password} functionName={setPassword} content="Password" />
          <StandardButton type="submit" content="Login" />
        </form>
      ) : (
        <>
          {
           role === 'user' ? (
             <Link to="/user">Accede a la lista</Link>
           )
             : (
               <Link to="/school">Accede a tu escuela</Link>
             )
        }

        </>
      )}

    </section>
  );
}

export default loginPage;
