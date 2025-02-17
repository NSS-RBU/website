import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import './App.css';
import RamdeobabaNSS from './RamdeobabaNSS.js';
import NSSUnit from './NSSUnit.js';
import Gallery from './Gallery.js';
import EventPage from "./EventPage.js";
import Events from "./Event.js";
import Teampage from "./Teampage.js";
import PrernaRegistration from './PrernaRegistration.js';

function App() {
  return (
    <Router basename="/website">
      <Routes>
        <Route path="/" element={<NSSUnit />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/full-gallery/:year/:eventName" element={<EventPage />} />
        <Route path="/prerna-registration" element={<PrernaRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;