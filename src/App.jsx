import { useState } from 'react';
import Home from './components/Home';
import NotFound from './components/NotFound';
import RedirectPage from './components/RedirectPage';
import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
      <>
        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/not-found" element={<NotFound />} />
             <Route path="/*" element={<RedirectPage />} />
        </Routes>
        </>
  )
}

export default App
