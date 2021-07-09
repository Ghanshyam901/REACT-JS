import React,{useState,useEffect} from 'react'

function CleanUp() {
    const [count, setCount] = useState(0);
    console.log("render");
    useEffect(()=>{
        
        console.log("use EFFECT");
        document.title =`cliked ${count} times `;
        return ()=>{
            alert(`I Will be called before the next useEffect is called' ${count}`)
        }
    })

    return (
        <div>

            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>CLICK ME</button>
            
            
        </div>
    )
}

export default CleanUp
