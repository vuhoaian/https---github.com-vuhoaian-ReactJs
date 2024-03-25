import React from "react";
import Silde from "../components/silde";
import Productlist from "../components/products";
import About from "../components/about";

type Props = {
    
}
const Home = (props:Props)=>{
    return (
       <>
       <About/>
       <Silde/>
       <Productlist/>
       </>
    )
}
export default Home