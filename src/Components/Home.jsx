import {useState} from 'react'
import Result from './Result'

function Home() {

    const [numbers , setNumbers] = useState(0)
    const [displayOption , setDisplayOption ] = useState(null)
    const [loadResult , setLoadResult] = useState(false)

    function handleSubmit (){

        if(numbers < 0 || !displayOption){
            console.log(`warn`)
            return
        }else{
         setLoadResult(true)
        }
    }



  return (
      <>
    <div className="container my-5">
       <div className="card my-5 col-md-6 mx-auto">
        <div className="card-body p-4">
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <input type="number" id="N" placeholder="How many numbers?"
                            className="form-control form-control-lg" value={numbers} onChange={ (e)=> setNumbers(e.target.value)} />
                    </div>
                </div>
                <div className="col-12 my-3">
                    <div className="form-group">
                        <select className="form-control form-control-lg" onChange={(e)=>  setDisplayOption(e.target.value)} >
                            <option value="null">Select Display Option</option>
                            <option value="rounded rounded-circle">Circle</option>
                            <option value="rounded">Square</option>
                        </select>
                    </div>
                </div>
                <div className="col-12">
                    <button type="button" className="btn btn-outline-primary btn-lg me-2" onClick={handleSubmit} >Submit</button>
                </div>
            </div>

        </div>
    </div>
    </div>

    {loadResult === true &&
    
    
    
    // <Result numbers={numbers}  displayOption={displayOption}/> : null}




<div className="container my-5">

{/* {console.log(value())} */}
<div className="row justify-content-center">
    <div className="col-auto">
        <div className="card">
            <div className="card-body" id="eight_circle">
                <div className="row py-4">

                     {numbers.length ===1 ? (null) : numbers.map((value , ind)=> {
                    return   <div className="col-auto mb-3" key={ind} >
                        <h4 className={`border border-info px-4 py-3 m-auto ${displayOption}`}>
                         <span>{value}</span>
                     </h4>
                    </div>
                     } )}
                    
                </div>
            </div>
        </div>
    </div>
</div>

</div>
}

    </>

  )
}

export default Home