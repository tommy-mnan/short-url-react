import {useEffect,useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";




const RedirectPage = () => {
  const [fullUrl, setFullUrl] = useState("");

let navigate = useNavigate();
const fetchData = async () => {
  try{
    const res =  await axios.get(window.location.pathname);
    setFullUrl(res.data.data.fullURL);
    window.location = fullUrl;
  } catch(err){     
    console.log(err);
    return navigate("/not-found");     
  }
}


fetchData();

  return (

    <div className= "container">
          <h1><span>Redirecting Page ...</span></h1>
    </div>
   
  )
}

export default RedirectPage