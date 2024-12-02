import { useState } from "react"

 const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }
  
  return (
    <div className="container-2">
      <h1 >URL <span>Shortener</span></h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className="btn btn-light" onClick={handleClick}>Shorten</button>
      </div>
    </div>
  )
}

export default InputShortener