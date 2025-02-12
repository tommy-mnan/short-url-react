import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RedirectPage = () => {
  const [fullUrl, setFullUrl] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get(window.location.pathname);
      setFullUrl(res.data.data.fullURL); 
    } catch (err) {
      console.log(err);
      navigate("/not-found"); 
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []); 

  useEffect(() => {
    if (fullUrl) {
      window.location.replace(fullUrl); 
    }
  }, [fullUrl]); 

  return (
    <div className="container">
      <h1><span>Redirecting Page ...</span></h1>
    </div>
  );
};

export default RedirectPage;