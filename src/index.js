import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseContext, Firebase } from './services/firebase';
import App from './routes/App';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('app'),
);
