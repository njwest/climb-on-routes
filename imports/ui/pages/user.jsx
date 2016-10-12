import React from 'react';

export const User = ({ params, location }) => (
  <div>
    <h1>Hello, {params.name} </h1>
    <h2>Your current location: latitude: {location.query.lat}, longitude: {location.query.lng}.</h2>
  </div>
);

User.propTypes = {
  params: React.PropTypes.object,
  location: React.PropTypes.object,
};
