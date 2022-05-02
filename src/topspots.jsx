import React from 'react';

const TopSpots = (props) => {
  const url = `https://maps.google.com/?q=${props.location[0]},${props.location[1]}`;
  return (
    <a href={ url } target='_blank' rel='noreferrer noopener'>
      <div className='well'>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </a>
  );
};

TopSpots.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  location: React.PropTypes.arrayOf
};

export default TopSpots;
