import React from "react";

function HIde_Show(){
    const [status,setStatus]=React.useState(true)
    return(
        <>
            <button onClick={()=>setStatus(false)}>Hide</button>
            <button onClick={()=>setStatus(true)}>Show</button>
            <button onClick={()=>setStatus(!status)}>Toggle</button>
            {
                status?<h1>Text</h1>:null
            }
        </>

    )
}

export default HIde_Show