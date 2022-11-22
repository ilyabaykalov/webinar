import React from 'react';
import ReactDOM from 'react-dom/client';

import FriendsView from './views/FriendsView/FriendsView';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FriendsView/>
  </React.StrictMode>,
);
