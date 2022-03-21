import React from 'react';
import ReactDOM from 'react-dom';
import App from './parts/App';
import Nav from './parts/nav';
import Fot from './parts/fot';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Nav />
      <App />
      <Fot />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

