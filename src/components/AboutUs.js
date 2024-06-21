import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function AboutUs() {
    return (
        <div>
            <Container className="mt-5 p-4">
                <Row>
                    <div className="d-flex justify-content-center mb-4 text-info fst-italic">
                        <h3>About Us</h3>
                    </div>
                    <Col className="d-flex flex-column">
                        <p className='px-3 fst-italic Font'>
                            The Ottawa Badminton Club is a premier badminton facility located in the heart of Ottawa.  Founded in 1995, the Ottawa Badminton Club has a rich history of promoting the sport of badminton in the local community. Over the years, we have hosted numerous tournaments and events, attracting players from all over the region. Our commitment to excellence and passion for the game has made us a trusted name in the badminton community.
                            With state-of-the-art courts and top-notch amenities, we provide a welcoming and inclusive environment for badminton enthusiasts of all ages and skill levels. Our club offers a range of programs and services, including professional coaching, league play, and social events. Whether you're a beginner looking to learn the basics or a seasoned player seeking competitive opportunities,
                            the Ottawa Badminton Club is the perfect place to hone your skills, make new friends, and enjoy the sport you love. Join us today and be a part of our legacy!
                        </p>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
