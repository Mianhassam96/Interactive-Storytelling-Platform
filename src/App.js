import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import StoryCreation from './pages/StoryCreation';  // Correct import here
import BrowseStories from './pages/BrowseStories';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<StoryCreation />} />  {/* Corrected */}
        <Route path="/browse" element={<BrowseStories />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
