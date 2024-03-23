import React, { useState } from "react";

type Props ={}
const Products = (props: Props) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();

    fetch(`http://localhost:3000/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, image, price })
    })
    .then(response => response.json())
    .then(data => {
      setMessage('Thêm mới thành công');
      // Đặt lại giá trị của các trường nhập liệu sau khi thêm mới thành công
      setName('');
      setImage('');
      setPrice(0);
    })
    .catch(error => {
      setMessage('Lỗi: ' + error.message);
    });
  }

  return (
    <div className='container'>
      <h1>Thêm mới sản phẩm</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Tên sản phẩm'
        /><br />
        <input
          type='text'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder='Ảnh sản phẩm'
        /><br />
         <input onChange={(e:any)=>{setPrice(e.target.value)}} type='number' placeholder='Giá tiền'/><br/>
        <button type='submit'>Thêm mới</button>
      </form>
    </div>
  );
}

export default Products;
