import {useState} from "react";

function Input_fields(){
    const [name,setName]=useState("")
    const [tnc,isTncChecked]=useState(false)
    const [movieSelection,setMovie]=useState("")

    function getData(e){
        /*This prevent Default is added to stop refreshing page on submiting form*/
        e.preventDefault()
        console.log(name,tnc,movieSelection)
    }

    function resetFunction(){
        setName("");
        setMovie("");
        isTncChecked(false)
    }
    return(
        <div>
        <form onSubmit={getData}>
            <input type="text" onChange={(e)=>setName(e.target.value)}/><br/><br/>
            <select onChange={(e)=>setMovie(e.target.value)}>
                <option>Select Option</option>
                <option>Marvel</option>
                <option>DC</option>
            </select>
            <br/>
            <br/>
            <input type="checkbox"
                   onChange={(e)=>isTncChecked(e.target.checked)}/><span>Accept Terms and Conditions</span>
            <br/>
            <br/>
            <button type="submit">
                Submit
            </button>
            <button type="reset" onClick={resetFunction}>Reset</button>
            <br/>
        </form>
        </div>
    )
}

export default Input_fields