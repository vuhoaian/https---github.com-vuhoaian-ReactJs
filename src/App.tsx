import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { IProduct } from './interface/product';
import Header from './components/header';
import Silde from './components/silde';
import Productlist from './components/products';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import Client from './layout/client';
import Dashbroard from './layout/dashboard';
import Home from './layout/home';
import Details from './components/detail';
import Templatedemo from './components/demo';
import Products from './components/admin/products';
import AddProduct from './components/admin/Addproduct';
import AddProductForm from './components/productsList';


function App() {
  
  return (

 <Routes>
   <Route path='/' Component={Client}>
    <Route path='' Component={Home}/>
    <Route path='' Component={Home}/>
    <Route path='details/:id' Component={Details}/>
    <Route path='demo' Component={Templatedemo}/>
   </Route>
   <Route path='/dashboard' Component={Dashbroard}>
    <Route path='product' Component={Products}/>
    <Route path='addproductform' Component={AddProductForm} />
   </Route>
   
 </Routes>

  );
}

export default App;