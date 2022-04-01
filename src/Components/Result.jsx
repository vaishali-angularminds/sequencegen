import {useState , useEffect} from 'react'

function Result({numbers , displayOption}) {

    console.log(displayOption)

    const [resultArray, setResultArray] = useState([]);
    console.log(displayOption)  


    function value (){
        let number = numbers;
       
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
        console.log(listOfValues);

return listOfValues;

// setResultArray(listOfValues)

    }


 


    useEffect(()=>{
        setResultArray(value())
    } , [])
    // console.log(value())
    return (

        
        <div className="container my-5">

            {/* {console.log(value())} */}
            <div className="row justify-content-center">
                <div className="col-auto">
                    <div className="card">
                        <div className="card-body" id="eight_circle">
                            <div className="row py-4">

                                 {resultArray.length ===1 ? (null) : resultArray.map((value , ind)=> {
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
    )
}

export default Result