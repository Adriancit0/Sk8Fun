/* eslint-disable no-underscore-dangle */
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createItem } from '../../redux/actions/actionsCreators';
import StandardButton from '../button';
import InputSection from '../inputSection';
import './skateSchoolStyle.scss';

function skateSchool() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [isCreated, setIsCreated] = useState(false);
  function handleNewSchoolValues(event) {
    event.preventDefault();
    const newSchool = {
      info: {
        name,
        description,
        phone,
        email,
        imageUrl,
        address
      }
    };
    dispatch(createItem(newSchool),
      setIsCreated(true));
  }
  const school = useSelector((store) => store.itemSelected);
  return (
    <section className="school-page">
      {!isCreated ? (
        <form className="school-page__school-creator" onSubmit={handleNewSchoolValues}>
          <InputSection htmlFor="name" type="text" id="name" value={name} functionName={setName} content="Name:" />
          <InputSection htmlFor="phone" type="text" id="phone" value={phone} functionName={setPhone} content="Phone:" />
          <InputSection htmlFor="email" type="text" id="email" value={email} functionName={setEmail} content="Email:" />
          <InputSection htmlFor="address" type="text" id="address" value={address} functionName={setAddress} content="Address:" />
          <InputSection htmlFor="imageUrl" type="text" id="imageUrl" value={imageUrl} functionName={setImageUrl} content="Image Url:" />
          <InputSection htmlFor="description" type="text" id="description" value={description} functionName={setDescription} content="Description:" />
          <StandardButton className="school-creator__submit" type="submit" content="Submit" />
        </form>
      ) : (
        <section className="school-page__confirm-modal">
          <p>Bienvenido a FunnSk8, acabas de registrar una escuela!!!</p>
          <Link to={`/school/${school?._id}`}>
            <StandardButton className="confirm-modal__link" type="button" content="Go to Details" />
          </Link>
        </section>
      )}
    </section>
  );
}

export default skateSchool;
