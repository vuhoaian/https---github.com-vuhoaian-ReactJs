import React from 'react'

type Props = {
    pid:number;
}

const Addtocart = (props: Props) => {
    const handleAddtoCart =()=>{
        alert(props.pid);
    }
  return (
    <button type="button" className='btn btn-primary' onClick={handleAddtoCart}>Add to cart</button>
  )
}

export default Addtocart