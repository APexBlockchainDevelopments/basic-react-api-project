import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import SpaceFlight from './SpaceFlight';

function App() {


  return (
    <div>
      <h1>SpaceX Flights</h1>
      <SpaceFlight/>
    </div>

  );
}

export default App;
