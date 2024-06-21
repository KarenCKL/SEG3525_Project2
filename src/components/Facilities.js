import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faWheelchair, faParking, faRestroom} from '@fortawesome/free-solid-svg-icons';
export default function Facilities() {
    return (
        <div>
            <Container className="mt-2 p-4">
                <Row>
                    <div className="d-flex justify-content-center mb-5 text-info fst-italic">
                        <h3>Our Amenities</h3>
                    </div>
                    <Col lg={3} sm={6}>
                        <div className="d-flex justify-content-center">
                            <FontAwesomeIcon icon={faParking} size='3x' className="mb-3 mt-2" style={{ color: '#a60341' }} />
                        </div>
                        <h5 className='text-center'>Free Parking</h5>
                        <p className='text-center Font'>We offer free parking for all guests. Our parking lot is secure and well-lit.</p>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="d-flex justify-content-center">
                            <FontAwesomeIcon icon={faWheelchair} size='3x' className="mb-3 mt-2" style={{ color: '#a60341' }} />
                        </div>
                        <h5 className='text-center'>Wheelchair Accessible</h5>
                        <p className='text-center Font'> Our club is wheelchair accessible to ensure convenience for all guests.</p>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="d-flex justify-content-center">
                            <FontAwesomeIcon icon={faWifi} size='3x' className="mb-3 mt-2" style={{ color: '#a60341' }} />
                        </div>
                        <h5 className='text-center'>Free Wifi</h5>
                        <p className='text-center Font'>We offer free high speed internet to all guests.</p>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="d-flex justify-content-center">
                            <FontAwesomeIcon icon={faRestroom} size='3x' className="mb-3 mt-2" style={{ color: '#a60341' }} />
                        </div>
                        <h5 className='text-center'>Changing Room</h5>
                        <p className='text-center Font'>We offer changing rooms for guests to freshen up after a game.</p>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
