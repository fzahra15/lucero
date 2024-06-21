import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/style.css'
import './style/responsive.css'
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';
let store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

