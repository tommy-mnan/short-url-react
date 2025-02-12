import {useEffect,useState} from 'react'
import axios from 'axios';


const RedirectPage = () => {
  const [fullUrl, setFullUrl] = useState("");


const fetchData = async () => {
  try{
    const res =  await axios.get(window.location.pathname);
    setFullUrl(res.data.data.fullURL);
    window.location.href = fullUrl;
  } catch(err){     
    setError(err);
  }finally{
    setLoading(false);
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