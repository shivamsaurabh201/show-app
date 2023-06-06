import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShowList.css'; // Import the ShowList.css file for styling

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      });
  }, []);

  return (
    <div className="show-list-container">
      <h1>Movie Shows</h1>
      <div className="show-list">
        {shows.map((show) => (
          <div className="show-card" key={show.show.id}>
            <h2>{show.show.name}</h2>
            <p>{show.show.summary}</p>
            <Link to={`/show/${show.show.id}`}>Show Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
