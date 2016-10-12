import React from 'react';

export const Profile = ({ params, location }) => (
  <h3>Hello, {params.name} Your current location: {location.query.lat} {location.query.lng} .</h3>
);

Profile.propTypes = {
  params: React.PropTypes.object,
  location: React.PropTypes.object,
};
