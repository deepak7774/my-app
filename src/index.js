import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { HashRouter } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import store, { persistor } from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
console.warn(store)
root.render(
  <React.StrictMode>
  <Provider  store={store}>
    <PersistGate persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
