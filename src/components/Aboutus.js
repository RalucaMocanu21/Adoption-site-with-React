import React from 'react';
import { Link } from 'react-router-dom'; 
import './Aboutus.css';

function AboutUs() {
  return (
    <div>
      <main>
        <section className="about-us">
          <h1>Bun venit la Save a life!</h1>
          <div className="description">
            <p>♥ Aici este locul în care îți poți găsi următorul prieten pe viață! </p>
            <p>♥ Poți pune chiar tu un anunț în cazul în care ai găsit un <Link to="/adoptii-caini">câine</Link> sau o <Link to="/adoptii-pisici">pisică</Link> abandonate sau poți opta pentru a adopta un prieten blănos! </p>
            <p>♥ Pentru orice întrebări nu ezita să ne <Link to="/contact-us">contactezi</Link>! </p>
          </div>
          <div className="founders">
            <p>♥ Acest site a fost fondat de XY în iulie 2023 pentru a ajuta animăluțele străzii să-și găsească o casă </p>
          </div>
          <div className="history">
            <p>♥ În ultimele luni am ajutat peste 1000 de animăluțe să-și gasească o casă datorită vouă. Sperăm să ajutăm cât mai multe! </p>
          </div>
          <div className="pet-image">
            <div>
              <img src="imagine2.jpg" alt="Save a life" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Save a life</p>
      </footer>
    </div>
  );
}

export default AboutUs;
