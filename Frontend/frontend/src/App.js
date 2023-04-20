import './App.css';
import Login from './components/Login';
import { useState } from 'react';
import { Routes, Route ,useLocation } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Nav_bar from './components/Navbarr';
import Footer from './components/Footer';
import Community from './components/Community';
import Signup  from './components/Signup';
function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});

  const handleLogin = (user) => {
    setUser(user);
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const athome = location.pathname.includes('/home')
  const atmovie = location.pathname.includes('/home/movies')

  return (
    <>
    
      <div className="overlay"></div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login handleLogin={handleLogin} />} />
        <Route path='/home/movies'element={<Movies/>} />
        <Route path='/home/commuinty'element={<Community/>} />
        <Route path='/Signup'element={<Signup/>} />
      </Routes>
      {athome &&atmovie && <Footer/>}
      {athome && atmovie && <Nav_bar />}
    </>
  );
}

export default App;