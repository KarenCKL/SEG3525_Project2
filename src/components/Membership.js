import React from 'react'
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Membership() {
  return (
    <div>
        <section id="membership">
                <Container>
                    <h3 className='text-info text-center mt-4 fs-3'>Memberships</h3>
                    <Row className='mt-3 mb-4'>
                        <Col md={3}>
                            <Card className='bg-secondary-subtle mt-4'>
                                <Card.Body>
                                    <Card.Title className='fs-5'>Single Session</Card.Title>
                                    <Card.Text className='fs-6'>$30</Card.Text>
                                    <Card.Text className='fs-6'>
                                        Perfect for those who want to drop in and play with friends anytime.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className='bg-secondary-subtle mt-4'>
                                <Card.Body>
                                    <Card.Title className='fs-5'>Monthly</Card.Title>
                                    <Card.Text className='fs-6'>$60</Card.Text>
                                    <Card.Text className='fs-6'>
                                        Best value for regular players, offering unlimited access for an entire month.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className='bg-secondary-subtle mt-4'>
                                <Card.Body>
                                    <Card.Title className='fs-5'>Annually</Card.Title>
                                    <Card.Text className='fs-6'>$650</Card.Text>
                                    <Card.Text className='fs-6'>
                                        Best value for avid players, offering unlimited access for an entire year.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className='bg-secondary-subtle mt-4'>
                                <Card.Body>
                                    <Card.Title className='fs-5'>MultiPass</Card.Title>
                                    <Card.Text className='fs-6'>$250 for 10 sessions</Card.Text>
                                    <Card.Text className='fs-6'>
                                        Flexible option allowing you to enjoy 10 sessions at your convenience.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div>
                        <Alert className='custom-alert'>
                            Note: The duration of 1 session is 2 hours.
                        </Alert>
                    </div>
                    <div className='d-flex justify-content-center mt-4'>
                        <Button as={Link} to='/' variant="primary" className='text-white py-1 px-1 capitalize' id='bookIdbtn'>Join Now</Button>
                    </div>
                </Container>
            </section>
    </div>
  )
}
