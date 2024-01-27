import React, { CSSProperties } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MyJourney from './pages/MyJourney';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
// components
import Topbar from './components/Topbar';

const AppRouter = () => {
    return (
        <div style={styles.appStyles}>
            <Router>
                <Topbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/my-journey" element={<MyJourney />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
};

const styles: { [key: string]: CSSProperties } = {
    appStyles: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
};

export default AppRouter;
