import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ShowSummary = () => {
  const { id } = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => {
        setSummary(data.summary);
      })
      .catch(error => {
        console.error('Error fetching show summary:', error);
      });
  }, [id]);

  return (
    <div>
      <h1>Show Summary</h1>
      <p>{summary}</p>
      <Link to={`/booking/${id}`}>Book Movie Ticket</Link>
    </div>
  );
};

export default ShowSummary;
