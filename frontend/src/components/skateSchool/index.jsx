/* eslint-disable no-underscore-dangle */
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createItem } from '../../redux/actions/actionsCreators';

function skateSchool() {
  const itemSelected = useSelector((store) => store.itemSelected);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [address, setAddress] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
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
    dispatch(createItem(newSchool));
  }
  return (
    <form className="school-creator" onSubmit={handleNewSchoolValues}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          value={name}
          onChange={(createEvent) => setName(createEvent.target.value)}
        />
      </label>
      <label htmlFor="name">
        Description:
        <input
          type="text"
          id="description"
          value={description}
          onChange={(createEvent) => setDescription(createEvent.target.value)}
        />
      </label>
      <label htmlFor="phone">
        Phone:
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(createEvent) => setPhone(createEvent.target.value)}
        />
      </label>
      <label htmlFor="mail">
        Mail:
        <input
          type="text"
          id="mail"
          value={mail}
          onChange={(createEvent) => setMail(createEvent.target.value)}
        />
      </label>
      <label htmlFor="address">
        Address:
        <input
          type="text"
          id="address"
          value={address}
          onChange={(createEvent) => setAddress(createEvent.target.value)}
        />
      </label>
      <label htmlFor="imageUrl">
        ImageUrl:
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(createEvent) => setImageUrl(createEvent.target.value)}
        />
      </label>
      <Link to={`/school/${itemSelected?._id}`}>
        <button type="submit">Sumbit</button>
      </Link>
    </form>

  );
}

export default skateSchool;
