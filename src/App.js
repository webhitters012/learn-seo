import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './Components/Common/LoadingSpinner';

// Lazy load components
const Home = lazy(() => import('./Components/Home'));
const SEO = lazy(() => import('./Components/SEO-Page/SEO'));
const DigitalMarketing = lazy(() => import('./Components/Digital-Marketing/DM'));
const Founder = lazy(() => import('./Components/Founder/Founder'));
const AboutUs = lazy(() => import('./Components/About/About'));
const Life = lazy(() => import('./Components/Life-@-web-hitters/Life'));
const Trainers = lazy(() => import('./Components/Trainers/Trainers'));
const Contact = lazy(() => import('./Components/Contact-us/Contact-us'));
const Trainee = lazy(() => import('./Components/Trainees/Trainee'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SEO" element={<SEO />} />
            <Route path="/DM" element={<DigitalMarketing />} />
            <Route path="/Founder" element={<Founder />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Life-@-Web-Hitters" element={<Life />} />
            <Route path="/Trainers" element={<Trainers />} />
            <Route path="/Trainees" element={<Trainee />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
