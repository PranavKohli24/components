import React from 'react';

function NetflixCard({ show }) {
  return (
    <div style={styles.card}>
      <img src={show.image} alt={show.title} style={styles.image} />
      <div style={styles.info}>
        <h4 style={styles.title}>{show.title}</h4>
        <p style={styles.genre}>{show.genre}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: '180px',
    margin: '10px',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#141414',
    color: '#fff',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  image: {
    width: '100%',
    height: '270px',
    objectFit: 'cover',
  },
  info: {
    padding: '8px',
  },
  title: {
    fontSize: '16px',
    margin: '4px 0',
  },
  genre: {
    fontSize: '12px',
    color: '#aaa',
  },
};

export default NetflixCard;
