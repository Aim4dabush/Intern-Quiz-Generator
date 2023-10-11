import { Outlet } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./pages/Header.jsx"
import React from 'react';

function App() {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
    </div>
  )
}

export default App
