import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import background1 from '../assets/background1.jpeg';
import background2 from '../assets/background.png';
import background3 from '../assets/background4.jpg';
import team from '../assets/team.jpg';
import shop from '../assets/shopping.png';
import shopMobile from '../assets/shoppingMobile.png';
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
                    <Card className="bg-overlay text-white card-fixed-width">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className='fs-3 text-start'>Join our Badminton Club</Card.Title>
                            <Card.Text className='fs-5 pb-2 text-start'>Become a member and enjoy exclusive access to our facilities.</Card.Text>
                            <Link to="/signup" className="btn btn-primary" style={{ width: '130px' }}>Join Now</Link>
                        </Card.Body>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={background2} style={{ width: '100%' }} alt="background of a badminton court" className='background' />
                <Carousel.Caption className="carousel-caption-custom">
                    <Card className="bg-overlay text-white card-fixed-width">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className='fs-3 text-start'>Already a Member</Card.Title>
                            <Card.Text className='fs-5 pb-1 text-start'>Reserve a session to play with your friends or to practice with a coach.</Card.Text>
                            <Link to="/booking" className="btn btn-primary" style={{ width: '130px' }}>Book Now</Link>
                        </Card.Body>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={background3} style={{ width: '100%' }} alt="background of a badminton guide" className='background' />
                <Carousel.Caption className="carousel-caption-custom">
                    <Card className="bg-overlay text-white card-fixed-width">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className='fs-3 text-start' >Learn the Game</Card.Title>
                            <Card.Text className='fs-5 pb-1 text-start'>Explore our comprehensive guides and improve your badminton skills with expert tips and tutorials.</Card.Text>
                            <Link to="/guides" className="btn btn-primary" style={{ width: '130px' }}>Read Guides</Link>
                        </Card.Body>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={team} style={{ width: '100%' }} alt="background of a badminton guide" className='background' />
                <Carousel.Caption className="carousel-caption-custom">
                    <Card className="bg-overlay text-white card-fixed-width">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className='fs-3 text-start' >Join the Community</Card.Title>
                            <Card.Text className='fs-5 pb-1 text-start'>Connect with fellow badminton enthusiasts, share your thoughts, and get advice in our forum.</Card.Text>
                            <Link to="/forum" className="btn btn-primary" style={{ width: '130px' }}>Visit Forum</Link>
                        </Card.Body>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div></div>
                <img src={shop} style={{ width: '100%' }} alt="background of a badminton guide" className='background large-screen-image' />
                <img src={shopMobile} style={{ width: '100%' }} alt="background of a badminton guide" className='background small-screen-image' />
                <Carousel.Caption className="carousel-caption-custom">
                    <Card className="bg-overlay text-white card-fixed-width">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className='fs-3 text-start' >Shop for Gear</Card.Title>
                            <Card.Text className='fs-5 pb-1 text-start'>Browse our collection of badminton equipment and accessories.</Card.Text>
                            <Link to="/shop" className="btn btn-primary" style={{ width: '130px' }}>Shop Now</Link>
                        </Card.Body>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;
