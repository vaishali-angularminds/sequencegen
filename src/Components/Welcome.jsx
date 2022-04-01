import React, { useState } from 'react'
import { useNavigate} from "react-router-dom";
import Home from "./Home"

function Welcome() {
 const navigate = useNavigate();
  const [name , setName] = useState(``)
  const [loadHome , setLoadHome] = useState(false)
  const LOCALSTORAGE_KEY = `nameValue`

  const handleSubmit = () =>{

//     if(name === ``) {
//       console.log("warn")
// return

//     }else{

//       console.log("Submit")
//       localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(name));
//       setLoadHome(true)
//     }

const data = localStorage.setItem("name", name);

const nm = localStorage.getItem("name");
if (nm !== "")
   navigate("/Temp");

  }

  

  return (




<div className="container my-5 text-center">
  <h2 className="text-center">Hello and welcome,</h2>
  <input value={name} onChange={(e) => setName(e.target.value)}  type="text" placeholder="Please enter your name" className="form-control form-control-lg w-50 mx-auto mt-5" />
  {console.log(name)}
  <div className="my-5">
     <button className="btn btn-primary btn-lg" onClick={handleSubmit} >
  Continue
  </button> 
  
  </div>
  
  </div> 


  )
}

export default Welcome