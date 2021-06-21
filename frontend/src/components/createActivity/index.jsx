import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputSection from '../inputSection';
import StandardButton from '../button';
import { updateById, getById } from '../../redux/actions/actionsCreators';

function createActivity({ schoolId }) {
  const school = useSelector((store) => store.itemSelected);
  let { activities } = school;
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('Iniciación');
  const [schedule, setSchedule] = useState('');
  const [price, setPrice] = useState('');
  const [unityPrice, setUnityPrice] = useState('clase');
  const [places, setPlaces] = useState(5);
  function handleCreateActivity(event) {
    event.preventDefault();
    const newActivity = {
      description,
      level,
      schedule,
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

  function refresh() {
    dispatch(getById);
  }

  return (
    <>
      <form className="school-card__activity-create" onSubmit={handleCreateActivity}>
        <InputSection htmlFor="description" type="text" id="description" value={description} functionName={setDescription} content="Descripción de la actividad:" required />
        <InputSection htmlFor="level" type="text" id="level" value={level} functionName={setLevel} content="Nivel al que está orientado:" />
        <InputSection htmlFor="level" type="text" id="level" value={schedule} functionName={setSchedule} content="Horario de la actividad:" />
        <InputSection htmlFor="price" type="text" id="price" value={price} functionName={setPrice} content="Precio en €:" />
        <InputSection htmlFor="unityPrice" type="text" id="unityPrice" value={unityPrice} functionName={setUnityPrice} content="Unidad por pago:" />
        <InputSection htmlFor="places" type="text" id="places" value={places} functionName={setPlaces} content="Número de plazas:" />
        <StandardButton className="activity-create__submit" type="submit" content="Crear" />
      </form>
      <StandardButton type="button" functionName={refresh} content="Recargar" />
    </>
  );
}

export default createActivity;
