import React, { Component } from 'react';
// import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';
import GoogleMap from './googlemap';
// import TopSpots from './topspots';

// require('dotenv').config();

// const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topspots: []
    };
  }

  // componentWillMount() {
  //   axios.get('https://origin-top-spots-api.herokuapp.com/api/topspots')
  //     .then(res => res.data)
  //     .then(topspots => this.setState({ topspots }));
  // }

  // const mapStyles = {
  //   width: '100%',
  //   height: '100%'
  // };

  render() {
    return (
      <div className='container'>
        
        <div style={ { height: '100px', width: '100px' } }>
        <GoogleMap />
        </div>
        {/* {
          this.state.topspots.map(topspot => (
            <TopSpots
              key={ topspot.id }
              name={ topspot.name }
              description={ topspot.description }
              location={ topspot.location }
            />
          ))
        } */}
      </div>
    );
  }
}

export default App;
