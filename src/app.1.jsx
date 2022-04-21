import React, { Component } from 'react';
// import { Wrapper, Status } from '@googlemaps/react-wrapper';
import axios from 'axios';
import TopSpots from './topspots';
import GoogleMap from './googlemap';

// require('dotenv').config();

// const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios.get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(res => res.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>San Diego Top Spots</h1>
          <p>A list of the top 30 places to see in San Diego, California</p>
        </div>
        <div style={ { height: '100px', width: '100px' } }>
          <GoogleMap />
        </div>
        {
          this.state.topspots.map(topspot => (
            <TopSpots
              key={ topspot.id }
              name={ topspot.name }
              description={ topspot.description }
              location={ topspot.location }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
