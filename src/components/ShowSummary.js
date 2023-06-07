import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ShowSummary = () => {
  const { id } = useParams();
  const [summary, setSummary] = useState('');
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        setSummary(response.data.summary);
        setShowDetails(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleBooking = () => {
    localStorage.setItem('movieDetails', JSON.stringify(showDetails));
    // You can redirect the user to the booking form page here
  };

  return (
    <div className="container">
      <h1>Show Summary</h1>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      {showDetails && (
        <div>
          <h3>Booking Details</h3>
          <p>Movie: {showDetails.name}</p>
          <p>Genre: {showDetails.genres.join(', ')}</p>
          <p>Language: {showDetails.language}</p>
          <button className="btn btn-primary" onClick={handleBooking}>
            Book Movie Ticket
          </button>
          <Link to="/" className="btn btn-secondary ml-3">
            Go to Homepage
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShowSummary;
