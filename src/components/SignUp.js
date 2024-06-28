import React from 'react'
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function SignUp() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container>
            <Card className='p-5 mx-auto signUpCard'>
                <h4 className='text-info mb-3'>
                    ULTIMATE MEMBERSHIP & COACHING
                </h4>
                <Row>
                    <Col md={6}>
                        <h5 className='mb-4 text-secondary'>150 Louis Pasteur, K1N 7P7, Ottawa </h5>
                    </Col>
                    <Col md={6}>
                        <h5 className='d-flex justify-content-end text-secondary'>STEP 1 OF 2</h5>
                    </Col>
                </Row>
                <h5 className='mb-4 text-info mt-4'>Your personal information</h5>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter First name"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Last name"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                className='mt-2'
                                required
                                type="text"
                                placeholder="Enter Email Address"
                            />
                            <Form.Control.Feedback type="invalid">Invalid Email Address</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom4">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                className='mt-2'
                                required
                                type="text"
                                placeholder="Enter Email Address"
                            />
                            <Form.Control.Feedback type="invalid">Invalid Phone Number</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom05">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                className='mt-2'
                                required
                                type="password"
                                placeholder="Enter a Password"
                            />
                            <Form.Control.Feedback type="invalid">Invalid Password</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom06">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                className='mt-2'
                                required
                                type="password"
                                placeholder="Confirm Password"
                            />
                            <Form.Control.Feedback type="invalid">Invalid Password</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1 mt-5">
                        <Col md="6">
                            <Button as={Link} to='/signupnext' type='submit' className='bg-secondary border-0' id="loginIdBtn">Next</Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
}
