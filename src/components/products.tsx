import React from 'react';
import { IProducts } from '../interface/product';
type Props = {
  products: IProducts[]
}
const Products = (props: Props) => {
  const products: any[] = props.products;
  return (
  

<div className="row" >
{products.map((products: any, index:number)=>{
      return (  
        <>
  <div className="col-sm-3">
    <div className="card">
    
    <div>
    <img className="card-img-top" src={products.image} alt="Card image cap"/>

      <div className="card-body">
        <h5 className="card-title">{products.name}</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary"> {products.price}</a>
      </div>
    </div>
    </div>
</div>
  </>
      )
    })}

</div>
  




  
  );
}

export default Products;
