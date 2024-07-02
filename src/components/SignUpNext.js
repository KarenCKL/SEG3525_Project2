import React from 'react'
import { Container, Row, Col, Form, Card, Button, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function SignUpNext() {
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
                <Row>
                    <Col>
                        <h4 className='text-info mb-3'>
                            CHECKOUT
                        </h4></Col>
                    <Col md={6}>
                        <h5 className='d-flex justify-content-end text-secondary'>STEP 2 OF 2</h5>
                    </Col>
                </Row>
                <h5 className='mb-4 text-info mt-4'>Billing Address</h5>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your Address"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your City"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Col md={6}>
                        <Form.Label>Select a Province</Form.Label>
                            <FloatingLabel
                                controlId="floatingSelectGrid"
                            >
                                <Form.Select aria-label="Floating label select example" className='py-0 ps-4 mt-2'>
                                    <option value="1">Alberta</option>
                                    <option value="2">British Columbia</option>
                                    <option value="3">Ontario</option>
                                    <option value="4">Québec</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Form.Group as={Col} md="6" controlId="validationCustom4">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                className='mt-2'
                                required
                                type="text"
                                placeholder="Enter Email Address"
                            />
                            <Form.Control.Feedback type="invalid">Invalid Email Address</Form.Control.Feedback>
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
                    <Row className="mb-1 mt-5 justify-content-end">
                        <Col md="6">
                            <Button as={Link} to='/signup' className='bg-secondary border-0' id="loginIdBtn">Previous</Button>
                        </Col>
                        <Col md="6" className='d-flex justify-content-end'>
                            <Button type="submit" className='bg-primary border-0' id="loginIdBtn">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}
