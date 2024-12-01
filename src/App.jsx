import { useState } from 'react';
import InputShortener from './components/InputShortener';
import UrlResult from './components/UrlResult';
import './App.css';

function App() {
  const [inputValue,setInputValue] = useState ("");

  return (
      <div className= "container">
          <InputShortener setInputValue={setInputValue}/>
          <UrlResult inputValue={inputValue}/>
      </div>    
  )
}

export default App
