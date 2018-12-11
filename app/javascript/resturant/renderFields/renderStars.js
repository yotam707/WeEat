import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import StarRating from '../components/StarRating';

const renderStars = ({ input, rating, label, onStarClick, ...rest }) => {
  return (<Form.Group controlId="formBasicText">
    <Form.Label>{label}</Form.Label>
    <StarRating rating={rating} onStarClick={onStarClick} input={input} {...rest} />
  </Form.Group>);
};

export default renderStars;
