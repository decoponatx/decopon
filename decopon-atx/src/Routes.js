import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Instructions from './pages/Instructions';

export const List = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/instructions' element={<Instructions />} />
            </Routes>
        </Router>
    );
}
