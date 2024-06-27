import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './App.scss'
import Navbar from './components/Navbar';
import Home from './pages/home';
import Guides from './pages/guides';
import Booking from './pages/booking';
import Shop from './pages/shop';
import Footer from './components/Footer';
function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/guides" element={<Guides />} />
                        <Route path="/booking" element={<Booking />} />
                        <Route path="/shop" element={<Shop />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
