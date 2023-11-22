function Student(props){
    const {name,email,other}=props;
    //destructing - otherswise each value has to be accessed via props.name , props.email, props.other
    return(
        <div style={{backgroundColor:"skyblue" ,margin:"10px"}}>
        <h1>{name}</h1>
            <h2>{email}</h2>
            <h2>{other.address}</h2>
        </div>
    )
}

export default Student