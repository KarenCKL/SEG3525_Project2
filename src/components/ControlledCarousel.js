import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import background1 from '../assets/background1.jpeg';

import '../App.css';
import { Link } from 'react-router-dom';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: '100%', margin: '0 auto', position: 'relative' }} className='mt-3'>
            <Carousel.Item>
                <img src={background1} style={{ width: '100%' }} alt="background of the beach and sea" className='background' />
                <Carousel.Caption className="carousel-caption-custom">
                    <div className="caption-content bg-overlay">
                        <h3 className='text-white fs-2'></h3>
                        <p className='text-white fs-5'></p>
                        <p className='text-white fs-5  pb-3'></p>
                        <Link to="/contact" className="btn btn-primary">Book now</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;
