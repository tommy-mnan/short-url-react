import { useState } from 'react';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
      <>
        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/not-found" element={<NotFound />} />
        </Routes>
        </>
  )
}

export default App
