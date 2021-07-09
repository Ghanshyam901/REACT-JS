import React,{useState} from 'react'


function Us() {
 const [msgObj,setMessage] = useState({message:' ',id: 1});

 const handelChange=(e)=>{
    let val = e.target.value;
    let obj = {...msgObj,message:val};
    setMessage(obj);
 }
    return (
        <div>
            <input type='text' value={msgObj.message} onChange={handelChange} ></input>
            <p>{msgObj.message}</p>
            
        </div>
    )
}

export default Us
