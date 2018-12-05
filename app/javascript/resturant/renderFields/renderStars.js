import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import StarRatingComponent from 'react-star-rating-component';
import StarRate from '@material-ui/icons/StarRate';

const renderStars = ({input, rating, label, onStarClick, ...rest}) => {

    return <Form.Group controlId="formBasicText">
        <Form.Label>{label}</Form.Label>
       
        <StarRatingComponent className="stars-rating"
                             name="rate2" 
                             renderStarIcon={() => <StarRate/>}
                             starCount={3}
                             value={rating}
                             {...rest}
                             {...input}
                             onStarClick={onStarClick.bind(this)}
                         />
    </Form.Group>
}


export default renderStars