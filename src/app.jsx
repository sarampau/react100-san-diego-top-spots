import React, { Component } from 'react';
import axios from 'axios';
import TopSpots from './topspots';

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
