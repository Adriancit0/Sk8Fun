import { React } from 'react';
import { Link } from 'react-router-dom';
import './homeStyle.scss';

function funnyHome() {
  return (
    <section className="home-page">
      <h2 className="home-page__title">Horarios de actividades de skate en Madrid</h2>
      <p className="home-page__subtitle">¡Elige la actividad dirigida en el horario que mejor se adapte a ti!</p>
      <section className="home-page__roles">
        <section className="roles__user">
          <Link className="user__link" to="/login/user">
            <p>
              Soy alumno
            </p>
            <img src="https://trello-attachments.s3.amazonaws.com/60755d2282c14f477515af94/60bf71a999434e2988e76cda/78add4e3c839514e87df751768f194f3/alumnosApp.jpg" alt="Alumno" />
          </Link>
        </section>
        <section className="roles__admin">
          <Link className="admin__link" to="/login/school">
            <p>
              Soy escuela
            </p>
            <img src="https://trello-attachments.s3.amazonaws.com/60755d2282c14f477515af94/60bf71a999434e2988e76cda/957f49c7a72d6a9f37169edd4bc5d5b5/escuela2.jpg" alt="Skate" />
          </Link>
        </section>
      </section>
    </section>
  );
}

export default funnyHome;
