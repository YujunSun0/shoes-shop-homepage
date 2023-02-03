import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import data from './data/data';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './data/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App data={data} />
    </BrowserRouter>
  </Provider>
);

