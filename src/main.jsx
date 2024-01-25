import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXwLydtlnS0NJJbzEGSWaK6Q7VGfLZsHc",
  authDomain: "curso-react-49905.firebaseapp.com",
  projectId: "curso-react-49905",
  storageBucket: "curso-react-49905.appspot.com",
  messagingSenderId: "612535573210",
  appId: "1:612535573210:web:98d3cef29ffece540f63e3"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)