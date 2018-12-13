import React from 'react';
import ResturantList from './ResturantsList';
import AddNewResturant from './AddNewResturant';
import PropTypes from 'prop-types';

const ResturantDisplay = ({ resturants }) => {
  return (
    <React.Fragment>
      <React.Fragment>
        {resturants.length > 0 ? (
          <ResturantList resturants={resturants}/>)
          : (<h2>No Resturants</h2>)
        }
      </React.Fragment>
      <AddNewResturant />
    </React.Fragment>
  );
};

ResturantDisplay.propTypes = {
  resturants: PropTypes.array,
};

export default ResturantDisplay;
