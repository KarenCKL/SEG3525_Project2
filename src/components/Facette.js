/* eslint-disable jsx-a11y/anchor-has-content */
import * as React from 'react'
import { Container, Row, Col, Card, Form, Button, Pagination } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import guide from '../assets/guide.jpeg';

export default function Facette() {

    // Initial state for checkboxes in each chapter
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
    //Data for each chapter
    const contentMapping = {
        'Boundaries': 'The shuttlecock is out of bounds if it lands outside of the boundary lines of the court, or if it touches the ceiling or any other object above the court. The shuttlecock is also out of bounds if it lands on the line marking the boundary of the court.',
        'Double play': 'In doubles play (where there are two players on each side), the serving order must be rotated after each game. Players must serve from the right service court when the score is even, and from the left service court when the score is odd.',
        'Faults': 'A fault is committed when a player violates one of the rules of the game. Examples of faults include serving incorrectly, hitting the shuttlecock out of bounds, or hitting the shuttlecock before it has crossed the net. If a player commits a fault, their opponent wins the rally.',
        'Scoring': 'A rally is won when the shuttlecock lands in your opponent’s court, or when your opponent hits the shuttlecock out of bounds or into the net. Points can only be scored by the serving side, and the first side to reach 21 points (with a margin of at least two points) wins the game.',
        'Serves': 'A serve must be hit diagonally across the court, and the shuttlecock must be hit below waist height on the serve. The server has two serves, and the serve must be returned by the receiver. If the receiver is unable to return the serve, the server wins the rally.',
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [checkboxesChapter1, setCheckboxesChapter1] = useState(initialCheckboxesChapter1);
    const [checkboxesChapter2, setCheckboxesChapter2] = useState(initialCheckboxesChapter2);
    const [checkboxesChapter3, setCheckboxesChapter3] = useState(initialCheckboxesChapter3);
    const [checkboxesChapter4, setCheckboxesChapter4] = useState(initialCheckboxesChapter4);
    const [checkboxesChapter5, setCheckboxesChapter5] = useState(initialCheckboxesChapter5);
    const [anyCheckboxChecked, setAnyCheckboxChecked] = useState(false);

    //Function to hide pagination when checkboxes are selected
    useEffect(() => {
        const isAnyChecked = [
            ...checkboxesChapter1,
            ...checkboxesChapter2,
            ...checkboxesChapter3,
            ...checkboxesChapter4,
            ...checkboxesChapter5
        ].some(checkbox => checkbox.isChecked);
        setAnyCheckboxChecked(isAnyChecked);
    }, [checkboxesChapter1, checkboxesChapter2, checkboxesChapter3, checkboxesChapter4, checkboxesChapter5]);

    // Function to handle checkbox change for each chapter
    const handleCheckboxChange = (chapter, index) => (event) => {
        const setCheckboxes = {
            1: setCheckboxesChapter1,
            2: setCheckboxesChapter2,
            3: setCheckboxesChapter3,
            4: setCheckboxesChapter4,
            5: setCheckboxesChapter5,
        }[chapter];

        const checkboxes = {
            1: checkboxesChapter1,
            2: checkboxesChapter2,
            3: checkboxesChapter3,
            4: checkboxesChapter4,
            5: checkboxesChapter5,
        }[chapter];

        const newCheckboxes = [...checkboxes];
        newCheckboxes[index].isChecked = event.target.checked;
        setCheckboxes(newCheckboxes);
    };

    const handleUncheckAll = () => {
        setCheckboxesChapter1(initialCheckboxesChapter1);
        setCheckboxesChapter2(initialCheckboxesChapter2);
        setCheckboxesChapter3(initialCheckboxesChapter3);
        setCheckboxesChapter4(initialCheckboxesChapter4);
        setCheckboxesChapter5(initialCheckboxesChapter5);
        setCurrentPage(1);
    };

    //Function to handle Pagination Click
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Content for different pages
    const renderContentForPage = (pageNumber) => {
        switch (pageNumber) {
            case 1:
                // Filter out checked checkboxes for Chapter 1
                const filteredChapter1 = checkboxesChapter1.filter(checkbox => checkbox.isChecked);

                return (
                    <>
                        {filteredChapter1.length > 0 ? (
                            <>
                                {filteredChapter1.map((checkbox, index) => (
                                    <Row key={index} id={checkbox.message.replace(/\s+/g, '-').toLowerCase()}>
                                        <Col className='ms-md-4 me-md-3'>
                                            <Card className='mt-md-4 mb-3 mb-md-4 chapter1'>
                                                <Card.Body>
                                                    <Card.Title>{checkbox.message}</Card.Title>
                                                    <Card.Text>
                                                        {checkbox.isChecked ? contentMapping[checkbox.message] : ''}
                                                    </Card.Text>
                                                    <Button variant="primary">Read More</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                ))}
                            </>
                        ) : (
                            <>
                                {initialCheckboxesChapter1.map((checkbox, index) => (
                                    <Row key={index} id={checkbox.message.replace(/\s+/g, '-').toLowerCase()}>
                                        <Col className='ms-md-4 me-md-3'>
                                            <Card className='mt-md-4 mb-3 mb-md-4 chapter1'>
                                                <Card.Body>
                                                    <Card.Title>{checkbox.message}</Card.Title>
                                                    <Card.Text>
                                                        {contentMapping[checkbox.message]}
                                                    </Card.Text>
                                                    <Button variant="primary">Read More</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                ))}
                            </>
                        )}
                    </>
                );
            case 2:
                return (
                    <>
                        <Row id="Court">
                            <Col className='ms-md-4 me-md-3'>
                                <Card className='mt-md-4 mb-3 mb-md-4 chapter1'>
                                    <Card.Body>
                                        <Card.Title>Court Sprints</Card.Title>
                                        <Card.Text>
                                            Sprint from one end of the court to the other, focusing on quick, light steps. This drill will help you improve your overall speed and endurance.
                                        </Card.Text>
                                        <Button variant="primary">Read More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </>
                );
            case 3:
                return (
                    <>
                        <Row>
                            <Col className='ms-md-4 me-md-3'>
                                <Card className='mt-md-4 mb-3 mb-md-4 chapter1'>
                                    <Card.Body>
                                        <Card.Title>Learn to Play at Different Speeds</Card.Title>
                                        <Card.Text>
                                            Practicing at different speeds can help you become more adaptable during matches. Try playing rallies at various speeds to enhance your reaction time and adaptability.
                                        </Card.Text>
                                        <Button variant="primary">Read More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </>
                );

            default:
                return null;
        }
    };
    return (
        <div>
            <Container>
                <h3 className='text-info text-center mt-4 fs-3'>The Ultimate Badminton Guide</h3>
                <Row className='mt-4'>
                    <Col md={4}>
                        <img src={guide} style={{ width: "100%" }} alt="" />
                    </Col>
                    <Col md={8}>
                        <p className='guide mt-lg-1 mt-xl-4 mt-3 ms-2'>Welcome to "The Ultimate Badminton Guide," designed to enhance your badminton skills and elevate your game. This comprehensive guide is organized into multiple chapters covering various aspects of the sport. Each chapter focuses on specific skills and strategies, allowing you to select and explore topics that interest you the most. Whether you're looking to refine your technique, master advanced tactics, or improve your mental game, this guide provides the tools and insights to help you achieve your badminton goals effectively.
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
                                                    onChange={handleCheckboxChange(1, index)}
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
                                                    onChange={handleCheckboxChange(2, index)}
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
                                                    onChange={handleCheckboxChange(3, index)}
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
                                                    onChange={handleCheckboxChange(4, index)}
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
                                                    id={`checkbox-ch5-${index}`}
                                                    label={checkbox.message}
                                                    checked={checkbox.isChecked}
                                                    onChange={handleCheckboxChange(5, index)}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <div>
                            {renderContentForPage(currentPage)}
                        </div>
                        <div>
                            {!anyCheckboxChecked && (
                                <div>
                                    <Pagination className='d-flex justify-content-center mt-4'>
                                        <Pagination.Prev
                                            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                                        />
                                        {[1, 2, 3].map((page) => (
                                            <Pagination.Item
                                                key={page}
                                                active={page === currentPage}
                                                onClick={() => handlePageChange(page)}
                                            >
                                                {page}
                                            </Pagination.Item>
                                        ))}
                                        <Pagination.Next
                                            onClick={() => handlePageChange(Math.min(currentPage + 1, 5))}
                                        />
                                    </Pagination>
                                </div>
                            )}
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
