import React, { useEffect, useState } from 'react'

type Props = {}

const Templatedemo = (props: Props) => {
    const [status,setStatus] = useState(true)
    const [load,setLoad] = useState(true)
    const [products,setProduct] = useState([])
    const [page,setPage] =  useState(1)
const handleClick = ()=>{
    setStatus(!status)
}
const buttonClick =()=>{
    setPage(page+1)
}
const buttonClickprev =()=>{
    setPage(page-1)
}
  useEffect(()=>{
    // console.log(`Click ${load}`); 
    fetch(`https://dummyjson.com/products?skip=${(page-1)*10}&limit=10`)
    .then((res)=>res.json()).then((data)=>{
        setProduct(data.products);        
    });    
  },[page])
  return (
    <>
    {/* <div style={{background:(status)?"red":"blue",width:100,height:100}} onClick={handleClick}></div> */}
    {products.map((product:any)=>{
        return (
            <p>{product.title}</p>
        )
    })}
    <button type="button" onClick={buttonClickprev}>Prev page</button>
    <button type="button" onClick={buttonClick}>Next page</button>
    </>
  )
}

export default Templatedemo