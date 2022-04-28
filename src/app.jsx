import React, { Component } from 'react';
import axios from 'axios';
import TopSpots from './topspots';
import GoogleMap from './googlemap';

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
        <div className='header'>
          <h1>San Diego Top Spots</h1>
          <p>A list of the top 30 places to see in San Diego, California</p>
        </div>
        <div className='row'>
          <div className='col-1'>
            <GoogleMap
              topspots={ this.state.topspots }
            />
          </div>
          <div className='col-2'>
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
        </div>
      </div>
    );
  }
}

export default App;
