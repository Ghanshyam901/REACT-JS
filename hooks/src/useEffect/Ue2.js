import React,{useState,useEffect} from 'react'

function Ue2() {

const [count, setcount] = useState(0);
useEffect(()=>{
    console.log("useeffect");
    document.title=`clicked me ${count} times`
},[])
    console.log("render")
    return (
        <div>
                <p> clicked me {count} time </p>
                <button onClick={()=>{setcount(count+1)}}>CLICK ME</button>            
        </div>
    )
}

export default Ue2
