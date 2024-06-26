import React from 'react';
import { Container, Row, Col, Form, Card, Button, Table } from 'react-bootstrap';
import court from '../assets/court1.jpg';
import { Link } from 'react-router-dom';

export default function Booking() {
    return (
        <div>
            <Container className='mt-5 mb-5'>
                <Row>
                    <Col xl={4} lg={6}>
                        <img src={court} style={{ width: '100%' }} alt="Badminton court at Ottawa Badminton Club" />
                    </Col>
                    <Col xl={8} lg={6}>
                        <Card style={{ width: '100%' }} className='py-3 ps-xl-5 session'>
                            <Card.Body>
                                <Card.Title className='text-info fs-4'>Book a session</Card.Title>
                                <Row>
                                    <Col>
                                        <p className='Font mt-4'>Select a Date</p>
                                        <Form.Control type="date" id='date' style={{ width: '300px' }} />
                                    </Col>
                                    <Col>
                                        <p className='Font mt-4'>Select a Time</p>
                                        <Form.Control type="time" id='time' style={{ width: '300px' }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className='Font mt-4'>Select an Available Session</p>
                                        <Form.Select aria-label="Select an Available Session" className="custom-select" style={{ width: '300px' }}>
                                            <option value="1">Open Play</option>
                                            <option value="2">Beginner Level</option>
                                            <option value="3">Intermediate Level</option>
                                            <option value="4">Advanced Level</option>
                                        </Form.Select>
                                    </Col>
                                    <Col className='mt-lg-2 pt-lg-3'>
                                        <Button as={Link} to='/submit' variant="secondary" className='text-white py-1 px-1 capitalize mt-5' id="submitBtn" style={{ width: '300px' }}>Submit</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <div className="d-flex justify-content-center mt-5 mb-3 text-info fst-italic">
                        <h3>Our Schedule</h3>
                    </div>
                    <div className='mb-4'>
                        <Table responsive="sm" bordered hover>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                    <th>Sunday</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>08:00-10:00</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>10:00-12:00</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>12:00-14:00</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>14:00-16:00</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>16:00-18:00</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>18:00-20:00</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>20:00-22:00</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
