import React from 'react';

function WeatherCard({ city, temperature, condition }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    width: '200px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const tempStyle = {
    fontSize: '2em',
    margin: '10px 0'
  };

  return (
    <div style={cardStyle}>
      <h3>{city}</h3>
      <div style={tempStyle}>Temp: {temperature}°C</div>
      <p>{condition}</p>
    </div>
  );
}

export default WeatherCard;
