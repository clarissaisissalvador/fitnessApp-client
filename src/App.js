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
import Logout from './pages/Logout'
import Register from './pages/Register'
import Workouts from './pages/Workouts'

function App() {

  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  });

function unsetUser(){
    localStorage.clear();
  };
  useEffect(()=> {
      fetch('https://fitnessapi-salvador-pj5e.onrender.com/users/details', {
        headers : {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(response => response.json())
      .then(data => {
        // console.log("This is data:")
        // console.log(data);

        if(data.auth === "Failed"){
          setUser({
            id : null,
            isAdmin: null
          })
        } else{
          setUser({
            id: data.user._id,
            isAdmin: data.user.isAdmin
          })
        }
      });

  }, [])

  useEffect(() => {
    console.log(user);
    console.log(localStorage);
  }, [user])
  return (
    <>
    <UserProvider value={{ user, setUser, unsetUser }}>
      <Router>
        <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/register" element={<Register />} />

          </Routes>
          <Footer />
      </Router>
    </UserProvider>
    
    </>
  );
}

export default App;
