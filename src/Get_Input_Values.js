import {useState} from "react";

function Get_Input_Values(){
    const [data,setData]=useState(null)
    const [print,setPrint]=useState(false)
    {/*value will hold whole html tag from where it got invoked*/}
    function getData(val){
        setPrint(false)
        setData(val.target.value)
    }
    return(
        <>
            <input type="text" onChange={getData}/>
            <button onClick={()=>setPrint(true)}>Print Data</button>
            {
                print?<h1>{data}</h1>:null
            }

        </>
    )
}

export default Get_Input_Values