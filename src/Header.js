import React,{useRef,useEffect} from 'react';

const Header = ({}) => {

  const nameInput = useRef(null);
  const lastNameInput = useRef(null);
  const cityInput = useRef(null);

  function handleNameClick() {
    nameInput.current.focus();
  }
  function handleLastNameClick() {
    lastNameInput.current.focus();
  }
  function handleCityClick() {
    cityInput.current.focus();
  }
  function onClickHandler() {
  alert("THANKS FOR SUBMITTING")
  }
  function handleCityKeyDown(e) {
    console.log(e.which,'ASCII VALUE');
    if(e.which === 13) {
      onClickHandler()
    }
  } 
  useEffect(()=>{
    handleLastNameClick()
  },[])
    return (
        <div>
        <input type="text" placeholder="Name" ref={nameInput} onBlur={(e)=>console.log(e)}/>
        <input type="text" placeholder="Last Name" ref={lastNameInput}/>
        <input type="text" placeholder="City" ref={cityInput} onKeyDown={(e)=>handleCityKeyDown(e)}/> 
       <button onClick={handleNameClick}> Focus on Name</button>
       <button onClick={handleLastNameClick}> Focus on LastName</button>
       <button onClick={handleCityClick} > Focus on City</button>

       <button onClick={()=>onClickHandler()}>Submit</button>
       <div style={{height:"100px",width:"100px" ,backgroundColor:"blue"}} 
       onMouseLeave={()=>console.log('MOUSE LEFT')}
       onMouseEnter={()=>console.log('MOUSE ENTERED')}
       >

       </div>
        </div>
    );
};

export default Header;


