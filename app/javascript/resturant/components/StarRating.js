import StarRatingComponent from 'react-star-rating-component';
import React from 'react';
import StarRate from '@material-ui/icons/StarRate';


const StarRating = ({ input, rating, onStarClick = ()=>{}, editing = true, ...rest }) => {
  return (
    <StarRatingComponent
      className="stars-rating"
      editing={editing}
      name="rate2"
      renderStarIcon={() => <StarRate/>}
      starCount={3}
      value={rating}
      {...rest}
      {...input}
      onStarClick={onStarClick.bind(this)} />
  );
};

export default StarRating;
