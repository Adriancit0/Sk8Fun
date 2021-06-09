/* eslint-disable no-underscore-dangle */
import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getById } from '../../redux/actions/actionsCreators';

function schoolDetail() {
  const { schoolId } = useParams();
  const dispatch = useDispatch();
  const school = useSelector((store) => store.itemSelected);
  console.log(school);
  console.log(schoolId);
  useEffect(() => {
    dispatch(getById(schoolId));
  }, []);

  return (
    <div>
      <h1>DETAIL</h1>
      <div>
        <h2>
          {school?.info?.name}
        </h2>
        <div>
          <span>id: </span>
          {school?._id}
          )
        </div>
      </div>
    </div>
  );
}

export default schoolDetail;
