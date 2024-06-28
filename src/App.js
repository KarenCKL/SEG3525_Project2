import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './App.scss'
import Navbar from './components/Navbar';
import Home from './pages/home';
import Guides from './pages/guides';
import Booking from './pages/booking';
import Shop from './pages/shop';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SignUpNext from './components/SignUpNext';
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
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/signupnext" element={<SignUpNext />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
