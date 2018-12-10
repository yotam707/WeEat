import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import Button from '@material-ui/core/Button';
import renderField from '../renderFields/renderField';
import RenderStars from '../renderFields/renderStars';
import renderTextarea from '../renderFields/renderTextarea';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as Actions from "../actions/resturant.actions";
import { bindActionCreators } from "redux";

class ResturantReviewForm extends React.Component {
    state = {
        rating: 1,
    }

    onStarClick = (nextValue, prevValue, name) => { 
        this.setState({ rating: nextValue });
      }
    
  render () {
    const { handleSubmit, addReview, resturantId, handleClose} = this.props;
    const { rating } = this.state;
    const submit = (review) => {
        addReview({...review, resturant_id: resturantId, rating });
        handleClose();
    }
    return (
    <Form onSubmit={handleSubmit(submit)}>
        <RenderStars rating={rating} onStarClick={this.onStarClick} label="Rating Value" />

        <Field name="reviewer_name" component={renderField}
        label="Name of reviwer"
        type="input" />

        <Field name="comment" 
        component={renderTextarea}
        type="textarea"
        label="Resturant review" />
       
        <Button variant="contained" color="primary" type="submit">
            Post Review
        </Button>
      </Form>
    );
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);


export default connect(null, mapDispatchToProps)
    (reduxForm({ form: 'addReview', 
    enableReinitialize: true})
    (ResturantReviewForm));
  