/* eslint-disable no-underscore-dangle */
import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getById, updateById } from '../../redux/actions/actionsCreators';
import StandardButton from '../button';
import './activityDetailStyle.scss';

function activityDetail({ activity, index }) {
  const [imInterested, setImInterested] = useState(false);
  const [currentLike, setCurrentlike] = useState(activity.likes);
  const [currentPriceBook, setCurrentPriceBook] = useState(0);
  const [currentPlaces, setCurrentPLaces] = useState(activity.places);
  const dispatch = useDispatch();
  const school = useSelector((store) => store.itemSelected);
  const schoolId = school._id;
  const unityPrice = activity?.price?.quantity;

  function handleImInterested() {
    setImInterested(!imInterested);
    let { popularity } = school;
    const activities = [...school.activities];
    if (!imInterested) {
      const newCurrentLike = currentLike + 1;
      popularity += 1;
      setCurrentlike(newCurrentLike);
      activities[index].likes = newCurrentLike;
    } else {
      const newCurrentLike = currentLike - 1;
      popularity -= 1;
      setCurrentlike(newCurrentLike);
      activities[index].likes = newCurrentLike;
    }
    dispatch(updateById(schoolId, { activities, popularity }));
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
    const activities = [...school.activities];
    activities[index].places = currentPlaces;
    dispatch(updateById(schoolId, { activities }));
  }

  useEffect(() => {
    dispatch(getById(schoolId));
  }, []);

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
          <section className="footer__sum-sub-buttons">
            <StandardButton type="button" functionName={sumPrice} content="+" />
            <StandardButton type="button" functionName={substracPrice} content="-" />
          </section>
          <p>
            Price:
            {' '}
            {currentPriceBook}
            /
            {activity?.price?.unity}
          </p>
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
          <p>
            {activity?.likes}
            {' '}
            personas interesadas en esta oferta
          </p>
        </footer>
      </ul>
    </li>
  );
}

export default activityDetail;
