/* eslint-disable no-underscore-dangle */
// import React from 'react';
// import { Link } from 'react-router-dom';

// function userPage() {
//   return (
//     <section>
//       <h1>USER</h1>
//       <Link to="/">HOME</Link>
//     </section>
//   );
// }

// export default userPage;

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
    <section>
      <Link to="/">HOME</Link>
      <h1>SCHOOL LIST</h1>
      <ul className="school-menu">
        {schools.map((school) => <li><Link key={school._id} to={`/detail/${school._id}`}>{school.info.name}</Link></li>)}
      </ul>
    </section>
  );
}

export default schoolList;
