import React, { useState } from 'react';

const BookingForm = ({ showId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Handle the form submission (e.g., send data to server)
    // You can store the movie details in local/session storage here
    const movieDetails = {
      showId,
      name,
      email
    };
    localStorage.setItem('movieDetails', JSON.stringify(movieDetails));
  };
  

  return (
    <div>
      <h1>Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
