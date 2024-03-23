// AddProduct.js
import React, { useState } from 'react';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');

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
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} /><br />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
        <input onChange={(e:any)=>{setPrice(e.target.value)}} type='number' placeholder='Giá tiền'/><br/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Keyboard">Keyboard</option>
          <option value="Mouse">Mouse</option>
        </select><br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
