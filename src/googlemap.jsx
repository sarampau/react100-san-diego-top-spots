import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const API_KEY = process.env.REACT_APP_API_KEY;

const mapStyles = {
  width: '100%',
  height: '400px'
};

class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Map
        google={ this.props.google }
        zoom={ 9 }
        style={ mapStyles }
        className='google-map'
        initialCenter={ { lat: 32.85, lng: -117.15 } }
        scrollwheel={ false }
        draggable={ false }
        disableDoubleCLickZoom={ false }
        zoomControl={ false }
        mapTypeControl={ false }
        scaleControl={ false }
        streetViewControl={ false }
        panControl={ false }
        rotateControl={ false }
        fullScreenControl={ false }
      >
        {
          this.props.topspots.map((topspot, i) => {
            return (
              <Marker
                key={ i }
                position={ { lat: topspot.location[0], lng: topspot.location[1] } }
              />
            );
          })
        }
      </Map>
    );
  }
}

GoogleMap.propTypes = {
  google: React.PropTypes.objectOf,
  topspots: React.PropTypes.arrayOf
};

export default GoogleApiWrapper({
  apiKey: API_KEY
})(GoogleMap);
