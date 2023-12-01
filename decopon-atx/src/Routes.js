import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Instructions from './pages/Instructions';
import FourOhFour from './pages/404';
import EventCalendar from './components/Events';
import News from './components/News';
import Parties from './pages/Parties';

export const List = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/instructions' element={<Instructions />} />
                <Route path='/news' element={<News />} />
                <Route path='/events' element={<EventCalendar />} />
                <Route path="*" element={<FourOhFour />} />
                <Route path="/parties" element={<Parties />} />

            </Routes>
        </Router>
    );
}
