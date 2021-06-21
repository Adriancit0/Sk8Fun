/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import InputSection from '../inputSection';
import StandardButton from '../button';
import { signUp, logIn } from '../../redux/actions/actionsCreators';

function signUpUser() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [isCreated, setIsCreated] = useState(false);
  const school = useSelector((store) => store.itemSelected);

  function createUser(event) {
    event.preventDefault();
    const newUser = {
      info: {
        name,
        phone,
        email,
        imageUrl,
        role,
        password
      }
    };
    dispatch(signUp(newUser),
      setIsCreated(true));
  }

  function logNewUser() {
    dispatch(logIn({ email, password }));
  }

  return (
    <section className="school-page">
      {!isCreated ? (
        <form className="school-page__school-creator" onSubmit={createUser}>
          <InputSection htmlFor="name" type="text" id="name" value={name} functionName={setName} content="Nombre:" />
          <InputSection htmlFor="phone" type="text" id="phone" value={phone} functionName={setPhone} content="Teléfono:" />
          <InputSection htmlFor="email" type="text" id="email" value={email} functionName={setEmail} content="Email:" />
          <InputSection htmlFor="address" type="text" id="address" value={imageUrl} functionName={setImageUrl} content="Dirección:" />
          <InputSection htmlFor="password" type="text" id="password" value={password} functionName={setPassword} content="Contraseña:" />
          <section className="user-creator__select-role">
            <label htmlFor="role">Sistema operativo</label>
            {' '}
            <br />
            <select id="role" name="role">
              <option value="" selected="selected">Selecciona</option>
              <option value="user" onClick={setRole}>Soy cliente</option>
              <option value="school" onClick={setRole}>Soy empresa</option>
            </select>
          </section>
          <StandardButton className="school-creator__submit" type="submit" content="Submit" />
        </form>
      ) : (
        <section className="school-page__confirm-modal">
          <p>Bienvenido a FunnSk8, ya eres !!!</p>
          <Link to={`/school/${school?._id}`}>
            <StandardButton onClick={logNewUser} className="confirm-modal__link" type="button" content="Go to Details" />
          </Link>
        </section>
      )}
    </section>
  );
}

export default signUpUser;
