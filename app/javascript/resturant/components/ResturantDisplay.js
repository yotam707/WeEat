import React from 'react';
import ResturantList from './ResturantsList';
import AddNewResturant from './AddNewResturant';
import PropTypes from 'prop-types';

const ResturantDisplay = ({ resturants }) => {
  return (
    <div>
      <div>
        {resturants &&  
          <ResturantList resturants={resturants}/>
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
