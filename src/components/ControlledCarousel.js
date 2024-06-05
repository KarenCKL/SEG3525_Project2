import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import background1 from '../assets/background1.png';
import background2 from '../assets/background3.png';
import background3 from '../assets/resto.png';
import background4 from '../assets/act.webp';
import '../App.css';
import { Link } from 'react-router-dom';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: '100%', margin: '0 auto', position: 'relative' }}>
            <Carousel.Item>
                <img src={background1} style={{ width: '100%' }} alt="background of the beach and sea" className='background' />
                <Carousel.Caption className="carousel-caption-custom">
                    <div className="caption-content bg-overlay">
                        <h3 className='text-white fs-2'>Escape to Paradise</h3>
                        <p className='text-white fs-5'>Find your haven of peace on the beautiful beaches,</p>
                        <p className='text-white fs-5  pb-3'>embrace the sun and sea of Mauritius Island.</p>
                        <Link to="/contact" className="btn btn-primary">Book now</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={background2} style={{ width: '100%' }} alt="background of the hotel's rooom" className='background' />
                <Carousel.Caption className="carousel-caption-custom">
                    <div className="caption-content  bg-overlay">
                        <h3 className='text-white fs-2'>Explore our Rooms</h3>
                        <p className='text-white fs-5'>Wake up on the west coast of Mauritius in your </p>
                        <div className="fs-5 pb-3">stylish room with garden, pool, or ocean views.</div>
                        <Link to="/rooms" className="btn btn-primary">Learn More</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={background3} style={{ width: '100%' }} alt="background of having a dinner with an amazing sunset" className='background' />
                <Carousel.Caption className="carousel-caption-custom">
                    <div className="caption-content  bg-overlay">
                        <h3 className='text-white fs-2'>Check out our Restaurants</h3>
                        <p className='text-white fs-5'>Whether it’s a breakfast inside or dinner on the sand,</p>
                        <p className='text-white fs-5  pb-3'>our resort’s restaurants and bars are sure to satisfy.</p>
                        <Link to="/restaurants" className="btn btn-primary">Learn More</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={background4} style={{ width: '100%' }} alt="background of the sea of Mauritius" className='background' />
                <Carousel.Caption className="carousel-caption-custom">
                    <div className="caption-content bg-overlay">
                        <h3 className='text-white fs-2'>Explore our Activities</h3>
                        <p className='text-white fs-5'>Enjoy a wide range of land sports as well as</p>
                        <div className="fs-5 pb-3">an exhilarating array of refreshing water sports.</div>
                        <Link to="/activities" className="btn btn-primary">Learn More</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default ControlledCarousel;
