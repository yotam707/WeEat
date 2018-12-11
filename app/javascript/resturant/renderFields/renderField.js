import React from 'react';
import Form from 'react-bootstrap/lib/Form';

const renderField = ({ input, label, type, ...rest }) => {
  return (<Form.Group
    controlId="formBasicText">
    <Form.Label>{label}</Form.Label>

    <Form.Control
      {...input}
      {...rest}
      type={type}
      placeholder={label}
    />
  </Form.Group>);
};


export default renderField;
