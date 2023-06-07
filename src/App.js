// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import ShowList from './ShowList';
// import ShowDetails from './ShowDetails';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route exact path="/" component={ShowList} />
//           <Route path="/show/:id" component={ShowDetails} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ShowSummary from './components/ShowSummary';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/summary/:id" component={ShowSummary} />
      </Switch>
    </Router>
  );
}

export default App;
