/* eslint-disable jsx-a11y/anchor-has-content */
import * as React from 'react'
import { Container, Row, Col, Card, Form, Button, Pagination } from 'react-bootstrap'
import { useState } from 'react';
import guide from '../assets/guide.jpeg';

export default function Facette() {
    const initialCheckboxesChapter1 = [
        { isChecked: false, message: 'Boundaries' },
        { isChecked: false, message: 'Double play' },
        { isChecked: false, message: 'Faults' },
        { isChecked: false, message: 'Scoring' },
        { isChecked: false, message: 'Serves' },
    ];

    const initialCheckboxesChapter2 = [
        { isChecked: false, message: 'Court sprints' },
        { isChecked: false, message: 'Lunges' },
        { isChecked: false, message: 'Quick stepping' },
        { isChecked: false, message: 'Shuffling' },
    ];
    const initialCheckboxesChapter3 = [
        { isChecked: false, message: 'Learn to play at different speed' },
    ];
    const initialCheckboxesChapter4 = [
        { isChecked: false, message: 'Flat serve' },
        { isChecked: false, message: 'High serve' },
        { isChecked: false, message: 'Play your serves strategically' },
        { isChecked: false, message: 'Slices serves' },
        { isChecked: false, message: 'Use good technique' },
    ];
    const initialCheckboxesChapter5 = [
        { isChecked: false, message: 'Focus on the process' },
        { isChecked: false, message: 'Stay positive' },
        { isChecked: false, message: 'Take deep breaths' },
        { isChecked: false, message: 'Visualize success' },
    ];


    const [checkboxesChapter1, setCheckboxesChapter1] = useState(initialCheckboxesChapter1);
    const [checkboxesChapter2, setCheckboxesChapter2] = useState(initialCheckboxesChapter2);
    const [checkboxesChapter3, setCheckboxesChapter3] = useState(initialCheckboxesChapter3);
    const [checkboxesChapter4, setCheckboxesChapter4] = useState(initialCheckboxesChapter4);
    const [checkboxesChapter5, setCheckboxesChapter5] = useState(initialCheckboxesChapter5);

    const handleCheckboxChangeChapter1 = (index) => (event) => {
        const newCheckboxes = [...checkboxesChapter1];
        newCheckboxes[index].isChecked = event.target.checked;
        setCheckboxesChapter1(newCheckboxes);
    };

    const handleCheckboxChangeChapter2 = (index) => (event) => {
        const newCheckboxes = [...checkboxesChapter2];
        newCheckboxes[index].isChecked = event.target.checked;
        setCheckboxesChapter2(newCheckboxes);
    };
    const handleCheckboxChangeChapter3 = (index) => (event) => {
        const newCheckboxes = [...checkboxesChapter3];
        newCheckboxes[index].isChecked = event.target.checked;
        setCheckboxesChapter3(newCheckboxes);
    };
    const handleCheckboxChangeChapter4 = (index) => (event) => {
        const newCheckboxes = [...checkboxesChapter4];
        newCheckboxes[index].isChecked = event.target.checked;
        setCheckboxesChapter4(newCheckboxes);
    };
    const handleCheckboxChangeChapter5 = (index) => (event) => {
        const newCheckboxes = [...checkboxesChapter5];
        newCheckboxes[index].isChecked = event.target.checked;
        setCheckboxesChapter5(newCheckboxes);
    };

    // Function to reset the checkboxes for all chapters
    const handleUncheckAll = () => {
        setCheckboxesChapter1(initialCheckboxesChapter1);
        setCheckboxesChapter2(initialCheckboxesChapter2);
        setCheckboxesChapter3(initialCheckboxesChapter3);
        setCheckboxesChapter4(initialCheckboxesChapter4);
        setCheckboxesChapter5(initialCheckboxesChapter5);
    };
    return (
        <div>
            <Container>
                <h3 className='text-info text-center mt-4 fs-3'>The Ultimate Badminton Guide</h3>
                <Row className='mt-4'>
                    <Col md={4}>
                    <img src={guide} style={{width:"100%"}} alt="" />
                    </Col>
                    <Col md={8}>
                        <p className='mt-4 fs-5'>Welcome to "The Ultimate Badminton Guide," designed to enhance your badminton skills and elevate your game. This comprehensive guide is organized into multiple chapters covering various aspects of the sport. Each chapter focuses on specific skills and strategies, allowing you to select and explore topics that interest you the most. Whether you're looking to refine your technique, master advanced tactics, or improve your mental game, this guide provides the tools and insights to help you achieve your badminton goals effectively.
                    </p>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col md={4}>
                        <Card className='facette mt-4 mb-5' >
                            <Card.Body>
                                <div className='d-flex justify-content-between'>
                                    <Card.Title className='text-info fs-4'>Content</Card.Title>
                                    <Button variant="primary" onClick={handleUncheckAll}>Reset</Button>
                                </div>
                                <Card.Text>
                                    <span className='chapter mt-1 ms-3 fs-5'>Chapter 1: </span>
                                    <ul className='mt-1 ms-3 ms-md-4'>
                                        <li>Learn the lessons</li>
                                        {checkboxesChapter1.map((checkbox, index) => (
                                            <li key={index}>
                                                <Form.Check
                                                    className='mt-2 ms-4'
                                                    type="checkbox"
                                                    id={`checkbox-ch1-${index}`}
                                                    label={checkbox.message}
                                                    checked={checkbox.isChecked}
                                                    onChange={handleCheckboxChangeChapter1(index)}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <span className='chapter mt-1 ms-3 fs-5'>Chapter 2: </span>
                                    <ul className='mt-1 ms-3 ms-md-4'>
                                        <li>Practice your footwork</li>
                                        {checkboxesChapter2.map((checkbox, index) => (
                                            <li key={index}>
                                                <Form.Check
                                                    className='mt-2 ms-4'
                                                    type="checkbox"
                                                    id={`checkbox-ch2-${index}`}
                                                    label={checkbox.message}
                                                    checked={checkbox.isChecked}
                                                    onChange={handleCheckboxChangeChapter2(index)}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <span className='chapter mt-1 ms-3 fs-5'>Chapter 3: </span>
                                    <ul className='mt-1 ms-3 ms-md-4'>
                                        {checkboxesChapter3.map((checkbox, index) => (
                                            <li key={index}>
                                                <Form.Check
                                                    className='mt-2 ms-4'
                                                    type="checkbox"
                                                    id={`checkbox-ch3-${index}`}
                                                    label={checkbox.message}
                                                    checked={checkbox.isChecked}
                                                    onChange={handleCheckboxChangeChapter3(index)}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <span className='chapter mt-1 ms-3 fs-5'>Chapter 4: </span>
                                    <ul className='mt-1 ms-3 ms-md-4'>
                                        <li>Work on your serve</li>
                                        {checkboxesChapter4.map((checkbox, index) => (
                                            <li key={index}>
                                                <Form.Check
                                                    className='mt-2 ms-4'
                                                    type="checkbox"
                                                    id={`checkbox-ch4-${index}`}
                                                    label={checkbox.message}
                                                    checked={checkbox.isChecked}
                                                    onChange={handleCheckboxChangeChapter4(index)}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <span className='chapter mt-1 ms-3 fs-5'>Chapter 5: </span>
                                    <ul className='mt-1 ms-3 ms-md-4'>
                                        <li>Learn to play under pressure</li>
                                        {checkboxesChapter5.map((checkbox, index) => (
                                            <li key={index}>
                                                <Form.Check
                                                    className='mt-2 ms-4'
                                                    type="checkbox"
                                                    id={`checkbox-ch4-${index}`}
                                                    label={checkbox.message}
                                                    checked={checkbox.isChecked}
                                                    onChange={handleCheckboxChangeChapter5(index)}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Row>
                            <Col md={11} className='ms-5'>
                                <Card className='mt-4 mb-4 chapter1'>
                                    <Card.Body>
                                        <Card.Title>Boundaries</Card.Title>
                                        <Card.Text>
                                            The shuttlecock is out of bounds if it lands outside of the boundary lines of the court, or if it touches the ceiling or any other object above the court. The shuttlecock is also out of bounds
                                            if it lands on the line marking the boundary of the court.
                                        </Card.Text>
                                        <Button variant="primary">Read More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={11} className='ms-5'>
                                <Card className='mb-4 chapter1'>
                                    <Card.Body>
                                        <Card.Title>Boundaries</Card.Title>
                                        <Card.Text>
                                            The shuttlecock is out of bounds if it lands outside of the boundary lines of the court, or if it touches the ceiling or any other object above the court. The shuttlecock is also out of bounds
                                            if it lands on the line marking the boundary of the court.
                                        </Card.Text>
                                        <Button variant="primary">Read More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={11} className='ms-5'>
                                <Card className='mb-4 chapter1'>
                                    <Card.Body>
                                        <Card.Title>Boundaries</Card.Title>
                                        <Card.Text>
                                            The shuttlecock is out of bounds if it lands outside of the boundary lines of the court, or if it touches the ceiling or any other object above the court. The shuttlecock is also out of bounds
                                            if it lands on the line marking the boundary of the court.
                                        </Card.Text>
                                        <Button variant="primary">Read More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={11} className='ms-5'>
                                <Card className='mb-4 chapter1'>
                                    <Card.Body>
                                        <Card.Title>Boundaries</Card.Title>
                                        <Card.Text>
                                            The shuttlecock is out of bounds if it lands outside of the boundary lines of the court, or if it touches the ceiling or any other object above the court. The shuttlecock is also out of bounds
                                            if it lands on the line marking the boundary of the court.
                                        </Card.Text>
                                        <Button variant="primary">Read More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={11} className='ms-5'>
                                <Card className='mb-4 chapter1'>
                                    <Card.Body>
                                        <Card.Title>Boundaries</Card.Title>
                                        <Card.Text>
                                            The shuttlecock is out of bounds if it lands outside of the boundary lines of the court, or if it touches the ceiling or any other object above the court. The shuttlecock is also out of bounds
                                            if it lands on the line marking the boundary of the court.
                                        </Card.Text>
                                        <Button variant="primary">Read More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <div>
                            <Pagination className='d-flex justify-content-center mt-4'>
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item>{4}</Pagination.Item>
                                <Pagination.Item>{5}</Pagination.Item>
                                <Pagination.Next />
                            </Pagination>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
