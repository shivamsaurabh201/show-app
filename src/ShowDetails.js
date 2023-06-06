import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShowDetails.css'; // Import the ShowDetails.css file for styling

const ShowDetails = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
      });
  }, [id]);

  return (
    <div className="show-details-container">
      {show ? (
        <div className="show-details-card">
          <h1>{show.name}</h1>
          <p>{show.summary}</p>
          <button onClick={() => console.log('Book ticket:', show.name)}>Book Ticket</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowDetails;
