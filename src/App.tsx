import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IProducts } from './interface/product';
import Header from './components/header';
import Silde from './components/silde';
import Products from './components/products';
import Footer from './components/footer';

function App() {
  const title = "Xin Chao"
  const products: IProducts[] =[
    {
      "id": 1,
      "name": "s1",
      "image": "https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
      "price": 0
    },
    {
      "id": 2,
      "name": "sp2",
      "image": "https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
      "price": 0
    },
    {
      "id": 3,
      "name": "sp3",
      "image": "https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
      "price": 0
    },
    {
      "id": 4,
      "name": "sp4",
      "image": "https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
      "price": 0
    }


  ]
  return (
<>
<Header title={title}/>
<Silde/>
<Products products={products}/>
<Footer/>




</>  );
}

export default App;