import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './component/Navbar';
import Loginpage from './component/Login';
import Footer from './component/Footer';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Signuppage from './component/Signuppage';
import Fpage from './Userdashboard/Fpage';
import Apage from './Admindashboard/Apage';
import AdminPage from './Admindashboard/Apage';
import Integrity from './component/Integrity';
import Fractional from './component/Fractional';
import Voting from './component/Voting';
import Liquidity from './component/Liquidity';
import Passport from './component/Passport';
import Transparency from './component/Transparency';
import PropertyOwnerPage from './Propertyownerdashboard/Owner';
import './App.css';

const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(isLoggedIn);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      <div className="app">
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signuppage" element={<Signuppage handleLogin={handleLogin} />} />
          <Route path="/login" element={<Loginpage handleLogin={handleLogin} />} />
          <Route path="/integrity" element={<Integrity />} />
          <Route path="/fractional" element={<Fractional />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/liquidity" element={<Liquidity />} />
          <Route path="/passport" element={<Passport />} />
          <Route path="/Signuppage" element={<Loginpage />} />
        <Route path="/Admindashboard/Apage" element={<Apage />} />
        <Route path="/propertyownerdashboard/owner" element={<PropertyOwnerPage />} />
        <Route path="/userdashboard/fpage" element={<Fpage />} />
          <Route path="/transparency" element={<Transparency />} />
          
          
          {/* Protected Routes */}
          <Route 
            path="/userdashboard/fpage" 
            element={<ProtectedRoute isAuthenticated={isAuthenticated}><Fpage /></ProtectedRoute>} 
          />
          <Route 
            path="/admindashboard/apage" 
            element={<ProtectedRoute isAuthenticated={isAuthenticated}><AdminPage /></ProtectedRoute>} 
          />
          <Route 
            path="/propertyownerdashboard/owner" 
            element={<ProtectedRoute isAuthenticated={isAuthenticated}><PropertyOwnerPage /></ProtectedRoute>} 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
