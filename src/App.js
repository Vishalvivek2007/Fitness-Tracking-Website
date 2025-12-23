import React from 'react';
import TrackingPage from './TrackingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home'; // Renamed from Bodys.js
import PlaningPage from './PlaningPage'; 
import Register from './Register';
import Login from './Login';
import AuthRoute from './AuthRoute';
import './menu.css';
import WorkoutsPage from './WorkoutsPage';
import Contactus from './contactus';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path= "/contact" element={<Contactus />}/>
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/planing" element={<PlaningPage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;