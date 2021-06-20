/* eslint-disable no-underscore-dangle */
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateById } from '../../redux/actions/actionsCreators';
import StandardButton from '../button';
import './activityDetailStyle.scss';

function activityDetail({ activity, index }) {
  const [contador, setContador] = useState(0);
  const [imInterested, setImInterested] = useState(false);
  const [currentLike, setCurrentlike] = useState(activity.likes);
  const [currentPriceBook, setCurrentPriceBook] = useState(0);
  const [currentPlaces, setCurrentPLaces] = useState(activity.places);
  const dispatch = useDispatch();
  const school = useSelector((store) => store.itemSelected);
  const user = useSelector((store) => store.user);
  const unityPrice = activity?.price?.quantity;

  function handleImInterested() {
    setImInterested(!imInterested);
    const newActivities = [...school?.activities];

    let { popularity } = school;
    if (!imInterested) {
      const newCurrentLike = currentLike + 1;
      newActivities[index].likes = newCurrentLike;
      popularity += 1;
      setCurrentlike(newCurrentLike);
    } else {
      const newCurrentLike = currentLike - 1;
      newActivities[index].likes = newCurrentLike;
      popularity -= 1;
      setCurrentlike(newCurrentLike);
    }
    dispatch(updateById(school?._id, { activities: newActivities, popularity }));
  }

  function sumPrice() {
    if (currentPlaces > 0) {
      setCurrentPriceBook(currentPriceBook + unityPrice);
      setCurrentPLaces(currentPlaces - 1);
    }
  }

  function substracPrice() {
    if (currentPriceBook > 0) {
      setCurrentPriceBook(currentPriceBook - unityPrice);
      setCurrentPLaces(currentPlaces + 1);
    }
  }

  function Booking() {
    const newActivities = [...school?.activities];
    newActivities[index].places = currentPlaces;
    dispatch(updateById(school?._id, { activities: newActivities }));
  }

  function deleteActivity() {
    const newActivities = [...school?.activities].splice(index, 1);
    dispatch(updateById(school?._id, { activities: newActivities }));
    setContador(contador + 1);
  }

  return (
    <li key={activity?._id} className="activities-list__activity-item">
      <ul className="activity-item__info-list">
        <h4>
          {activity?.description}
        </h4>
        <li>
          Nivel:
          {' '}
          {activity?.level}
        </li>
        <li>
          Horario:
          {' '}
          {activity?.schedule}
        </li>
        <li>
          Precio:
          {' '}
          {activity?.price?.quantity}
          {activity?.price?.unity}
        </li>
        <li>
          Plazas:
          {' '}
          {currentPlaces}
        </li>
        <footer className="activities-item__footer">
          {
            user?.user?.role !== 'school' && (
              <>
                <section className="footer__sum-sub-buttons">
                  <StandardButton type="button" functionName={sumPrice} content="+" />
                  <StandardButton type="button" functionName={substracPrice} content="-" />
                </section>
                <p>
                  Precio:
                  {' '}
                  {currentPriceBook}
                  /
                  {activity?.price?.unity}
                </p>
              </>
            )
          }
          {
            user?.user?.role !== 'school' && (
              <section className="footer__book-like-buttons">
                <StandardButton type="button" functionName={Booking} content=" Book " />
                <button
                  className="book-like-buttons__like"
                  type="button"
                  onClick={handleImInterested}
                >
                  {imInterested ? ' Im not interested ' : ' Im interested '}
                </button>
              </section>
            )
          }
          <p>
            {activity?.likes}
            {' '}
            personas interesadas en esta oferta
          </p>
          {user?.user?._id === school.info.createdBy && user?.user?.role === 'school' && (
            <StandardButton type="button" functionName={deleteActivity} content="Eliminar actividad" />
          )}
        </footer>
      </ul>
    </li>
  );
}

export default activityDetail;
