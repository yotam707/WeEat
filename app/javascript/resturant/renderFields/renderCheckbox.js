import React from 'react';
import Form from 'react-bootstrap/lib/Form';


const renderCheckbox = ({input, label}) => {
    return <Form.Group 
                      controlId="formBasicText"
    >
        <Form.Label>{label}</Form.Label>
            <Form.Check type="checkbox"
                {...input}
                checked={input.value}
                label={label}
            />
    </Form.Group>
}


export default renderCheckbox