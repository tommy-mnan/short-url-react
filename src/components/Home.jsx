import { useState } from 'react';
import InputShortener from './InputShortener';
import UrlResult from './UrlResult';

const Home = () => {
const [inputValue,setInputValue] = useState ("");

  return (
    
    <div className= "container">
        <InputShortener setInputValue={setInputValue}/>
        <UrlResult inputValue={inputValue}/>
        </div>
    
  )
}

export default Home