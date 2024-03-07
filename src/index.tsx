import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Products from './components/products';
import Silde from './components/silde';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

  <Header/>
  <Silde/>
  <Products/>
  <Footer/>

 </React.StrictMode>
);


reportWebVitals();
