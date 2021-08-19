import { useState,useEffect } from 'react';
import './App.css';
import Header from './Header' ;
import axios from 'axios' ;
import useCallApi from './useCallApi'

function App() {
 
  const [dob,setDob] = useState("")
  const [retrivedDob,setRetrivedDob] = useState("")
//  const {data ,loading, error} = useCallApi("http://www.omdbapi.com/?apikey=83fb5568&s=joker")
 const results = useCallApi("http://www.omdbapi.com/?apikey=83fb5568&s=joker")
 console.log(results ,'results');
  // const [data ,setData] = useState([])
  // const [loading ,setLoading] = useState(false)
  // const [error ,setError] = useState(null)
 
  // useEffect(()=>{
  //   setLoading(true)
  //     axios.get(`http://www.omdbapi.com/?apikey=83fb5568&s=joker`)
  //     .then(resp=>{
  //       setLoading(false)
  //       setData(resp.data.Search)
      
  //     })
  //     .catch(e=> {
  //       setError(e)
  //       setLoading(false) 
      
  //     })
  // },[])

  function onSubmitHandler () {
window.sessionStorage.setItem("dob",dob)
  }

  function onRetriveHandler () {
let ret= window.sessionStorage.getItem("dob") 
setRetrivedDob (ret)

  }

if(results.loading) {
  return 'LOADING'
}
if (results.error) {
  return "ERROR HAPPPNED < TRY AGAIN LATER "
}

  return (
    <div className="App">
     {/* <Header house="Bungalow 86" /> */}
     {results.data  &&  results.data.map(i=>{
      return  <li>{i.Title}</li>
     })}
     
     <input placeholder="What your date of birth" onChange={(e)=>setDob(e.target.value)}/>
     <button onClick={()=>onSubmitHandler()}>Submit my Dob</button>
     
     <button onClick={()=>onRetriveHandler()}> Retrive my Date of Birth</button>
     <p>Your Retrieved Dob is {retrivedDob} </p>
    </div>
  );
}

export default App;

