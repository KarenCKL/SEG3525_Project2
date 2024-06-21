import ControlledCarousel from '../components/ControlledCarousel';
import AboutUs from '../components/AboutUs';
import Facilities from '../components/Facilities';
import Location from '../components/Location';
const Home = () => {
    return (
        <div>
            <ControlledCarousel/>
            <AboutUs/>
            <Facilities/>
            <Location/>
        </div>
    );
}
export default Home;