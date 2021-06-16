/* eslint-disable no-underscore-dangle */
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateById } from '../../redux/actions/actionsCreators';
import StandardButton from '../button';

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
    const activities = [...school.activities];
    if (!imInterested) {
      const newCurrentLike = currentLike + 1;
      setCurrentlike(newCurrentLike);
      activities[index].likes = newCurrentLike;
    } else {
      const newCurrentLike = currentLike - 1;
      setCurrentlike(newCurrentLike);
      activities[index].likes = newCurrentLike;
    }
    dispatch(updateById(schoolId, { activities }));
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

  return (
    <li key={activity?._id} className="activities-list__activitie-item">
      <ul>
        <h4>
          {activity?.description}
        </h4>
        <li>
          Level:
          {' '}
          {activity?.level}
        </li>
        <li>
          Schedule:
          {' '}
          {activity?.schedule}
        </li>
        <li>
          Price:
          {' '}
          {activity?.price?.quantity}
          /
          {activity?.price?.unity}
        </li>
        <li>
          Places:
          {' '}
          {currentPlaces}
        </li>
        <footer className="activities-item-footer">
          <StandardButton functionName={sumPrice} content="+" />
          <StandardButton functionName={substracPrice} content="-" />
          <p>
            Price:
            {' '}
            {currentPriceBook}
            /
            {activity?.price?.unity}
          </p>
          <StandardButton functionName={Booking} content=" Book " />
          <StandardButton functionName={handleImInterested} content={imInterested ? ' Im not interested ' : ' Im interested '} />
          <p>
            {activity?.likes}
            {' '}
            has interested in this ofert
          </p>
        </footer>
      </ul>
    </li>
  );
}

export default activityDetail;
