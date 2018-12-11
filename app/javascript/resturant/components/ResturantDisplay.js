import React from 'react';
import ResturantList from './ResturantsList';
import AddNewResturant from './AddNewResturant';
import PropTypes from 'prop-types';

const ResturantDisplay = ({ resturants }) => {
  return (
    <div>
      <div>
        {resturants.length > 0 ? (
          <ResturantList resturants={resturants}/>)
          : (<h2>No Resturants</h2>)
        }
      </div>
      <AddNewResturant />
    </div>
  );
};

ResturantDisplay.propTypes = {
  resturants: PropTypes.object,
};

export default ResturantDisplay;
