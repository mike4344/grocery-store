import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store/index';
import { Provider } from 'react-redux'
import {populateProduce} from './store/Produce'
import { populateCart } from './store/cart';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.populateProduce = populateProduce
  window.populateCart = populateCart
}

function Root() {
  return (
   <Provider store={store}>
     <BrowserRouter>
      <App />
     </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
