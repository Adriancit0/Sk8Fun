/* eslint-disable no-underscore-dangle */
import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getById, deleteById } from '../../redux/actions/actionsCreators';

function schoolDetail() {
  const [isDelete, setIsDelete] = useState(false);
  const { schoolId } = useParams();
  const dispatch = useDispatch();
  const school = useSelector((store) => store.itemSelected);
  const { activities } = school;
  useEffect(() => {
    dispatch(getById(schoolId));
  }, []);
  function handleDelete(id) {
    dispatch(deleteById(id));
    setIsDelete(true);
  }

  return (
    <section className="school-detail">
      {isDelete ? (
        <section className="school-detail__modal-comfirm">
          <p>Tu escuela ha sido eliminada</p>
          <Link to="/"><button className="modal-comfirm__link" type="button">GO HOME</button></Link>
        </section>
      ) : (
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
          ))}
          <button type="button" className="school-card__delete-button" onClick={() => handleDelete(schoolId)}>
            Delete School
          </button>
        </section>
      )}
    </section>
  );
}

export default schoolDetail;
