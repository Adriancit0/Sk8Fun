import { React, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import UserLogin from '../userLogin';
import SchoolLogin from '../schoolLogin';
import StandardButton from '../button';
import './homeStyle.scss';
// import { getAll } from '../../redux/actions/actionsCreators';

function funnyHome() {
  // const dispatch = useDispatch();
  // const schools = useSelector((store) => store.schoolList);
  // useEffect(() => {
  //   if (!schools.length) dispatch(getAll());
  // }, []);

  const [accessUser, setAccesUser] = useState(false);
  const [accessSchool, setAccesSchool] = useState(false);
  function handleUser() {
    setAccesUser(!accessUser);
  }
  function handleSchool() {
    setAccesSchool(!accessSchool);
  }
  return (
    <section className="home-page">
      <h2 className="home-page__title">Horarios de actividades de skate en Madrid</h2>
      <section>
        {
        accessUser ? (
          <section>
            <StandardButton type="button" functionName={handleUser} content="Back" />
            <UserLogin />
          </section>
        ) : (
          <StandardButton type="button" functionName={handleUser} content="Im User" />
        )
        }
      </section>
      <section>
        {
        accessSchool ? (
          <section>
            <StandardButton type="button" functionName={handleSchool} content="Back" />
            <SchoolLogin />
          </section>
        ) : (
          <StandardButton type="button" functionName={handleSchool} content="Im School" />
        )
        }
      </section>
    </section>
  );
}

export default funnyHome;
