import React from 'react';
import Form from 'react-bootstrap/lib/Form';


const renderTextarea = ({ input, label, rows, ...rest }) => {
  return (<Form.Group
    controlId="formBasicText">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      as="textarea"
      {...input}
      {...rest}
      rows={rows}
      placeholder={label} />
  </Form.Group>);
};


export default renderTextarea
;
