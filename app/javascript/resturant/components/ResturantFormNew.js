import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import renderField from '../renderFields/renderField';
import renderSelect from '../renderFields/renderSelect';
import renderCheckbox from '../renderFields/renderCheckbox';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as Actions from "../actions/resturant.actions";
import { bindActionCreators } from "redux";

class ResturantFormNew extends React.Component {
    constructor(props){
        super(props);
    }
    
  render () {
    const { handleSubmit, addResturant} = this.props;
    const submit = (resturant) => addResturant({ resturant});
    return (
    <Form onSubmit={handleSubmit(submit)}>

      <Field name="name" 
      component={renderField}
      type="input"
      label="Resturant Name" />
       

      <Field name="cuisine" component={renderSelect}
      type="select"
      label="Cuisine selection">
            <option>Choose one...</option>
            <option>Japanease</option>
            <option>Indian</option>
            <option>Thai</option>
            <option>Burgers</option>
            <option>Israeli</option>
      </Field>
        

        <Field name="address" component={renderField}
        label="Resturant address"
        type="input" />
        
        <Field name="max_delivery_time" component={renderField}
        type="number"
        label="Resturant Max Delivery Time" />

         <Field name="tenbis" component={renderCheckbox}
         type="checkbox"
         label="Resturant 10 Bis" />
       
        <Button variant="primary" type="submit">
            Add
        </Button>
      </Form>
    );
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(null, mapDispatchToProps)
    (reduxForm({ form: 'addRestaurant', initialValues: { tenbis: true } })
    (ResturantFormNew));
  