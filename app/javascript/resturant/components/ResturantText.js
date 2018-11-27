import React from 'react';

const ResturantText = (props) => (
  <div className='resturant'>

    <div className='resturant-text'>
      {props.resturant.name}
    </div>
    <div className='resturant-author'>
      <em>— {props.resturant.cuisine}</em>
    </div>
  </div>
)

export default ResturantText