/* eslint-disable no-underscore-dangle */
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateById } from '../../redux/actions/actionsCreators';

function activityDetail({ activity, index }) {
  const [imInterested, setImInterested] = useState(false);
  const [currentLike, setCurrentlike] = useState(activity.likes);
  // const [actualPlaces, setActualPlaces] = useState(0);
  const dispatch = useDispatch();
  const school = useSelector((store) => store.itemSelected);
  const schoolId = school._id;

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
        <footer className="activities-item-footer">
          <button type="button">+</button>
          <button type="button">-</button>
          <button type="button">Book</button>
          <button type="button" onClick={handleImInterested}>
            {imInterested ? 'Im not interested' : 'Im interested'}
          </button>
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
