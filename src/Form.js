import { useState } from 'react';

function Form() {
    const [name, setName] = useState('Devesh');
    function changeName(){
       if(name==="Devesh"){
           setName("Nidhi");
       }
       else{
           setName("Devesh");
       }
    }
    return (
        <>
            <input value={name}/>
            <p>Your name is {name}</p>
            <button onClick={changeName}>Click Me to change Name</button>
        </>
    );
}


export default Form

//basis example of setState