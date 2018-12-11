import React from 'react';
import { Field, reduxForm } from 'redux-form';
import SearchInput from '../components/SearchInput';

class ResturantSearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSearchInput = (field) => {
    return (
      <SearchInput onChange={field.input.onChange}
        debounceTimeout={this.props.debounceTimeout} />
    );
  }

  render() {
    return (
      <Field name="searchQuery" component={this.renderSearchInput} type="text"/>
    );
  }
}

ResturantSearchForm = reduxForm({
  form: 'search',
})(ResturantSearchForm);

export default ResturantSearchForm;

