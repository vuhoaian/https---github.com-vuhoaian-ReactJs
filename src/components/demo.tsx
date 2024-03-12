import React, { useEffect, useState } from "react";
type Props ={}
const Templatedemo = (props: Props)=>{
    const[status,setStatus]=useState(true)
    const[load,setload]=useState(true)
    const handleClick=()=>{
     setStatus(!status)
    }
    const buttonClick=()=>{
        setload(!load)
    }
    useEffect(()=>{
        console.log('Click ${load}');

    },[load])
    
return(
    <>
    <div
    style={{background:(status)?"red":"blue",width:100,height:100}}
    onClick={handleClick}></div>
    <button type="button" onClick={buttonClick}>Click here</button>
</>
)

}
export default Templatedemo;