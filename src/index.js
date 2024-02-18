import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; 
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { thunk }  from 'redux-thunk';
import './index.css'; 
import reportWebVitals from './reportWebVitals';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
import App from './Containers/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

if ('serviceWorker' in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/service-worker.js`).then(
    registration => {
      console.log('Service worker registration succeeded:', registration);
    },
    /*catch*/ error => {
      console.error(`Service worker registration failed: ${error}`);
    }
  );
} else {
  console.error('Service workers are not supported.');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <Provider store = {store}>

    <App />

  </Provider>

  </React.StrictMode>
);

serviceWorkerRegistration.register();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 