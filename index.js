import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'

import './index.css';
import Language from './Language/Language';
import Profile from './Profile/Profile';
import Contact from './Contact/Contact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={        
        <React.StrictMode>
          <Provider store={store}>
            <Language/>
            <Profile/>
            <Contact/>
          </Provider>
        </React.StrictMode>
      }/>

    </Routes>
  </BrowserRouter>

);

reportWebVitals();
