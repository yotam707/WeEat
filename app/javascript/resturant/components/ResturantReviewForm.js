
import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import Button from '@material-ui/core/Button';
import renderField from '../renderFields/renderField';
import renderSelect from '../renderFields/renderSelect';
import renderTextarea from '../renderFields/renderTextarea';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as Actions from "../actions/resturant.actions";
import { bindActionCreators } from "redux";
import StarRatingComponent from 'react-star-rating-component';
import StarRate from '@material-ui/icons/StarRate';

class ResturantReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rating:1
        }
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }
    
  render () {
    const { handleSubmit, addReview, resturantId, handleClose} = this.props;
    const { rating } = this.state;
    const submit = (review) => {
        addReview({...review, resturantId });
        handleClose();
    }
    return (
    <Form onSubmit={handleSubmit(submit)}>

        {/* <Field name="rating" component={renderSelect}
        type="select"
        label="Choose the rating">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
        </Field> */}

        <Field name="rating" label="Rating Value" component={() => 
            <StarRatingComponent
                            name="rate2" 
                            renderStarIcon={() => <StarRate/>}
                            starCount={3}
                            value={rating}
                            onStarClick={this.onStarClick.bind(this)}
                        />
        }>

        </Field>

        <Field name="reviwer_name" component={renderField}
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
    (reduxForm({ form: 'addReview', initialValues: { rating: 1}})
    (ResturantReviewForm));
  