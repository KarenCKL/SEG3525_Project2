import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './App.scss'
import Navbar from './components/Navbar';
import Home from './pages/home';
import Guides from './pages/guides';
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
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
