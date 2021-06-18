import { React } from 'react';
import { Link } from 'react-router-dom';
import './homeStyle.scss';

function funnyHome() {
  return (
    <section className="home-page">
      <h2 className="home-page__title">Horarios de actividades de skate en Madrid</h2>
      <p className="home-page__subtitle">¡Elige la actividad dirigida en el horario que mejor se adapte a ti!</p>
      <section>
        <Link to="/login/user">Alumno</Link>
        <Link to="/login/school">Escuela</Link>
      </section>
    </section>
  );
}

export default funnyHome;
