import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'

import './index.css';
import Language from './Language/Language';
import Profile from './Profile/Profile';
import Contact from './Contact/Contact';
import Textos from './Textos/Textos';
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
      <Route path="/textos" element={        
        <React.StrictMode>
          <Provider store={store}>
            <Textos/>
          </Provider>
        </React.StrictMode>
      }/>

    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
