import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import * as ReactDOMClient from 'react-dom/client';
import { InitialDataContext } from './pages/InitialDataContext';


const container = document.getElementById('root');

// Create *and* render a root with hydration.
const app =
  <React.StrictMode>
    <InitialDataContext.Provider value={(window && window.preLoadedData) || { _data: {} }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </InitialDataContext.Provider>
  </React.StrictMode>;

const root = ReactDOMClient.hydrateRoot(container, app);




// React Route
/*
 root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
*/

// Server side rendering
/*
 root.hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
