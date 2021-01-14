import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import UserData from './context/userContext';
import Login from './pages/auth/Login';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserData>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserData>
      </BrowserRouter>
    </div>
  );
};

export default App;
