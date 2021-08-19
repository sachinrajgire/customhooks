import { useState,useEffect } from 'react';
import axios from 'axios' ;

const useCallApi = (url) => {
  const [data ,setData] = useState([])
  const [loading ,setLoading] = useState(false)
  const [error ,setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        //   axios.get(`http://www.omdbapi.com/?apikey=83fb5568&s=joker`)
          axios.get(url)
          .then(resp=>{
            setLoading(false)
            setData(resp.data.Search)
          
          })
          .catch(e=> {
            setError(e)
            setLoading(false) 
          
          })
      },[])
    
    return { data ,loading, error }
};

export default useCallApi;