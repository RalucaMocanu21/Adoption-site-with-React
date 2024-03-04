import React, { useState, useEffect } from 'react';
import './AdoptiiCaini.css';

const AdoptiiCaini = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    // Fetch dog adoption data from the server (replace with your API endpoint)
    fetch('/api/dogs')
      .then(response => response.json())
      .then(data => setDogs(data))
      .catch(error => console.error('Error fetching dogs:', error));
  }, []);

  return (
    <div className="adoptii-caini-container">
      <h1>Adoptii Caini</h1>
      <div className="dog-list">
        {dogs.map(dog => (
          <div key={dog.id} className="dog-card">
            <img src={dog.image} alt={dog.name} />
            <div className="dog-details">
              <h2>{dog.name}</h2>
              <p>{dog.description}</p>
              <button onClick={() => adoptDog(dog.id)}>Adoptă</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const adoptDog = (dogId) => {
  // Implement dog adoption logic here (e.g., send a request to the server)
  console.log(`Adopting dog with ID: ${dogId}`);
};

export default AdoptiiCaini;
