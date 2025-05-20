import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import Downloads from './pages/Downloads.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/downloads" element={<Downloads />} />
            </Routes>
        </Router>
    );
}

export default App;