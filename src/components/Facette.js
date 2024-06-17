import * as React from 'react'
import { Container, Row, Col, Card, Form } from 'react-bootstrap'
import { useState } from 'react'; // Add this line to import useState


export default function Facette() {
    const initialCheckboxes = [
        { isChecked: false, message: 'Message 1' },
        { isChecked: false, message: 'Message 2' },
        { isChecked: false, message: 'Message 3' },
        { isChecked: false, message: 'Message 4' },
        { isChecked: false, message: 'Message 5' },
    ];

    const [checkboxes, setCheckboxes] = useState(initialCheckboxes);


    const handleCheckboxChange = (index) => (event) => {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index] = event.target.checked;
        setCheckboxes(newCheckboxes);
    };
    return (
        <div>
            <Container>
                <h3 className='text-info text-center mt-4 fs-3'>The Ultimate Badminton Guide</h3>
                <Row>
                    <Col md={3}>
                        <Card className='facette mt-5 mb-5' >
                            <Card.Body>
                                <Card.Title className='text-info fs-4'>Content</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>
                                           <span className='chapter'>Chapter 1: </span>
                                            <ul className='mt-1'>
                                                <li>Learn the lessons</li>
                                                {checkboxes.map((checkbox, index) => (
                                                    <li key={index}>
                                                        <Form.Check
                                                            className='mt-2 ms-3'
                                                            type="checkbox"
                                                            id={`checkbox-${index}`}
                                                            label={checkbox.message}
                                                            checked={checkbox.isChecked}
                                                            onChange={handleCheckboxChange(index)}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
