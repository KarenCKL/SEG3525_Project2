import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Location() {
    return (
        <Container className='mb-5'>
            <Row>
                <div className="d-flex justify-content-center mb-4 mt-5 text-info fst-italic">
                    <h3>Our Location</h3>
                </div>
                <Col lg={8}>
                    <div>
                        <div className="d-flex pb-3">
                            <h5>Located at 150 Louis Pasteur, Ottawa, Ontario, K1N 7P7</h5>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.451558405615!2d-75.68254308447863!3d45.420066879100094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05a77b5e6c27%3A0x36e89c445bb0a60a!2s150%20Louis-Pasteur%20Private%2C%20Ottawa%2C%20ON%20K1N%201A2%2C%20Canada!5e0!3m2!1sen!2sus!4v1685382636092!5m2!1sen!2sus"
                            width="100%"
                            height="370"
                            title="Ottawa Badminton Club Location"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>

                    </div>
                </Col>
                <Col lg={4} className='mt-5 ps-lg-3 d-flex flex-column align-items-center bg-secondary-subtle'>
                    <div className="pb-3 mt-lg-4"><h4>
                        Opening Hours</h4></div>
                    <div className="pb-2">
                        <p className="fs-5">Monday - Friday: 9:00 AM - 10:00 PM</p>
                        <p className="fs-5">Saturday: 9:00 AM - 10:00 PM</p>
                        <p className="fs-5">Sunday: 9:00 AM - 8:00 PM</p>
                        <p className='fs-5'>Email: <a href="mailto:info@badmintonClub.ca" className="text-black" id='emailFooter'>info@badmintonClub.ca</a></p>
                        <p className='fs-5'>Tel: <a href="+123456789" className="text-black" id='phoneFooter'>+1 (234) 567-890</a></p>
                    </div>
                    <div className='ms-4'>
                        <Button as={Link} to='/' variant="primary" className='text-white py-1 px-1 capitalize' id='bookIdbtn'>Join Now</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
