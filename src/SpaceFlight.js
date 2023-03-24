import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './SpaceFlight.css';

function SpaceFlight() {
  const [flights, setFlights] = useState([])

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v2/launches')
      .then((res) => {
        setFlights(res.data)
      })
      .catch((err) => {
        console.log("error with fetching data")
      })
  }, [])

  //SpaceX https://api.spacexdata.com/v2/launches

  return (
    <ul className='flights-list'>
      {
        flights.map((flight) => (
          <li key={flight.flight_number}>
            <div className='flight-info'>
              <img src={flight.links.mission_patch_small} alt={flight.mission_name}></img>
            </div>
            <div className='flight-data'>
              <p>Mission Name: {flight.misson_name}</p>
              <p>Flight Number: {flight.flight_number}</p>
              <p>Launch Date: {flight.launch_date_utc}</p>
              <p>Flight Details: {flight.details}</p>
              <p>Launch Year: {flight.launch_year}</p>
              <a href={flight.links.article_link}>Read more about the launch</a>
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default SpaceFlight;
