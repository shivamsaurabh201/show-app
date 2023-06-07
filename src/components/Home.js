import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Movie Shows</h1>
      <div className="row">
        {shows.map(show => (
          <div className="col-md-4 mb-4" key={show.show.id}>
            <div className="card">
              <img
                src={show.show.image?.medium || 'https://via.placeholder.com/210x295'}
                alt={show.show.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <p className="card-text">{show.show.premiered}</p>
                <Link to={`/summary/${show.show.id}`} className="btn btn-primary">
                  Show Summary
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
