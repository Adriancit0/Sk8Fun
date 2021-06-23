/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateById, getById } from '../../redux/actions/actionsCreators';
import StandardButton from '../button';
import './activityDetailStyle.scss';

function activityDetail({ activity, index }) {
  const dispatch = useDispatch();
  const school = useSelector((store) => store.itemSelected);
  const user = useSelector((store) => store.user);
  const [imInterested, setImInterested] = useState(false);
  const [currentPriceBook, setCurrentPriceBook] = useState(0);
  const [currentPlaces, setCurrentPLaces] = useState(activity.places);
  const unityPrice = activity?.price?.quantity;
  const [currentPopularity, setCurrentPopulatity] = useState(school?.popularity);
  const [currentLike, setCurrentlike] = useState(school?.activities[index]?.likes);

  function handleImInterested() {
    setImInterested(!imInterested);
    let newActivities = [...school?.activities];
    let actualCurrentPopularity;
    if (!imInterested) {
      actualCurrentPopularity = currentPopularity + 1;
      const newCurrentLike = currentLike + 1;
      newActivities[index].likes = newCurrentLike;
      setCurrentPopulatity(actualCurrentPopularity);
      setCurrentlike(newCurrentLike);
    } else {
      actualCurrentPopularity = currentPopularity - 1;
      const newCurrentLike = currentLike - 1;
      newActivities[index].likes = newCurrentLike;
      newActivities = [...newActivities];
      setCurrentPopulatity(actualCurrentPopularity);
      setCurrentlike(newCurrentLike);
    }
    dispatch(updateById(school?._id, { popularity: actualCurrentPopularity }));
    dispatch(updateById(school?._id,
      {
        activities: newActivities
      }));
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
  }
  useEffect(() => {
    dispatch(getById(school?._id));
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
          {
            user?.user?.role !== 'school' && (
              <>
                <section className="footer__sum-sub-buttons">
                  <StandardButton testid="sum-button" type="button" functionName={sumPrice} content="+" />
                  <StandardButton testid="subs-button" type="button" functionName={substracPrice} content="-" />
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
                <StandardButton testid="booking-button" type="button" functionName={Booking} content=" Book " />
                <button
                  data-testid="interested-button"
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
          {user?.user?._id === school?.info?.createdBy && user?.user?.role === 'school' && (
            <StandardButton testid="delete-activity-button" type="button" functionName={deleteActivity} content="Eliminar actividad" />
          )}
        </footer>
      </ul>
    </li>
  );
}

export default activityDetail;
