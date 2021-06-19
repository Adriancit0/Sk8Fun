/* eslint-disable no-debugger */
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InputSection from '../inputSection';
import StandardButton from '../button';
import { updateById } from '../../redux/actions/actionsCreators';

function createActivity({ schoolId }) {
  // eslint-disable-next-line no-debugger

  const school = useSelector((store) => store.itemSelected);
  let { activities } = school;
  const dispatch = useDispatch();

  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('Iniciación');
  const [price, setPrice] = useState('');
  const [unityPrice, setUnityPrice] = useState('clase');
  const [places, setPlaces] = useState(5);
  function handleCreateActivity(event) {
    event.preventDefault();
    const newActivity = {
      description,
      level,
      price: {
        quantity: price,
        unity: unityPrice
      },
      places,
      likes: 0
    };
    const newActivities = [...activities, newActivity];
    activities = newActivities;
    dispatch(updateById(schoolId, { activities }));
  }

  return (
    <form className="school-card__activity-create" onSubmit={handleCreateActivity}>
      <InputSection htmlFor="description" type="text" id="description" value={description} functionName={setDescription} content="Descripción de la actividad:" />
      <InputSection htmlFor="level" type="text" id="level" value={level} functionName={setLevel} content="Nivel al que está orientado:" />
      <InputSection htmlFor="price" type="text" id="price" value={price} functionName={setPrice} content="Precio en €:" />
      <InputSection htmlFor="unityPrice" type="text" id="unityPrice" value={unityPrice} functionName={setUnityPrice} content="Unidad por pago:" />
      <InputSection htmlFor="places" type="text" id="places" value={places} functionName={setPlaces} content="Número de plazas:" />
      <StandardButton className="activity-create__submit" type="submit" content="Submit" />
    </form>
  );
}

export default createActivity;
