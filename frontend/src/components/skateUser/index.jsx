/* eslint-disable no-underscore-dangle */
import './userPage.scss';
import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../redux/actions/actionsCreators';

function schoolList() {
  const dispatch = useDispatch();
  const schools = useSelector((store) => store.schoolList);
  useEffect(() => {
    if (!schools.length) dispatch(getAll());
  }, []);
  return (
    <section className="user-page">
      <Link to="/">HOME</Link>
      <h1 className="user-page__title">SCHOOL LIST</h1>
      <ul className="user-page__school-list">
        {schools.map((school) => (
          <li key={`element:${school._id}`} className="school-list__school-element">
            <Link key={school._id} to={`/detail/${school._id}`}>{school.info.name}</Link>
            <img className="school-element__image" src={school.info.imageUrl} alt={`${school.info.name}Skatepark`} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default schoolList;
