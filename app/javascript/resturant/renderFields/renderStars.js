import React from 'react';
import Form from 'react-bootstrap/lib/Form';


const renderStars = ({input, label, children, ...rest}) => {
    return <Form.Group
                      controlId="formBasicText">
        <Form.Label>{label}</Form.Label>
            <Form.Control
                as="select"
                {...input}
                {...rest}
                children={ children }
            />
    </Form.Group>
}


export default renderStars