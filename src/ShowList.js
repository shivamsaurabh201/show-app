// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const ShowList = () => {
//   const [shows, setShows] = useState([]);

//   useEffect(() => {
//     fetch('https://api.tvmaze.com/search/shows?q=all')
//       .then((response) => response.json())
//       .then((data) => {
//         setShows(data);
//       });
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">TV Shows</h1>
//       <div className="row">
//         {shows.map((show) => (
//           <div className="col-md-4" key={show.show.id}>
//             <div className="card mb-4">
//               {show.show.image && (
//                 <img
//                   src={show.show.image.medium}
//                   className="card-img-top"
//                   alt={show.show.name}
//                 />
//               )}
//               <div className="card-body">
//                 <h5 className="card-title">{show.show.name}</h5>
//                 <p className="card-text">{show.show.summary}</p>
//                 <Link to={`/show/${show.show.id}`} className="btn btn-primary">
//                   Show Details
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShowList;
