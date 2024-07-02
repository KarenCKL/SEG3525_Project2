import React from 'react'
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
export default function Coaching() {
  return (
    <section id="coaching">
                <Container>
                    <h3 className='text-info text-center mt-4 fs-3'>Coachings</h3>
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
                    <Row>
                        <Col>
                            <Alert className='custom-alert'>
                                Note: The duration of 1 session is 2 hours.
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            </section>
  )
}
