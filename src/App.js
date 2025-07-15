import { Container } from 'react-bootstrap'
import {BrowserRouter as Router } from 'react-router-dom';
import {Route, Routes } from 'react-router-dom';


import { UserProvider } from './context/UserContext';
import { useState, useEffect } from 'react';


// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'


// Pages
import Home from './pages/Home'
import FAQs from './pages/FAQs'
import Login from './pages/Login'

function App() {

  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  });


  return (
    <>
    <UserProvider value={{ user, setUser }}>
      <Router>
        <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/login" element={<Login />} />

          </Routes>
          <Footer />
      </Router>
    </UserProvider>
    
    </>
  );
}

export default App;
