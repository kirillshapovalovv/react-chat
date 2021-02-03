import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {useAuthState} from "react-firebase-hooks/auth";

import NavBar from './components/NavBar'
import AppRouter from './components/AppRouter'
import Loader from './components/Loader'
import {Context} from "./index";

import './App.css';



function App() {

  const { auth } = useContext(Context)
  const [ user, loading, error ] = useAuthState(auth);
  
  if(loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
