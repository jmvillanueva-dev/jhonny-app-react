import React from 'react';
import './App.css';
import imagenPerfil from './img/imagen-perfil.jpg';
import deporte1 from './img/deporte1.jpg';
import deporte2 from './img/deporte2.jpg';
import deporte3 from './img/deporte3.jpg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Perfil Profesional</h1>
        <div className="personal-info">
          <img src={imagenPerfil} alt="Perfil" className="profile-img" />
          <ul>
            <li><strong>Nombre:</strong> Jhonny Villanueva</li>
            <li><strong>Ubicación:</strong> Mejia, Br. Aymesa</li>
            <li><strong>Teléfono:</strong> +593 995910874 </li>
            <li><strong>Email:</strong> jhonny_villanueva7@epn.edu.ec</li>
          </ul>
        </div>
      </header>

      <section className="studies">
        <h2>Formación Académica</h2>
        <ol>
          <li>Licenciatura en Ingeniería de Software</li>
          <li>Diplomado en Desarrollo Web</li>
          <li>Curso de React Avanzado</li>
        </ol>
      </section>

      <section className="tools">
        <h2>Habilidades Técnicas</h2>
        <ul>
          <li>Visual Studio Code</li>
          <li>Git y GitHub</li>
          <li>Node.js</li>
          <li>React</li>
        </ul>
      </section>

      <section className="sports-gallery">
        <h2>Intereses Personales</h2>
        <div className="gallery">
          <div className="sport">
            <img src={deporte1} alt="Fútbol" />
            <p>Fútbol</p>
          </div>
          <div className="sport">
            <img src={deporte2} alt="Baloncesto" />
            <p>Baloncesto</p>
          </div>
          <div className="sport">
            <img src={deporte3} alt="Natación" />
            <p>Natación</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

