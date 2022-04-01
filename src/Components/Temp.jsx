import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Temp = () => {
  //   console.log(s.length);

  const [cnt, setCnt] = useState(0);
  let s = Array(cnt - 1 + 1)
    .fill()
    .map((_, idx) => 2 + idx);
  const [type, setType] = useState("");
  const [res, setRes] = useState([]);
  const [type1, setType1] = useState("");
  const name = localStorage.getItem("name");

  const navigate = useNavigate();

  useEffect(() => {
    console.log(name);
    (name === null || name === undefined) && navigate("/");
    //   window.open("/");
  }, []);

  const calculate = () => {
    setType1(type);
    let number = cnt;
       
        const listOfValues = [];
        let iniValue = 0;
        let addValue = 2;
        let addChanger = -1;

        for (let i=0; i<number; i++ ){
            iniValue += addValue
            addChanger += 1 ;
            listOfValues.push(iniValue);
            if(addValue === addChanger){
                addValue += 1 ;
                addChanger =0;
            }

        }

    setRes(listOfValues);
    // console.log("function");
  };
//   console.log(res);
  return (
    <>
    <Navbar />
    <div>

        
      {/* <Navbar /> */}
      
      {/* <div className="con border">
        {res.map(
          (ele, key) =>
            key < cnt &&
            (type1 === "circle" ? (
              <input value={ele} className="setval m-2"></input>
            ) : (
              <input value={ele} className="sqr m-2"></input>
            ))
        )}
      </div> */}
    </div>
 
        <div className="container my-5">
       <div className="card my-5 col-md-6 mx-auto">
        <div className="card-body p-4">
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <input type="number" id="N" placeholder="How many numbers?"
                            className="form-control form-control-lg" value={cnt} onChange={ (e)=> setCnt(e.target.value)} />
                    </div>
                </div>
                <div className="col-12 my-3">
                    <div className="form-group">
                        <select className="form-control form-control-lg" onChange={(e)=>  setType(e.target.value)} >
                            <option value="null">Select Display Option</option>
                            <option value="rounded rounded-circle">Circle</option>
                            <option value="rounded">Square</option>
                        </select>
                    </div>
                </div>
                <div className="col-12">
                    <button type="button" className="btn btn-outline-primary btn-lg me-2" onClick={calculate} >Submit</button>
                </div>
            </div>

        </div>
    </div>
    </div>


    <div className="container my-5">

{/* {console.log(value())} */}
<div className="row justify-content-center">
    <div className="col-auto">
        <div className="card">
            <div className="card-body" id="eight_circle">
                <div className="row py-4">

                     { res.map((value , ind)=> (
                       <div className="col-auto mb-3" key={ind} >
                        <h4 className={`border border-info px-4 py-3 m-auto ${type1}`}>
                         <span>{value}</span>
                         {console.log(value)}
                     </h4>
                    </div>
                      ) )}
                    
                </div>
            </div>
        </div>
    </div>
</div>

</div>
    </>
  )
}
export default Temp;