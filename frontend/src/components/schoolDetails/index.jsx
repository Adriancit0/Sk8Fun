/* eslint-disable no-underscore-dangle */
import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteById, getById } from '../../redux/actions/actionsCreators';
import ActivityDetail from '../activityDetail';
import StandardButton from '../button';
import CreateActivity from '../createActivity';
import './schoolDetailStyle.scss';

function schoolDetail() {
  const [isDelete, setIsDelete] = useState(false);
  const { schoolId } = useParams();
  const dispatch = useDispatch();
  const school = useSelector((store) => store.itemSelected);
  const { activities } = school;

  useEffect(() => {
    dispatch(getById(schoolId));
  }, [isDelete]);

  function handleDelete(id) {
    dispatch(deleteById(id));
    setIsDelete(true);
  }

  return (
    school && (
      <section className="school-detail">
        {isDelete ? (
          <section className="school-detail__modal-comfirm">
            <p>Tu escuela ha sido eliminada</p>
            <Link to="/"><button className="modal-comfirm__link" type="button">GO HOME</button></Link>
          </section>
        ) : (
          <section className="school-detail__school-card">
            <h3 className="school-card__title">{school.info?.name}</h3>
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
            <section className="school-card__description">
              {school?.info?.description}
            </section>
            {activities?.length ? (
              <ul className="school-card__activities-list">
                {activities?.map((activity, index) => (
                  <ActivityDetail key={activity?._id} activity={activity} index={index} />
                ))}
              </ul>
            ) : (
              <p>En estos momentos no tenemos actividades disponibles</p>
            )}
            <StandardButton type="button" className="school-card__delete-button" functionName={() => handleDelete(schoolId)} content="Delete School" />
            <CreateActivity schoolId={schoolId} />
          </section>
        )}
      </section>
    )
  );
}

export default schoolDetail;
