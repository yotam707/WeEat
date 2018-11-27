import React from 'react';
import { Link } from 'react-router-dom';

const ResturantFooter = (props) => (
  <div id='footer'>
    <Link className='btn btn-primary' to={`/?resturant=${props.startingResturantId}`}>
      Back to Beginning
    </Link>
  </div>
)

export default ResturantFooter