import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import axios from 'axios';

axios.defaults.baseURL = 'https://urlshortening-2jqq.onrender.com'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </StrictMode>,
)
