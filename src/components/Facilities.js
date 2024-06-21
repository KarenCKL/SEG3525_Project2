import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmingPool, faWifi, faCar, faWheelchairAlt} from '@fortawesome/free-solid-svg-icons';
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
                            <FontAwesomeIcon icon={faCar} size='3x' className="mb-3 mt-2" style={{ color: '#a60341' }} />
                        </div>
                        <h5 className='text-center'></h5>
                        <p className='text-center'>Indoor parking is available onsite with unlimited in and out privileges.</p>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="d-flex justify-content-center">
                            <FontAwesomeIcon icon={faWheelchairAlt} size='3x' className="mb-3 mt-2" style={{ color: '#a60341' }} />
                        </div>
                        <h5 className='text-center'>Wheelchair Accessible</h5>
                        <p className='text-center'> Our hotel is wheelchair accessible to ensure convenience for all guests.</p>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="d-flex justify-content-center">
                            <FontAwesomeIcon icon={faWifi} size='3x' className="mb-3 mt-2" style={{ color: '#a60341' }} />
                        </div>
                        <h5 className='text-center'>Free Wifi</h5>
                        <p className='text-center'></p>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="d-flex justify-content-center">
                            <FontAwesomeIcon icon={faSwimmingPool} size='3x' className="mb-3 mt-2" style={{ color: '#a60341' }} />
                        </div>
                        <h5 className='text-center'>Swimming Pool</h5>
                        <p className='text-center'> Our swimming pool is open to all guests. It is a great place to relax and unwind.</p>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
