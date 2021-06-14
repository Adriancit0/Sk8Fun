/* eslint-disable no-underscore-dangle */
import { React } from 'react';

// import { updateById } from '../../redux/actions/actionsCreators';

function activityDetail({ activity }) {
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
