/* eslint-disable no-underscore-dangle */
import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getById } from '../../redux/actions/actionsCreators';

function schoolDetail() {
  const { schoolId } = useParams();
  const dispatch = useDispatch();
  const school = useSelector((store) => store.itemSelected);
  const { activities } = school;
  useEffect(() => {
    dispatch(getById(schoolId));
  }, []);

  return (
    <section className="school-detail">
      <section className="school-detail__school-card">
        <h3>{school.info?.name}</h3>
        <section className="school-card__school-info">
          <img className="school-info__image" src={school?.info?.imageUrl} alt="skatepark" />
          <ul className="school-info__contact">
            <h4>Contact</h4>
            <li>
              Phone:
              {' '}
              {school?.info?.phone}
            </li>
            <li>
              Mail:
              {' '}
              {school?.info?.mail}
            </li>
            <li>
              Address:
              {' '}
              {school?.info?.address}
            </li>
          </ul>
        </section>
        <ul className="school-card__activities-list" />
        {activities?.map((activity) => (
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
                Horario:
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
            </ul>
          </li>
        ))}
      </section>
    </section>
  );
}

export default schoolDetail;
