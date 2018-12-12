import React from 'react';
import PropTypes from 'prop-types';

const ResturantText = (props) => (
  <div className="resturant">
    <div className="resturant-text">
      {props.resturant.name}
    </div>
    <div className="resturant-author">
      <em>— {props.resturant.cuisine}</em>
    </div>
  </div>
);

ResturantText.propTypes = {
  resturant: PropTypes.shape({
    name: PropTypes.string,
    cuisine: PropTypes.string,
  }),
};

export default ResturantText;
