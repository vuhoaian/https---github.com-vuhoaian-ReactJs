import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Addtocart from './addtocart';
const AddProductForm = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
      fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data));
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleSubmit = (e:any) => {
      e.preventDefault();
      // Gửi yêu cầu POST đến API để thêm sản phẩm mới
      const newProduct = {
        name,
        image,
        description,
        price,
        category
      };
      fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Product Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Image URL:
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                </label>
                <br />
                <label>
                    Description:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br />
                <label>
                    Price:
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <br />
                <label>
                    Category:
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Keyboard">Keyboard</option>
                        <option value="Mouse">Mouse</option>
                       
                    </select>
                </label>
                <br />
                <button type="submit">Add Product</button>
            </form>
            <h2>Product List</h2>
            <div className="container">
      <div className="row">
    {/* <div style={{background:(status)?"red":"blue",width:100,height:100}} onClick={handleClick}></div> */}
    {products.map((product:any)=>{
        return (
          <div className="col-12 col-sm-4 col-md3">
            <img src={product.image}/>
            <h3 key={product.id}>{product.name}</h3>
            <span>{product.price}</span>
            <p>{product.description}</p>
            
          </div>
        )
    })}
    </div>
    </div>
        </div>
    );
};

export default AddProductForm;
