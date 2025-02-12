import axios from 'axios';
import {useEffect,useState} from 'react'

const UrlResult = ({inputValue}) => {
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const full_url = inputValue.includes("http") ? inputValue:  "http://"+inputValue;

  const fetchData = async () => {
    try{
      setLoading(true);
      const res =  await axios.post('/shorten',{full_url});
      setShortUrl(res.data.data.short_url);
    } catch(err){     
      setError(err);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    if(inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  if(loading){
    return <p className='loading'>Loading ...</p>
  }

  if(error){
    return <p className='error'>Something went Wrong !!!</p>
  }


  return (
  <>
    {shortUrl && (
    <div className='result'>
      <p>{shortUrl}</p>
    </div>
   )}
  </>)
}

export default UrlResult