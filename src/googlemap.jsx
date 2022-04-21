import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

// require('dotenv').config();

// const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class GoogleMap extends Component {
  render() {
    return (
      <Map
        google={ this.props.google }
        zoom={ 8 }
        style={ mapStyles }
        initialCenter={ { lat: 47.44, lng: -122.176 } }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB5Zegl8R9FKRZDn8czBgGuQlTbkjk3GTA'
})(GoogleMap);
