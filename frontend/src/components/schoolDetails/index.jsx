/* eslint-disable no-underscore-dangle */
import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getById } from '../../redux/actions/actionsCreators';

function schoolDetail() {
  const { schoolId } = useParams();
  const dispatch = useDispatch();
  const school = useSelector((store) => store.itemSelected);
  // const { activities } = school;
  useEffect(() => {
    dispatch(getById(schoolId));
  }, []);

  return (
    <section className="school-detail">
      <section className="school-detail__school-card">
        <h3>{school.info?.name}</h3>
        <ul className="school-card__contact">
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
            Adress:
            {' '}
            {school?.info?.adress}
          </li>
        </ul>
      </section>
    </section>
  );
}

export default schoolDetail;
