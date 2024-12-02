import { useState } from 'react';

const NotFound = () => {
const [inputValue,setInputValue] = useState ("");

  return (

    <div className= "container">
          <h1>SOMETHING WENT WRONG</h1>
          <h1>URL NOT FOUND</h1>
    </div>
   
  )
}

export default NotFound