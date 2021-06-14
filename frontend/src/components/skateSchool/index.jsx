/* eslint-disable no-underscore-dangle */
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createItem } from '../../redux/actions/actionsCreators';
import './skateSchoolStyle.scss';

function skateSchool() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
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
        mail,
        imageUrl,
        address
      }
    };
    dispatch(createItem(newSchool),
      setIsCreated(true));
  }
  const itemSelected = useSelector((store) => store.itemSelected);
  return (
    <section className="school-page">
      {!isCreated ? (
        <form className="school-page__school-creator" onSubmit={handleNewSchoolValues}>
          <label className="school-creator__info-catcher" htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              value={name}
              onChange={(createEvent) => setName(createEvent.target.value)}
            />
          </label>
          <label className="school-creator__info-catcher" htmlFor="name">
            Description:
            <input
              type="text"
              id="description"
              value={description}
              onChange={(createEvent) => setDescription(createEvent.target.value)}
            />
          </label>
          <label className="school-creator__info-catcher" htmlFor="phone">
            Phone:
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(createEvent) => setPhone(createEvent.target.value)}
            />
          </label>
          <label className="school-creator__info-catcher" htmlFor="mail">
            Mail:
            <input
              type="text"
              id="mail"
              value={mail}
              onChange={(createEvent) => setMail(createEvent.target.value)}
            />
          </label>
          <label className="school-creator__info-catcher" htmlFor="address">
            Address:
            <input
              type="text"
              id="address"
              value={address}
              onChange={(createEvent) => setAddress(createEvent.target.value)}
            />
          </label>
          <label className="school-creator__info-catcher" htmlFor="imageUrl">
            ImageUrl:
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(createEvent) => setImageUrl(createEvent.target.value)}
            />
          </label>
          <button className="school-creator__submit" type="submit">Submit</button>
        </form>
      ) : (
        <section className="school-page__confirm-modal">
          <p>Bienvenido a FunnSk8, acabas de registrar una escuela!!!</p>
          <Link to={`/school/${itemSelected?._id}`}>
            <button className="confirm-modal__link" type="button">
              Go to Details
            </button>
          </Link>
        </section>
      )}
    </section>
  );
}

export default skateSchool;
