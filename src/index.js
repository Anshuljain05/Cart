import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyApZogBexywra76X0EvNlR-qGl3QvC4gkw",
  authDomain: "cart-b3760.firebaseapp.com",
  projectId: "cart-b3760",
  storageBucket: "cart-b3760.appspot.com",
  messagingSenderId: "865767282010",
  appId: "1:865767282010:web:b79f7cf92cf6e81d720f63"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
