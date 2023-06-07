// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const ShowDetails = () => {
//   const [show, setShow] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`https://api.tvmaze.com/shows/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setShow(data);
//       });
//   }, [id]);

//   return (
//     <div className="container mt-5">
//       {show ? (
//         <div className="card">
//           {show.image && (
//             <img src={show.image.medium} className="card-img-top" alt={show.name} />
//           )}
//           <div className="card-body">
//             <h1 className="card-title">{show.name}</h1>
//             <p className="card-text">{show.summary}</p>
//             <button className="btn btn-primary" onClick={() => console.log('Book ticket:', show.name)}>
//               Book Ticket
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ShowDetails;

