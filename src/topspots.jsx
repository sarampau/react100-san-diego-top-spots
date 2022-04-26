import React from 'react';

const TopSpots = (props) => {
  const url = `https://maps.google.com/?q=${props.location[0]},${props.location[1]}`;
  return (
    <div className='well'>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <a href={ url }>Google Link</a>
    </div>
  );
};

TopSpots.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  location: React.PropTypes.arrayOf
};

export default TopSpots;
