import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import StarRate from '@material-ui/icons/StarRate';

const renderStarsNoForm = ({input, rating, onStarClick, ...rest}) => 

    <StarRatingComponent className="stars-rating"
                             name="rate2" 
                             renderStarIcon={() => <StarRate/>}
                             starCount={3}
                             value={rating}
                             {...rest}
                             {...input}
                             onStarClick={onStarClick.bind(this)}
                         />


export default renderStarsNoForm