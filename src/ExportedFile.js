export function ExportedFile(){
    return(
        //return only accepts one tag everything must be wrapped inside a single tag
        <div>
            <h1>This is coming from Exported File</h1>
            <h3>Please have it</h3>
        </div>
    )
}

//export default ExportedFile
//import ExportedFile from 'path'

// We have export in 2 ways.
// We can write export default FunctionName  - in this case we can import this file using simple import FunctionName from "path"
// We can write export in other manner : export in-front of functionName but to import this we need to wite import {functionName} from path




