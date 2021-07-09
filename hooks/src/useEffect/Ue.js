import React,{useState,useEffect} from 'react'

function Ue() {

    const [count, setcount] = useState(0);
    useEffect (()=>{
        console.log("useEffect rendering");
        document.title=`clicked ${count} times`
    })
    console.log("render")

    return (
        
        <div>
            <p> clicked me {count} times</p>
            <button onClick={()=>{setcount(count+1)}}> click </button>
        </div>
    )
}

export default Ue
