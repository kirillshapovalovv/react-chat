import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'



// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCSFLUmJ-PA3KJdtI6oSlSE1yGDInbbJeQ",
  authDomain: "react-real-time-chat-92f38.firebaseapp.com",
  projectId: "react-real-time-chat-92f38",
  storageBucket: "react-real-time-chat-92f38.appspot.com",
  messagingSenderId: "743463982871",
  appId: "1:743463982871:web:c012b32eb426ba3cf1c952",
  measurementId: "G-5MS3BSXGVY"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext(null)

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth, 
      firestore
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
