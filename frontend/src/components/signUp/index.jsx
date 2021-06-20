import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import InputSection from '../inputSection';
import StandardButton from '../button';

function signUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [isCreated, setIsCreated] = useState(false);
  function handleNewSchoolValues(event) {
    event.preventDefault();
    const newUser = {
      info: {
        name,
        description,
        phone,
        email,
        imageUrl,
        address
      }
    };
    dispatch(createItem(newUser),
      setIsCreated(true));
  }
  return (
    <InputSection />
  );
}
