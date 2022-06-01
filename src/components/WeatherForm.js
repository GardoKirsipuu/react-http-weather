import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WeatherForm = (props) => {
    const [city, setCity] = useState('Tartu');

    const submitHandler = (event) => {
        event.preventDefault();
        props.onChangeCity(city);
    }

    return (
        <Form className='m-2 justify-content-center align-items-center text-center' onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label className='h5'>Change city</Form.Label>
                <Form.Control className='text-center' onChange={(e) => setCity(e.target.value)}/>
            </Form.Group>
            <Button className='mt-2' type='submit'>Change</Button>
        </Form>
    );
};

export default WeatherForm;